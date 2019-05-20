<template>
	<view class="content">
		<view class="header">
			<text class="uni-icon uni-icon-arrowthindown"></text>
			<text class="uni-icon uni-icon-arrowthinup"></text>
			<view class="date-picker" @tap="pickerDate">
				<!-- <picker mode="date" :value="date"  @change="bindDateChange">
					<view class="date-value">下单时间: {{date}}</view>
				</picker> -->
				<view class="date-value">下单时间: {{date}}</view>
			</view>
		</view>

		<view class="tabs">
			<text class="tabs-item" v-for="(tab, index) in tabs" :key="index" :data-index="index" @tap="changeTab">
				{{tab.value}}
				<text class="bar" v-if="index==currentIndex"></text>
			</text>
		</view>

		<swiper :current="currentIndex" @change="changeSwiper">
			<swiper-item v-for="(tab, tabIndex) in tabs" :key="tabIndex">
				<scroll-view style="height: 100%;" scroll-y>
					<view class="li" v-for="(item, index) in tab.data" :key="index" @tap="toOrderDetail">
						<view class="main-info">
							<view class="order-no">{{item.order_no}}</view>
							<view class="order-user">{{item.user}} {{item.mobile}}</view>
							<view class="order-price">{{item.price}}元</view>
						</view>
						<view class="other-info">
							<text class="car-no">{{currentIndex==0?item.car_no:item.remark}}</text>
							<text class="worker">{{currentIndex==0?'开单':currentIndex==1?'充值':'操作'}}人：{{item.worker}}</text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: "",
				tabs: [{
						value: "消费",
						data: [{  //消费列表
							order_id: 1,
							order_no: 201901010001,
							user: '许孝新',
							mobile: 18305172222,
							price: 798.00,
							car_no: '苏A PU211',
							worker: '许新'
						}, {
							order_id: 2,
							order_no: 201901010002,
							user: '许孝新',
							mobile: 18305172222,
							price: 798.00,
							car_no: '苏A PU211',
							worker: '许新'
						}]
					},
					{
						value: "充值",
						data: [{  //充值列表
							order_id: 1,
							order_no: 201901010003,
							user: '许孝新',
							mobile: 18305172222,
							price: 799.00,
							remark: '备注备注备注',
							worker: '许新'
						}]
					},
					{
						value: "年卡",
						data: [{  //年卡列表
							order_id: 1,
							order_no: 201901010004,
							user: '许孝新',
							mobile: 18305172222,
							price: 797.00,
							remark: '备注备注备注',
							worker: '许新'
						}, {
							order_id: 2,
							order_no: 201901010005,
							user: '许孝新',
							mobile: 18305172222,
							price: 790.00,
							remark: '备注备注备注',
							worker: '许新'
						}]
					}
				],
				currentIndex: 0,
			}
		},

		methods: {
			//日期选择
			bindDateChange: function(e) {
				this.date = e.target.value
			},

			//切换tab
			changeTab(e) {
				this.currentIndex = e.currentTarget.dataset.index;
			},

			//切换轮播
			changeSwiper(e) {
				this.currentIndex = e.detail.current;
			},

			//跳转消费详情
			toOrderDetail() {

			},

			//跳转充值详情
			toRechargeDetail() {
				uni.navigateTo({
					url: "./rechargeDetail?type=1",
					animationType: "fade-in"
				});
			},

			//跳转年卡详情
			toYearCardDetail() {
				uni.navigateTo({
					url: "./rechargeDetail?type=2",
					animationType: "fade-in"
				});
			},

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
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/turnoverDetail/turnoverDetail.scss";
</style>
