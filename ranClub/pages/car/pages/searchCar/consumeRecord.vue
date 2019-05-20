<template>
	<view class="content">
		<view>
			<view class="search" style="width: 60%;">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
			</view>
			<text class="date-btn">日期</text>
		</view>
		
	
		<scroll-view class="scroll-wrapper" @scrolltolower="loadConsumeList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li" @tap="toOrderDetail">
					<view class="car-no">
						201902200001
					</view>
					<text class="order-date">2019-02-12 11:00</text>
					<view class="order-item">
						<text>精致洗车 | 待施工</text>
						<text>内饰深度清洁 | 施工中</text>
						<text>玻璃油膜清洁 | 已完工</text>
						<text>玻璃水</text>
					</view>
					<text class="order-money">849元</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				consumeList: [],  //消费记录
				pageSize: 10,
			}
		},
	
		methods:{
			//加载消费记录列表
			loadConsumeList(){
				
			},
			
			//跳转订单详情
			toOrderDetail(){
				uni.navigateTo({
					url: "../recordOrder/recordOrderDetail",
					animationType: "fade-in"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/orderList/orderList.scss";
</style>
