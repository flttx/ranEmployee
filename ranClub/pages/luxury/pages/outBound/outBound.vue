<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
			</view>
			<image class="statistics-btn" src="/static/imgs/luxury/sort.png"></image>
		</view>
		
		<scroll-view class="scroll-wrapper" scroll-y style="height: calc(100% - 120upx);">
			<view class="item">
				<view class="item-name">201901010001-01<text class="red">【加急】</text></view>
				<view class="item-info">
					<image class="item-img" src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view class="article-info">包 Gucci 蓝色</view>
						<view class="service-info">翻新</view>
					</view>
				</view>
				<view class="remark">备注：备注备注备注</view>
				<view class="view-btn" @tap="toArticleDetail">查看物件</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		methods:{
			//跳转物件详情
			toArticleDetail(){
				uni.navigateTo({
					url: "../openOrder/articleDetail?type=3",
					animationType: "fade-in"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/outBound/outBound.scss";
</style>
