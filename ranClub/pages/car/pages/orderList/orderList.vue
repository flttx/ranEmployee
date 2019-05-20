<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
		</view>
	
		<scroll-view class="scroll-wrapper" @scrolltolower="loadOrderList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						临牌
					</view>
					<text class="order-date">2019-02-12 11:00</text>
					<text class="order-money">0元</text>
				</view>
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				<view class="li">
					<text class="order-status">未下单</text>
					<view class="car-no">
						苏A UP688 | 大众
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
				orderList: [],  //订单列表
				pageSize: 10,
			}
		},
	
		methods:{
			//加载订单列表
			loadOrderList(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/orderList/orderList.scss";
</style>
