<template>
	<view class="content">
		<view class="box-title">
			会员消费
		</view>
		<view class="box">
			<block v-if="type == 1">
				<view class="row">
					<label class="colname">顾客姓名</label>
					<view class="value">许小新</view>
				</view>
				<view class="row">
					<label class="colname">联系方式</label>
					<view class="value">
						<text>18305172222</text>
						<view><text>余额：1000元</text><text class="member-level">3000会员</text></view>
					</view>
				</view>
			</block>
			<block v-else>
				<view class="input-row">
					<label class="colname">顾客姓名</label>
					<input type="text" disabled placeholder="请输入顾客姓名" />
				</view>
				<view class="input-row">
					<label class="colname">联系方式</label>
					<input type="text" disabled placeholder="请输入联系方式" />
				</view>
			</block>
			
			<view class="input-row">
				<label class="colname">取件方式</label>
				<input type="text" class="disabled" disabled placeholder="请选择取件方式" v-model="pickWay" @tap="showPick"/>
			</view>
			
			<view class="input-row">
				<label class="colname">地址</label>
				<textarea></textarea>
			</view>
			
			<view class="row">
				<label class="colname">开单人</label>
				<view class="value">许新</view>
			</view>
		</view>
		
		<view class="box-title">物件明细</view>
		<view class="box" @tap="clickHandler">
			<view class="item">
				<view class="item-name">物件01<text class="red">【加急】</text></view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view>箱包 Gucci 蓝色</view>
						<view>翻新 <text class="operation" data-id="edit">编辑</text></view>
						<view class="item-price">￥400<text class="original-price red">￥500</text><text class="operation" data-id="delete">删除</text></view>
					</view>
				</view>
				<view class="item-remark">备注：备注备注备注备注</view>
			</view>
			<view class="item">
				<view class="item-name">物件02</view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view>鞋靴 LV 黑色</view>
						<view>维修+翻新 <text class="operation">编辑</text></view>
						<view class="item-price">￥400<text class="original-price red">￥500</text><text class="operation">删除</text></view>
					</view>
				</view>
				<view class="item-remark">备注：备注备注备注备注</view>
			</view>
			<view class="add-row">
				<text data-id="add">
					<text data-id="add">添加物件</text>
					<text class="uni-icon uni-icon-plusempty" data-id="add"></text>
				</text>
			</view>
			<view class="total-price">订单总额：￥1200.00</view>
			<view class="btn-row">
				<button data-id="discount">使用优惠</button>
				<button data-id="payWay">请选择付款方式</button>
			</view>
		</view>
		
		
		<view class="bottom">
			<button>确认开单</button>
		</view>
		
		

		<view class="mask" @touchmove.stop.prevent="" @tap="hideMask" v-if="showPickBox || showDiscount || showSettlement"></view>
		
		<!-- 取件方式面板 -->
		<view class="pick-box" v-if="showPickBox">
			<view class="pick-way">
				<text v-for="(item, index) in pickWays" :key="index" :data-index="index+''" @tap="selectPickWay">{{item.name}}</text>
			</view>
		</view>
		
		
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
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type: 1,  //1-会员，2-散客
				pickWays: [{name: "至店", value: "至店"},{name: "邮寄", value: "邮寄"},{name: "同城上门", value: "同城上门"}],  //取件方式
				showPickBox: false,  //显示取件方式面板
				pickWay: "",  //取件方式
				
				settlementWays: [{name: "会员余额", value: "会员余额", checked: false},{name: "微信支付", value: "微信支付", checked: false},
				{name: "支付宝支付", value: "支付宝支付", checked: false},{name: "POS机", value: "POS机", checked: false},
				{name: "现金", value: "现金", checked: false},{name: "德基消费卡", value: "德基消费卡", checked: false},
				{name: "实体现金券", value: "实体现金券", checked: false},{name: "登记免费", value: "登记免费", checked: false}],  //结算方式
				showSettlement: false,  //显示支付方式面板
				showDiscount: false, //显示优惠面板
				tabs: ["优惠券", "优惠服务"],   
				currentIndex: 0,
				
				deduction: '',  //会员余额抵扣金额
			}
		},
		
		onLoad(option) {
			this.type = option.type;
			if(option.operationType){
				this.operationType = option.operationType;
			}
		},
		
		methods:{
			//显示取件方式
			showPick(){
				this.showPickBox = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showPickBox = false, this.showDiscount = false, this.showSettlement = false;
			},
			
			
			//选择取件方式
			selectPickWay(e){
				let index = e.currentTarget.dataset.index;
				this.pickWay = this.pickWays[index].name;
				this.showPickBox = false;
			},
			
			//点击事件
			clickHandler(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					switch(id){
						case "add":   //点击添加物件
							uni.navigateTo({
								url: "./articleDetail",
								animationType: "fade-in"
							});
							break;
						case "edit":  //点击编辑
							uni.navigateTo({
								url: "./articleDetail",
								animationType: "fade-in"
							});
							break;
						case "delete":  //点击删除
							uni.showModal({
								title: "提示",
								content: "确定要删除？",
								cancelText: "否",
								confirmText: "是",
								success: (res)=>{
									if (res.confirm) {
										console.log('用户点击是');
									} else if (res.cancel) {
										console.log('用户点击否');
									}
								}
							});
							break;
						case "discount": //点击优惠
							this.showDiscount = true;
							break;
						case "payWay":  //点击付款方式
							this.showSettlement = true;
							break;
					}
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
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/openOrder/openOrderDetail.scss";
</style>
