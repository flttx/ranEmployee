<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入名称搜索">
			</view>
			<text class="statistics-btn" @tap="clickTypeBox">选择分类</text>
		</view>
	
		<view class="scroll-wrapper" @scrolltolower="loadServiceList" scroll-y style="height: calc(100% - 120upx);">
			<view class="serviceList">
				<view class="li" @tap="selectItem" v-for="(service, index) in serviceList" :key="index" :data-index="index+''" :class="{'selected': service.selected}">
					<text class="service-item-name">{{service.name}}</text>
					<text class="service-item-time">{{service.desc}}</text>
					<text class="service-item-price">{{service.originalPrice}}元</text>
				</view>
			</view>
		</view>
	
	
		<view class="mask" @touchmove.stop.prevent="" v-if="showTypeBox" @tap="hideTypeBox"></view>
		<view class="type-box" v-if="showTypeBox">
			<p>选择分类</p>
			<view class="type-list">
				<view class="li">
					全部项目
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
				<view class="li">
					清洁类
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
				<view class="li">
					修复类
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
			</view>
			<view class="cancel-btn" @tap="hideTypeBox">取消</view>
		</view>
		
		
		<view class="footer">
			<view>
				总计：<text>{{sumPrice}}元</text>
			</view>
			<text class="confirm" @tap="clickConfirm">确定</text>
		</view>
	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showTypeBox: false,  //显示分类
				serviceList: [{
					id: 1,
					name: "精致洗车",
					desc: "施工时间：0分钟",
					originalPrice: 298,
					discountPrice: 198,
					status: "待施工",
					selected: false,
					remark: ""
				},{
					id: 2,
					name: "内饰深度清洁",
					desc: "施工时间：0分钟",
					originalPrice: 880,
					discountPrice: 440,
					status: "待施工",
					selected: false,
					remark: ""
				}],  //服务项目列表数据
				sumPrice: 0
			}
		},
		
		
		methods: {
			//点击分类
			clickTypeBox(){
				this.showTypeBox = true;
			},
			
			//隐藏分类面板
			hideTypeBox(){
				this.showTypeBox = false;
			},
			
			//加载数据
			loadServiceList(){
				
			},                      
			
			//选择服务项目
			selectItem(e){
				let index = e.currentTarget.dataset.index;
				this.serviceList[index].selected = !this.serviceList[index].selected;
				
				let sumPrice = 0;
				this.serviceList.map(function(item){
					if(item.selected){
						sumPrice += item.originalPrice;
					}
				});
				this.sumPrice = sumPrice;
				
			},
			
			//点击确定
			clickConfirm(){
				let result = this.serviceList.filter(function(item){
					return item.selected == true;
				});
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2];   //上一页
				prevPage.$vm.serviceItems.push.apply(prevPage.$vm.serviceItems, result);  //给上个页面的变量赋值
				prevPage.$vm.$emit("calculatePrice");  //触发上个页面的自定义事件
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/productList.scss";
</style>

