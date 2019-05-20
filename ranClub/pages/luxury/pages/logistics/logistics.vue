<template>
	<view class="content">
		<page-head :role="role" v-on:toggleMask = "toggleMask"></page-head>
		<view class="menu">
			<view class="menu-title">上门取送</view>
			<view class="menu-box" @tap="clickMenu">
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="logistics/pickUp">同城上门取件</view>
					<view class="menu-item small" data-url="logistics/delivery">同城上门送货</view>
				</view>
			</view>
			
			<view class="menu-title">门店工厂</view>
			<view class="menu-box" @tap="clickMenu">
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="logistics/articleList" data-index="1">从门店取货</view>
					<view class="menu-item small" data-url="logistics/articleList" data-index="2">送往工厂</view>
				</view>
				<view style="justify-content: space-between;">
					<view class="menu-item small" data-url="logistics/articleList" data-index="3">工厂洗护中</view>
					<view class="menu-item small" data-url="logistics/articleList" data-index="4">送往门店</view>
				</view>
			</view>
			
			<view class="menu-title">统计查询</view>
			<view class="menu-box" @click="clickMenu">
				<view>
					<view class="menu-item small" data-url="searchArticle/searchArticle">查询</view>
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
					pageUrl: "../../manager/managerIndex",
					active: false
				},{
					imgUrl: "/static/imgs/common/message.png",
					imgUrl1: "/static/imgs/common/message1.png",
					title: "消息",
					pageUrl: "../../../message/message",
					active: false
				}],    //底部选项
			}
		},
		
		onLoad() {
			this.role = uni.getStorageSync("role").roleType;
		},
		
		methods: {
			//点击菜单项
			clickMenu(e){
				if(e.target.dataset.url){
					let pageUrl = e.target.dataset.url;
					uni.navigateTo({
						url: "../" + pageUrl + "?type=" + e.target.dataset.index,
						animationType: "fade-in"
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/index/index.scss";
</style>
