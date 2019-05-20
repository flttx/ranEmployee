<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="订单编号/手机号码">
			</view>
			<image class="statistics-btn" src="/static/imgs/luxury/sort.png"></image>
		</view>
		
		<scroll-view class="scroll-wrapper">
			<view class="item">
				<view class="order-date">开单时间：2018-12-12  14:22</view>
				<view class="order-info">
					<text>订单编号：201901010001</text>
					<text>服务对象： 用户名 18305172222</text>
					<text>取货时间：2019-03-07 周四</text>
					<view class="btn-box">
						<button @tap="toOrderDetail">查看订单</button>
						<button>联系用户</button>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- <view class="mask" @touchmove.stop.prevent="" v-if="showBox" @tap="hideMask"></view>
		<view class="status-box" v-if="showBox">
			<text v-for="(item, index) in statusList" :key="index" @tap="selectStatus">{{item.name}}</text>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showBox: false,   //显示弹出层
				statusList: [{name: "待接单", value: 1},{name: "待开单", value: 2},{name: "待支付", value: 3},{name: "送往工厂", value: 4},
				{name: "洗护中", value: 5},{name: "工厂取货", value: 6},{name: "送回顾客", value: 7},{name: "已完成", value:8}], //订单状态列表
				status: 1, //当前订单状态
			}
		},
		
		methods: {
			//点击筛选
			clickScreen(){
				this.showBox = true;
			},
			
			//选择订单状态
			selectStatus(){
				this.showBox = false;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showBox = false;
			},
			
			//跳转订单详情
			toOrderDetail(){
				uni.navigateTo({
					url:"./orderDetail?type=1",
					animationType: "fade-in"
				});
			}
		},
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/searchOrder/searchOrder.scss";
</style>
