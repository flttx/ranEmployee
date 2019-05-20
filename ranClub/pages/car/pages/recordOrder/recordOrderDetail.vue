<template>
	<view class="content">
		<view class="header">
			订单ID：201901010001
		</view>
		
		<view class="order-info">
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
			
			<p class="box-title">车辆信息</p>
			<view class="box">
				<view class="car-info">
					<view class="car-info-line">
						<text class="car-info-item">
							<image src="../../../../static/imgs/common/person.png"></image>
							<text>许小新</text>
						</text>
						<text class="car-info-item">
							<image src="../../../../static/imgs/common/phone.png"></image>
							<text>18318318333</text>
						</text>
					</view>
					<view class="car-info-line">
						<text class="car-info-item">
							<image src="../../../../static/imgs/car/record.png"></image>
							<text>奔驰</text>
						</text>
						<text class="car-info-item">
							<image src="../../../../static/imgs/car/car.png"></image>
							<text>小车</text>
							<text class="car-color"></text>
						</text>
					</view>
					<view class="remark">
						备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
					</view>
				</view>
			</view>
			
			
			<p class="box-title">服务项目</p>
			<view class="box">
				<view class="service-info">
					<view class="service-item">
						<p class="service-item-name">精致洗车</p>
						<text class="grey">已完工</text>
						<text class="red">可用‘已购服务’结算</text>
						<view class="service-item-price">
							<text class="line-through grey">298.00</text>
							<text class="red">149.00</text>
						</view>
					</view>
					<view class="service-item">
						<p class="service-item-name">内饰深度清洁</p>
						<text class="grey">已完工</text>
						<view class="service-item-price">
							<text class="line-through grey">880.00</text>
							<text class="red">440.00</text>
						</view>
					</view>
					<!-- <view class="tip">已入账订单，不可编辑</view> -->
				</view>
			</view>
			
			<p class="box-title">销售产品</p>
			<view class="box">
				<view class="product-info">
					<text>玻璃水</text>
					<text class="desc grey">备注备注备注</text>
				</view>
				<text class="product-num">*1</text>
				<view class="service-item-price right">
					<text class="line-through grey">20.00</text>
					<text class="red">20.00</text>
				</view>
			</view>
			
			<p class="pay-sum">
				应付总计：<text>849.00</text>元
			</p>
			
		</view>
		
		<hr />
		
		<view class="settlement-info">
			<p class="box-title">结算信息</p>
			<view class="box">
				<view class="service-info">
					<view class="service-item">
						<p class="service-item-name">已购服务-精致洗车</p>
						<text class="grey">2019-02-12 15：00</text>
						<view class="service-item-price">
							<text class="red">149.00</text>
						</view>
					</view>
					<view class="service-item">
						<p class="service-item-name">会员余额</p>
						<text class="grey">2019-02-12 15：00</text>
						<view class="service-item-price">
							<text class="red">440.00</text>
						</view>
					</view>
				</view>
			</view>
			<p class="pay-sum">
				已付总计：<text>849.00</text>元
			</p>
		</view>
		
		<view class="bottom">
			<text class="bottom-btn">反入账</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/recordOrder/recordOrderDetail.scss";
</style>
