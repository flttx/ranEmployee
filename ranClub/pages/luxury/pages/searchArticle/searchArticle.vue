<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="物件编号/手机号码">
			</view>
			<text class="statistics-btn" @tap="clickScreen">筛选</text>
		</view>
		
		<scroll-view class="scroll-wrapper">
			<view class="item">
				<view class="article-no">201901010001-01<text class="red">【加急】</text></view>
				<view class="article-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="article-desc">
						<text>包 Gucci 蓝色</text>
						<text>翻新</text>
					</view>
					<view class="view-btn" @tap="toArticleDetail">查看物件</view>
				</view>
				<view class="article-remark">备注：备注备注备注</view>
			</view>
		</scroll-view>
		
		<view class="mask" @touchmove.stop.prevent="" v-if="showBox" @tap="hideMask"></view>
		<view class="status-box" v-if="showBox">
			<text v-for="(item, index) in statusList" :key="index" @tap="selectStatus">{{item.name}}</text>
		</view>
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
			
			//跳转物件详情
			toArticleDetail(){
				uni.navigateTo({
					url:"../openOrder/articleDetail?type=3",
					animationType: "zoom-fade-out"
				});
			}
		},
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/searchArticle/searchArticle.scss";
</style>
