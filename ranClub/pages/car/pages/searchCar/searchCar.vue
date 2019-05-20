<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
		</view>
			
		<scroll-view class="scroll-wrapper" @scrolltolower="loadCarList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li" @tap="toCarDetail">
					<view class="car-info">苏A UP688 | 大众 </view>
					<view class="user-info">许小新， 18318318333</view>
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
		
		methods:{
			//跳转车辆详情
			toCarDetail(){
				uni.navigateTo({
					url: "./carDetail",
					animationType: "fade-in"
				})
			},
			
			loadCarList(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/searchCar/searchCar.scss";
</style>
