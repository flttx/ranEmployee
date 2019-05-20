<template name="page-foot">
	<view class="tab">
		<view class="tab-item" v-for="(tabItem,index) in tabs" :key="index">
			<view @tap="switchTab" :data-url="tabItem.pageUrl" :data-index="index">
				<image :src="tabItem.active?tabItem.imgUrl1:tabItem.imgUrl"></image>
				<view :style="{color: tabItem.active?'#1296db':'black'}">{{tabItem.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "page-foot",
		props: {
			tabs: Array
		},
		methods: {
			//切换选项卡
			switchTab(e){
				let pageUrl = e.currentTarget.dataset.url;
				uni.redirectTo({
					url: pageUrl
				})
			}
		}
	}
</script>
<style lang="scss">
	.tab {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 130upx;
		border-top: 1px solid #333;
		display: flex;
		background: #fff;
	}
	
	.tab-item{
		flex: 1;
		display: flex;
		justify-content: center;
		view{
			width: 80upx;
			image{
				float: left;
				width: 80upx;
				height: 80upx;
				border-radius: 8upx;
			}
			view{
				float: left;
				text-align: center;
				font-size: 28upx;
			}
		}
	}
</style>
