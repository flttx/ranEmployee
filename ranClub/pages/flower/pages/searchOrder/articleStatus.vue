<template>
	<view class="content">
		<view class="flow-box">
			<view class="flow-item">
				<text>开单<text class="point">门店开单人</text></text>
				<text>2018-01-01  15:12</text>
			</view>
			<view class="flow-item">
				<text>物流接收<text class="point">物流</text></text>
				<text>2018-01-01  15:30</text>
			</view>
			<view class="flow-item">
				<text>送至工厂<text class="point">物流</text></text>
				<text>2018-01-01  18:30</text>
			</view>
			<view class="flow-item">
				<text>从工厂取回<text class="point">物流</text></text>
				<text>2018-01-01  18:50</text>
			</view>
			<view class="flow-item">
				<text>送至门店<text class="point">物流</text></text>
				<text>2018-01-01  20:50</text>
			</view>
			<view class="flow-item">
				<text>门店接收<text class="point">门店</text></text>
				<text>2018-01-01  21:20</text>
			</view>
			<view class="flow-item">
				<text>顾客签收（顾客到店）<text class="point">门店</text></text>
				<text>2018-01-04  18:10</text>
			</view>
			<view class="flow-item">
				<text>物件完成</text>
			</view>
			<view class="btn-row">
				<button>返回首页</button>
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
		
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/searchOrder/articleStatus.scss";
</style>
