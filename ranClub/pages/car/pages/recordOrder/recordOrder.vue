<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
			</view>
			<text class="statistics-btn">统计</text>
		</view>
	
		<scroll-view class="scroll-wrapper" @scrolltolower="loadOrderList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li">
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
				
			}
		},
		
		methods: {
			loadOrderList(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/recordOrder/recordOrder.scss";
</style>
