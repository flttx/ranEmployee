<template>
	<view class="content">
		<page-head :role="role" v-on:toggleMask = "toggleMask"></page-head>
		<view class="menu">
			<view class="menu-title">业务操作</view>
			<view class="menu-box" @tap="clickMenu">
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="car/pages/openCard/openCard">会员开卡</view>
					<view class="menu-item small" data-url="car/pages/inputNumber/inputNumber" data-index="1">会员充值</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="flower/pages/receiveOrder/receiveOrder">接单</view>
					<view class="menu-item small" data-url="flower/pages/openOrder/openOrder">开单</view>
				</view>
				<view style="justify-content: center;">
					<view class="menu-item small" data-url="flower/pages/outBound/outBound">花艺出库单</view>
				</view>
			</view>
			
			<view class="menu-title">统计查询</view>
			<view class="menu-box" @tap="clickMenu">
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="car/pages/statisticsReport/statisticsReport">统计报表</view>
					<view class="menu-item small" data-url="car/pages/turnoverDetail/turnoverDetail">明细流水</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="flower/pages/searchOrder/searchOrder">订单查询</view>
					<view class="menu-item small" data-url="car/pages/searchMember/searchMember">会员查询</view>
				</view>
			</view>
			
			<view class="menu-title">更多</view>
			<view class="menu-box" @click="clickMenu">
				<view>
					<view class="menu-item small" data-url="car/pages/staffManage/staffManage">员工管理</view>
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
				role: "店长",    //角色
				tabs: [{
					imgUrl: "/static/imgs/common/home.png",
					imgUrl1: "/static/imgs/common/home1.png",
					title: "首页",
					pageUrl: "./managerIndex",
					active: true
				}, {
					imgUrl: "/static/imgs/common/message.png",
					imgUrl1: "/static/imgs/common/message1.png",
					title: "消息",
					pageUrl: "../../message/message",
					active: false
				}],    //底部选项
			}
		},
		
		onLoad() {
			uni.setStorageSync("role",{
				roleType: "店长",
				module: 3
			});
		},
		
		methods: {
			//点击菜单项
			clickMenu(e){
				if(e.target.dataset.url){
					let pageUrl = e.target.dataset.url;
					uni.navigateTo({
						url: "/pages/" + pageUrl + "?fromPage=" + e.target.dataset.index,
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
