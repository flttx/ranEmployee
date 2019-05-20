<template>
	<view class="content">
		<view class="box-title">
			会员消费
		</view>
		<view class="box">
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
			
			<view class="row">
				<label class="colname">取件方式</label>
				<view class="value">邮寄</view>
			</view>
			
			<view class="row">
				<label class="colname">地址</label>
				<view class="value">江苏省南京市玄武区德基写字楼1888</view>
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
						<view>翻新 </view>
						<view class="item-price">￥400<text class="original-price red">￥500</text></view>
						<text class="view-btn" @tap="toArticleDetail">查看物件</text>
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
						<view>维修+翻新 </view>
						<view class="item-price">￥400<text class="original-price red">￥500</text></view>
					</view>
				</view>
				<view class="item-remark">备注：备注备注备注备注</view>
			</view>
			<view class="total-price"><text class="total">订单总额：￥1200.00</text></view>
			<view class="extra-price">会员余额：¥1000.00</view>
			<view class="extra-price">实体现金券：¥200.00</view>
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
			//跳转物件详情
			toArticleDetail(){
				uni.navigateTo({
					url: "../openOrder/articleDetail?type=3",
					animationType: "fade-in"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/openOrder/openOrderDetail.scss";
</style>
