<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="输入车牌号/车牌品牌搜索">
		</view>
	
		<view class="scroll-wrapper" @scrolltolower="loadOrderList" scroll-y style="height: calc(100% - 120upx);">
			<view class="orderList">
				<view class="li">
					<view class="car-no">
						苏A UP688 | 大众
					</view>
					<text class="construction-date">2019-02-12 11:00</text>
					<text class="construction-item">精致洗车</text>
					<text class="construction-status">待施工</text>
				</view>
				<view class="li">
					<view class="car-no">
						苏A UP688 | 大众
					</view>
					<text class="construction-date">2019-02-12 11:00</text>
					<text class="construction-item">空调清洗</text>
					<text class="construction-status">施工中</text>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				constructionList: [],
				type: 1,  //查询列表类型，1-待施工，2-施工中
			}
		},
		
		onLoad(option){
			this.type = option.fromPage;
			
		},
		
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/constructionList/constructionList.scss";
</style>
