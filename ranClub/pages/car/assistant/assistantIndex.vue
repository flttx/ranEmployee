<template>
	<view class="content">
		<page-head :role="role" v-on:toggleMask = "toggleMask"></page-head>
		<view class="menu">
			<view class="menu-title">日常业务</view>
			<view class="menu-box" @tap="clickMenu">
				<view>
					<view class="menu-item big" data-url="openCard">会员开卡</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="inputNumber" data-index="1">会员充值</view>
					<view class="menu-item small" data-url="inputNumber" data-index="2">购买服务</view>
				</view>
				<view>
					<view class="menu-item big" data-url="openOrder">开单</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="constructionList" data-index="1">待施工</view>
					<view class="menu-item small" data-url="constructionList" data-index="2">施工中</view>
				</view>
				<view>
					<view class="menu-item big" data-url="orderList">订单列表</view>
				</view>
			</view>
			
			<view class="menu-title">统计查询</view>
			<view class="menu-box" @tap="clickMenu">
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="recordOrder">入账订单</view>
					<view class="menu-item small" data-url="creditOrder">挂账订单</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="statisticsReport">统计报表</view>
					<view class="menu-item small" data-url="turnoverDetail">明细流水</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="searchOrder">订单查询</view>
					<view class="menu-item small" data-url="searchCar">车辆查询</view>
				</view>
				<view style="justify-content: center;">
					<view class="menu-item small" data-url="searchMember">会员查询</view>
				</view>
			</view>
		</view>
		
		<page-foot :tabs="tabs"></page-foot>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				role: "店助",    //角色
				tabs: [{
					imgUrl: "../../../static/imgs/common/home.png",
					imgUrl1: "../../../static/imgs/common/home1.png",
					title: "首页",
					pageUrl: "./assistantIndex",
					active: true
				}, {
					imgUrl: "../../../static/imgs/common/message.png",
					imgUrl1: "../../../static/imgs/common/message1.png",
					title: "消息",
					pageUrl: "../../message/message",
					active: false
				}],    //底部选项
			}
		},
		
		onLoad() {
			uni.setStorageSync("role",{
				roleType: "店助",
				module: 2
			});
		},
		
		methods: {
			//点击菜单项
			clickMenu(e){
				if(e.target.dataset.url){
					let pageUrl = e.target.dataset.url;
					uni.navigateTo({
						url: "../pages/" + pageUrl + "/" + pageUrl + "?fromPage=" + e.target.dataset.index,
						animationType: "fade-in"
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../scss/index/index.scss";
</style>
