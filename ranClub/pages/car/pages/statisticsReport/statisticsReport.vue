<template>
	<view class="content">
		<view class="header">
			<view class="text">截止昨日</view>
			<view class="sum">
				<p>
					<text>会员总量</text>
					<text class="memebr-sum">50,000人</text>
				</p>
				<p>
					<text>充值金额</text>
					<text class="recharge-sum">100,000元</text>
				</p>
			</view>
		</view>
		
		<view style="height: calc(100% - 100px);">
			<view class="tabs">
				<text class="tabs-item" v-for="(tab, index) in tabs" :key="index" :data-index="index" @tap="changeTab">
					{{tab}}
					<text class="bar" v-if="index == currentIndex"></text>
				</text>
			</view>
			<swiper :current="currentIndex" @change="changeSwiper">
				<swiper-item v-for="(tab, index) in tabs" :key="index">
					<scroll-view scroll-y style="height: 100%;">
						<view class="cash-flow">
							<p class="title">现金流</p>
							<view class="detail">
								<text class="total">总现金流  <text class="amount">306,020元</text></text>
								<text class="item">订单实收金额 <text class="amount">30,000元</text></text>
								<text class="item">充值实收金额 <text class="amount">30,000元</text></text>
								<text class="item">年卡购买实收金额 <text class="amount">30,000元</text></text>
							</view>
							
							<p class="title">消费</p>
							<view class="detail">
								<text class="total">总订单金额  <text class="amount">306,020元</text></text>
								<text class="total">营业额  <text class="amount">306,020元</text></text>
								<text class="item">余额消费额 <text class="amount">30,000元</text></text>
								<text class="item">现金消费额 <text class="amount">30,000元</text></text>
								<text class="total">代金券抵扣额  <text class="amount">306,020元</text></text>
								<text class="total">积分抵扣额  <text class="amount">306,020元</text></text>
								<text class="total">消费笔数  <text class="amount">1000笔</text></text>
								<text class="item">余额消费笔数 <text class="amount">400笔</text></text>
								<text class="item">微信消费笔数 <text class="amount">600笔</text></text>
							</view>
							
							<p class="title">充值</p>
							<view class="detail">
								<text class="total">充值总金额  <text class="amount">306,020元</text></text>
								<text class="item">实收金额 <text class="amount">30,000元</text></text>
								<text class="item">赠送金额 <text class="amount">30,000元</text></text>
								<text class="total">充值笔数 <text class="amount">100笔</text></text>
							</view>
							
							<p class="title">年卡</p>
							<view class="detail">
								<text class="total">年卡购买价金额  <text class="amount">306,020元</text></text>
								<text class="item">实收金额 <text class="amount">30,000元</text></text>
								<text class="item">赠送金额 <text class="amount">30,000元</text></text>
								<text class="item">年卡购买笔数 <text class="amount">100笔</text></text>
								<text class="total">新增年卡会员数  <text class="amount">90人</text></text>
							</view>
							
							<p class="title">会员</p>
							<view class="detail">
								<text class="total">新增会员数  <text class="amount">5,000人</text></text>
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
				tabs: ["今日", "本周", "本月", "自定义"],
				currentIndex: 0,
			}
		},
		
		
		methods:{
			//切换tab
			changeTab(e){
				this.currentIndex = e.currentTarget.dataset.index;
			},
			
			//切换轮播
			changeSwiper(e){
				this.currentIndex = e.detail.current;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/statisticsReport/statisticsReport.scss";
</style>
