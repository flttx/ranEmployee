<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
			</view>
		</view>
	
		<view class="scroll-wrapper" @scrolltolower="loadOrderList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li">
					<view class="icon">
						<text class="uni-icon uni-icon-checkmarkempty"></text>
					</view>
					<view class="order-info">
						<view class="car-no">
							苏A UP688 | 大众
						</view>
						<text class="order-date">2019-02-12 11:00</text>
						<view class="order-item">
							<text>精致洗车 | 已完工</text>
							<text>内饰深度清洁 | 已完工</text>
							<text>玻璃油膜清洁 | 已完工</text>
							<text>玻璃水</text>
						</view>
						<text class="order-money">
							<text class="pay-money">应付：849元</text>
							<text class="credit-money">挂账：849元</text>
						</text>
					</view>
				</view>
				<view class="li">
					<view class="icon">
						<text class="uni-icon uni-icon-checkmarkempty"></text>
					</view>
					<view class="order-info">
						<view class="car-no">
							苏A UP688 | 大众
						</view>
						<text class="order-date">2019-02-12 11:00</text>
						<view class="order-item">
							<text>精致洗车 | 已完工</text>
							<text>内饰深度清洁 | 已完工</text>
							<text>玻璃油膜清洁 | 已完工</text>
							<text>玻璃水</text>
						</view>
						<text class="order-money">
							<text class="pay-money">应付：849元</text>
							<text class="credit-money">挂账：849元</text>
						</text>
					</view>
				</view>
				
			</view>
		</view>
	
	
		<view class="bottom">
			<radio-group>
				<label class=""><radio value="r1"/>全选</label>
			</radio-group>
		
			<text class="btn">还款</text>
		
			<view class="sum-money">
				<text>挂账单数：<text>0</text></text>
				<text>挂账金额：<text>0元</text></text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		methods: {
			loadOrderList(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/creditOrder/creditOrder.scss";
</style>
