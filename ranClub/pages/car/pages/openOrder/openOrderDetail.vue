<template>
	<view class="content">
		<view class="header">
			订单ID：201901010001
		</view>
		
		<view class="order-info" @tap="clickHandler">
			<view class="box">
				<view class="car-title">
					<text class="memberLevel">3000会员</text>
					<text class="coupon">券*7</text>
				</view>
				<p class="car-no">苏A 12345</p>
				<text class="member-info">
					许小新 | A00001 | 213.13元
				</text>
			</view>
			<view class="changeMember">
				<text class="click" data-url="orderMemberList">更换订单会员</text>
			</view>
			
			<p class="box-title">车辆信息</p>
			<view class="box">
				<view class="car-info"  @tap="toCarInfo">
					<view class="car-info-line">
						<view class="car-info-item">
							<image src="../../../../static/imgs/common/person.png"></image>
							<text id="carOwner">许小新</text>
						</view>
						<view class="car-info-item">
							<image src="../../../../static/imgs/common/phone.png"></image>
							<text id="phoneNumber">18318318333</text>
						</view>
					</view>
					<view class="car-info-line">
						<view class="car-info-item">
							<image src="../../../../static/imgs/car/record.png"></image>
							<text id="carBrand">奔驰</text>
						</view>
						<view class="car-info-item">
							<image src="../../../../static/imgs/car/car.png"></image>
							<text>小车</text>
							<text class="car-color"></text>
						</view>
					</view>
					<view class="remark">
						备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
					</view>
				</view>
			</view>
			
			<p class="box-title">服务项目 <text class="uni-icon uni-icon-plusempty click" data-url="serviceList"></text></p>
			<view class="menu-box" v-if="serviceItems.length == 0">
				<text class="click">+精致洗车</text>
				<text class="click" data-url="serviceList">+其他项目</text>
			</view>
			<view class="box" v-else>
				<view class="service-item" v-for="(item, index) in serviceItems" :key="index">
					<p class="service-item-name">{{item.name}}</p>
					<text class="grey">{{item.status}}</text>
					<text class="red" v-if="item.remark != ''">{{item.remark}}</text>
					<view class="service-item-price">
						<text class="line-through grey">{{item.originalPrice | moneyValue}}</text>
						<text class="red">{{item.discountPrice | moneyValue}}</text>
					</view>
					<image class="delete-icon" src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap.stop.prevent="deleteService"></image>
				</view>
			</view>
			
			<p class="box-title">销售产品 <text class="uni-icon uni-icon-plusempty click" data-url="productList"></text></p>
			<view class="menu-box" v-if="products.length == 0">
				<text class="click">+玻璃水</text>
				<text class="click" data-url="productList">+其他</text>
			</view>
			<view class="box" v-else>
				<view class="product-item" v-for="(item, index) in products" :key="index">
					<view class="product-info">
						<text>{{item.name}}</text>
						<text class="desc grey">{{item.remark}}</text>
					</view>
					<text class="product-num">*{{item.num}}</text>
					<view class="service-item-price right">
						<text class="line-through grey">{{item.originalPrice | moneyValue}}</text>
						<text class="red">{{item.discountPrice | moneyValue}}</text>
					</view>
					<image class="delete-icon" src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap.stop.prevent="deleteProduct"></image>
				</view>
			</view>
			
			
			<view class="pay-money">应付总计：<text>{{sumPrice}}元</text></view>
			
			<p class="box-title">结算信息 <text class="uni-icon uni-icon-plusempty click" @tap="clickSettlement"></text><text class="click btn" @tap="clickDiscount" v-if="payInfos.length > 0">使用优惠</text> </p>
			<view class="menu-box" v-if="discountInfos.length == 0 && payInfos.length == 0">
				<text class="click" @tap="clickDiscount">使用优惠</text>
				<text class="click" @tap="clickSettlement">支付方式</text>
			</view>
			
			<view class="box" v-else>
				<view class="service-item" v-for="(item, index) in discountInfos" :key="index">
					<p class="service-item-name">{{item.name}}</p>
					<text class="grey">{{item.time}}</text>
					<view class="service-item-price min">
						<text class="red">{{item.price | moneyValue}}</text>
					</view>
					<image class="delete-icon" src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap.stop.prevent="deleteDiscount"></image>
				</view>
				<view class="service-item" v-for="(item, index) in payInfos" :key="index">
					<p class="service-item-name">{{item.name}}</p>
					<text class="grey">{{item.time}}</text>
					<view class="service-item-price min" v-if="item.price != 0">
						<text class="red">{{item.price | moneyValue}}</text>
					</view>
					<image class="delete-icon" src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap.stop.prevent="deletePay"></image>
				</view>
			</view>
			
			<view class="pay-money">已付总计：<text>{{paidPrice}}元</text></view>
			
			<view class="btn-box">
				<!-- <button class="click" data-url="../creditOrder/creditOrder">挂账</button> -->
				<button class="click" style="float: right;" data-url="../recordOrder/recordOrder">入账</button>
			</view>
			
		</view>
		
		
		<view class="mask" v-if="showSettlement || showDiscount || showServiceEdit || showProductEdit" @touchmove.stop.prevent="" @tap="hideMask"></view>
		<view class="settlement-box" v-if="showSettlement">
			<checkbox-group @change="selectPayWay">
				<label class="checkbox-item" v-for="(item, index) in settlementWays" :key="index">
					<checkbox :value="index + ''" name="settlement" :checked="item.checked"/>{{item.name}}
					<view class="input-box" v-if="index==0">
						<input type="number" @input="selectBalance" v-model="deduction"/><text>元</text>
					</view>
					<view style="balance" v-if="index==0">（剩余1000.00）</view>
				</label>
			</checkbox-group>
			<view class="settlement-btn-box" @tap="clickSettlementBtn">
				<button data-id="cancel">取消</button>
				<button data-id="confirm">确定</button>
			</view>
		</view>
		
		<view class="discount-box" v-if="showDiscount">
			<view style="height: 40upx;">
				<text class="close" @tap="hideMask">关闭</text>
			</view>
			
			<view class="tabs">
				<text class="tab-item" v-for="(tab, index) in tabs" :key="index" :data-index="index" @tap="changeTab">
					{{tab}}
					<text class="bar" v-if="currentIndex == index"></text>
				</text>
			</view>
			<swiper :current="currentIndex" @change="changeSwiper">
				<swiper-item v-for="(tab, index) in tabs" :key="index">
					<scroll-view scroll-y style="height: 100%;">
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
						
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
						
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
						
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
						
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
						
						<view class="coupon-box">
							<text class="price">
								<text>10</text>元
							</text>
							<view class="coupon-info">
								<view class="coupon-name single-line">券名称巴拉巴拉</view>
								<view class="coupon-desc single-line">使用说明</view>
								<view class="coupon-date">2018-11-21 至 2019-11-21</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="edit-box" v-if="showServiceEdit">
			<p>修改订单</p>
			<view class="name">
				精致洗车
				<view class="status-btn" @tap="clickStatusBtn">施工</view>
			</view>
			<input :placeholder="'原价：'+editItem.originalPrice"/>
			<input :placeholder="'优惠后价格：'+editItem.discountPrice"/>
			<textarea v-model="editItem.remark" :placeholder="editItem.remark != ''?editItem.remark:'备注'"></textarea>
			<view class="setting">
				<text @tap="toServiceSetting">更多设置<text class="uni-icon uni-icon-arrowright"></text></text>
			</view>
			<view class="edit-btn-box">
				<button>确定</button>
			</view>
		</view>
		
		<view class="edit-box" v-if="showProductEdit">
			<p>修改订单</p>
			<view class="name">
				精致洗车
				<view class="operation-box">
					<text class="uni-icon uni-icon-minus" @tap="clickMinus"></text>
					<text class="operation-num">10</text>
					<text class="uni-icon uni-icon-plus" @tap="clickPlus"></text>
				</view>
			</view>
			<input :placeholder="'原价：'+editItem.originalPrice"/>
			<input :placeholder="'优惠后价格：'+editItem.discountPrice"/>
			<textarea v-model="editItem.remark" :placeholder="editItem.remark != ''?editItem.remark:'备注'"></textarea>
			<view class="setting">
				<text @tap="toProductSetting">更多设置<text class="uni-icon uni-icon-arrowright"></text></text>
			</view>
			<view class="edit-btn-box">
				<button>确定</button>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import util from "../../../../common/util.js";
	
	export default{
		data(){
			return{
				settlementWays: [{name: "会员余额", value: "会员余额", checked: false},{name: "微信支付", value: "微信支付", checked: false},
				{name: "支付宝支付", value: "支付宝支付", checked: false},{name: "POS机", value: "POS机", checked: false},
				{name: "现金", value: "现金", checked: false},{name: "德基消费卡", value: "德基消费卡", checked: false},
				{name: "实体现金券", value: "实体现金券", checked: false},{name: "登记免费", value: "登记免费", checked: false}],  //结算方式
				showSettlement: false,  //显示支付方式面板
				showDiscount: false, //显示优惠面板
				tabs: ["优惠券", "优惠服务"],   
				currentIndex: 0,
				
				serviceItems: [],  //服务项目
				products: [],  //销售产品
				discountInfos: [],  //优惠信息
				payInfos: [],  //支付信息
				hasPayWay: false,  //是否已选择支付方式
				showServiceEdit: false,  //显示服务项目修改面板
				showProductEdit: false,  //显示产品修改面板
				editItem: {
					name: "",
					originalPrice: 0,
					discountPrice: 0,
					newOriginalPrice: 0,
					newDiscountPrice: 0,
					remark: "",
					status: "",
				},  //修改的项目
				
				sumPrice: 0, //应付总价
				paidPrice: 0, //已付总价
				
				deduction: 1000,  //会员余额抵扣金额
			}
		},
		
		onLoad() {
			let _this = this;
			
			//监听下个页面触发的自定义事件
			this.$on("calculatePrice", function(param){
				_this.calculateSumPrice();
			});
		},
		
		methods: {
			//页面元素点击事件
			clickHandler(e){
				if(e.target.dataset.url){
					let pageUrl = e.target.dataset.url;
					uni.navigateTo({
						url: "./" + pageUrl,
						animationType: "fade-in"
					})
				}
			},
			
			//跳转车辆信息
			toCarInfo(){
				uni.navigateTo({
					url: "./carInfo"
				})
			},
			
			//点击支付方式
			clickSettlement(){
				this.showSettlement = true;
			},
			
			//点击支付方式
			clickDiscount(){
				this.showDiscount = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showSettlement = false, this.showDiscount = false, this.showServiceEdit = false, this.showProductEdit = false;
			},
			
			//点击结算面板底部按钮
			clickSettlementBtn(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "confirm"){
						if(this.hasPayWay){
							let time = util.formatTimeYMDHM(new Date());
							let arr = [];
							this.settlementWays.map(function(item, index){
								if(item.checked){
									arr.push({
										name: item.name,
										time: time,
										price: 0,
										payIndex: index
									});
								}
							});
							if(this.deduction != '' && this.deduction != 0){
								arr[0].price = this.deduction;
							}
							this.payInfos = arr;
							
						} else {
							uni.showToast({
								title: "请选择支付方式",
								icon: "none"
							});
							return;
						}
					}
					this.showSettlement = false;
				}
			},
			
			//切换tab
			changeTab(e){
				this.currentIndex = e.currentTarget.dataset.index;
			},
			
			//切换轮播
			changeSwiper(e){
				this.currentIndex = e.detail.current;
			},
			
			//选择余额
			selectBalance(){
				this.settlementWays[0].checked = true;
			},
			
			//选择支付方式
			selectPayWay(e){
				if(e.detail.value) {
					let values = e.detail.value;
					this.hasPayWay = values.length>0;

					//遍历数组，将选中的元素checked置为true,其余的置为false
					this.settlementWays.map(function(item,index){
						item.checked = values.includes(index.toString());
					});
				}
			},
			
			//删除服务项目
			deleteService(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.serviceItems.splice(index, 1);
			},
			
			//删除产品
			deleteProduct(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.products.splice(index, 1);
			},
			
			//删除优惠
			deleteDiscount(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.discountInfos.splice(index, 1);
			},
			
			//删除支付
			deletePay(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.settlementWays[this.payInfos[index].payIndex].checked = false;
				this.payInfos.splice(index, 1);
			},
			
			//计算应付总价
			calculateSumPrice(){
				let sum = 0;
				this.serviceItems.map(function(item){
					sum += item.discountPrice;
				});
				this.products.map(function(item){
					sum += item.discountPrice;
				});
				this.sumPrice = sum;
			},
			
			//计算已付总价
			calculatePaidPrice(){
				let sum = 0;
				this.discountInfos.map(function(item){
					sum += item.price;
				});
				this.payInfos.map(function(item){
					sum += item.price;
				});
				this.paidPrice = sum;
			},
			
			
			//点击修改面板的状态按钮
			clickStatusBtn(){
				uni.navigateTo({
					url: "./constructionMember",
					animationType: "fade-in"
				})
			},
			
			//点击减
			clickMinus(){
				
			},
			
			//点击加
			clickPlus(){
				
			},
			
			//跳转产品设置
			toProductSetting(){
				uni.navigateTo({
					url: "./productSetting",
					animationType: "fade-in"
				})
			},
			
			//跳转产品设置
			toServiceSetting(){
				uni.navigateTo({
					url: "./serviceSetting",
					animationType: "fade-in"
				})
			}
			
		}
		
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/openOrderDetail.scss";
</style>
