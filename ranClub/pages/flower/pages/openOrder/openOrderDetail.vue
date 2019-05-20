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
				<label class="colname">取货时间</label>
				<input type="text" class="disabled" disabled placeholder="请选择取货时间" v-model="receiveDate" @tap="pickerDate"/>
			</view>
			
			<view class="row">
				<label class="colname">取货方式</label>
				<radio-group @change="selectReceiveWay">
					<label class="radio-item"><radio checked value="1"/>自取</label>
					<label class="radio-item"><radio value="2"/>送货上门</label>
				</radio-group>
			</view>
			
			
			<view class="input-row">
				<label class="colname">地址</label>
				<textarea></textarea>
			</view>
			
			<view class="input-row">
				<label class="colname">备注</label>
				<input type="text" placeholder="请输入备注"/>
			</view>
			
			<hr style="margin-top: 20upx;"/>
			
			<view class="input-row">
				<label class="colname">物品用途</label>
				<radio-group @change="selectUse">
					<label class="radio-item"><radio checked value="1"/>礼品</label>
					<label class="radio-item"><radio value="2"/>自用</label>
				</radio-group>
			</view>
			
			<view class="input-row" v-if="useType == 1">
				<label class="colname">祝福卡片</label>
				<radio-group @change="selectCard">
					<label class="radio-item"><radio checked value="1"/>不需要</label>
					<label class="radio-item"><radio value="2"/>需要</label>
				</radio-group>
			</view>
			
			<block v-if="useType == 1 && needCard">
				<view class="input-row">
					<label class="colname">卡片收件人</label>
					<input type="text" placeholder="请输入卡片收件人"/>
				</view>
				
				<view class="input-row">
					<label class="colname">卡片内容</label>
					<input type="text" placeholder="请输入卡片内容"/>
				</view>
			</block>
		</view>
		
		<view class="box-title">花束明细</view>
		<view class="box" @tap="clickHandler">
			<view class="item">
				<view class="item-name">201903080001-01</view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view>情人节花束1</view>
						<view>1束 <text class="operation" data-id="edit">编辑</text></view>
						<view class="item-price">￥400<text class="original-price red">￥500</text><text class="operation" data-id="delete">删除</text></view>
					</view>
				</view>
			</view>
			<view class="item">
				
			</view>
			<view class="add-row">
				<text data-id="add">
					<text data-id="add">添加花束</text>
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
			<view>负责人<text style="margin-left: 20upx">许新</text></view>
			<button>确认开单</button>
		</view>
		
		

		<view class="mask" @touchmove.stop.prevent="" @tap="hideMask" v-if="showDiscount || showSettlement"></view>
		
		
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
				receiveDate: "",  //取货时间
				useType: 1, //用途，1-礼品，2-自用
				needCard: false, //需要卡片
				
				settlementWays: [{name: "会员余额", value: "会员余额", checked: false},{name: "微信支付", value: "微信支付", checked: false},
				{name: "支付宝支付", value: "支付宝支付", checked: false},{name: "POS机", value: "POS机", checked: false},
				{name: "现金", value: "现金", checked: false},{name: "德基消费卡", value: "德基消费卡", checked: false},
				{name: "实体现金券", value: "实体现金券", checked: false},{name: "登记免费", value: "登记免费", checked: false}],  //结算方式
				showSettlement: false,  //显示支付方式面板
				showDiscount: false, //显示优惠面板
				tabs: ["优惠券", "优惠服务"],   
				currentIndex: 0,
				
				deduction: '',  //会员余额抵扣金额
				
				flowerList: [{
					id: 1,
					no: "201903080001-01",
					type: "情人节花束1",
					num: 1,
					
				}]
			}
		},
		
		onLoad(option) {
			this.type = option.type;
			if(option.operationType){
				this.operationType = option.operationType;
			}
		},
		
		methods:{
			//选择日期
			pickerDate() {
				plus.nativeUI.pickDate(function(e) {
					var d = e.date;
					console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
				}, function(e) {
					console.log("未选择日期：" + e.message);
				}, {
					title: "请选择日期：",
					maxDate: new Date()
				});
			},
			
			//隐藏蒙版
			hideMask(){
				this.showDiscount = false, this.showSettlement = false;
			},
			
			//点击事件
			clickHandler(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					switch(id){
						case "add":   //点击添加物件
							
							break;
						case "edit":  //点击编辑
							
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
	@import "../../../../scss/flower/receiveOrder/orderDetail.scss";
</style>
