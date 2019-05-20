<template>
	<view class="content">
		<view>
			<view class="search">
				<text class="uni-icon uni-icon-search"></text>
				<input type="text"  placeholder="输入名称搜索">
			</view>
			<text class="statistics-btn" @tap="clickTypeBox">选择分类</text>
		</view>
	
		<view class="scroll-wrapper" @scrolltolower="loadProductList" scroll-y style="height: calc(100% - 120upx);">
			<view class="serviceList">
				<view class="li" v-for="(product, index) in productList" :key="index" :data-index="index+''" @tap="selectProduct" :class="{'selected': product.selected}">
					<text class="service-item-name">{{product.name}}</text>
					<text class="service-item-time">{{product.remark}}</text>
					<text class="service-item-price">{{product.originalPrice}}元</text>
				</view>
			</view>
		</view>
	
	
		<view class="mask" @touchmove.stop.prevent="" v-if="showTypeBox" @tap="hideTypeBox"></view>
		<view class="type-box" v-if="showTypeBox">
			<p>选择分类</p>
			<view class="type-list">
				<view class="li">
					全部产品
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
				<view class="li">
					漆面保护膜
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
				<view class="li">
					太阳膜
					<text class="uni-icon uni-icon-arrowright"></text>
				</view>
				<view class="li">
					玻璃水
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
				productList: [{
					id: 1,
					name: "玻璃水",
					remark: "备注备注备注",
					originalPrice: 20,
					discountPrice: 10,
					selected: false
				},{
					id: 2,
					name: "玻璃水1",
					remark: "备注备注备注",
					originalPrice: 40,
					discountPrice: 20,
					selected: false
				}],
				sumPrice: 0,
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
			loadProductList(){
				
			},
			
			//选择产品
			selectProduct(e){
				let index = e.currentTarget.dataset.index;
				this.productList[index].selected = !this.productList[index].selected;
				
				let sumPrice = 0;
				this.productList.map(function(item){
					item.num = 1;
					if(item.selected){
						sumPrice += item.originalPrice;
					}
				});
				this.sumPrice = sumPrice;
				
			},
			
			//点击确定
			clickConfirm(){
				let result = this.productList.filter(function(item){
					return item.selected == true;
				});
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2];   //上一页
				console.log(prevPage);
				prevPage.$vm.products.push.apply(prevPage.$vm.products, result); //给上个页面的变量赋值
				prevPage.$vm.$emit("calculatePrice");  //触发上个页面的自定义事件
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/productList.scss";
</style>
