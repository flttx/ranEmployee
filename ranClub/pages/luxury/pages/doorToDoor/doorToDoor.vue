<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="用户名/手机号码">
		</view>
		
		<view class="tab">
			<text class="tab-item" v-for="(tab, index) in tabs" :key="index" :data-index="index" @tap="changeTab">
				{{tab.name}}
				<text class="bar" v-if="currentIndex == index"></text>
			</text>
		</view>
		
		<swiper :current="currentIndex" @change="changeSwiper">
			<swiper-item v-for="(tab, index) in tabs" :key="index">
				<scroll-view class="list" scroll-y>
					<view class="item" v-for="(item, itemIndex) in tab.data" :key="itemIndex">
						<view class="user-name">{{item.user_name}}</view>
						<view class="item-info">
							<text>联系方式：{{item.mobile}}</text>
							<text>预计取件数量：{{item.num}}件</text>
							<text>地址：{{item.address}}</text>
						</view>
						<view class="btn-box" v-if="currentIndex!=2">
							<button @tap="toOpenOrderDetail">{{currentIndex==0?'接收并开单':'开单'}}</button>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<button class="fixed-btn" @tap="clickBtn">发起上门取件单</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabs: [{name: "未接收", value: 1, data: [{id: 1,user_name:"许一",mobile:"18305172222",num:2,address:"南京市玄武区德基写字楼1888南京市玄武区德基写字楼1888"}]},
				{name: "未开单", value: 2, data: [{id: 2,user_name:"许二",mobile:"18305172222",num:3,address:"南京市玄武区德基写字楼1888"}]},
				{name: "已开单", value: 3, data: [{id: 1,user_name:"许三",mobile:"18305172222",num:4,address:"南京市玄武区德基写字楼1888"}]}],
				currentIndex: 0,
			}
		},
		
		methods:{
			//切换tab
			changeTab(e){
				let index = e.currentTarget.dataset.index;
				this.currentIndex = index;
			},
			
			//切换轮播
			changeSwiper(e){
				this.currentIndex = e.detail.current;
			},
			
			//跳转开单详情页
			toOpenOrderDetail(){
				uni.navigateTo({
					url: "../openOrder/openOrderDetail",
					animationType: "zoom-fade-out"
				});
			},
			
			//底部按钮点击事件
			clickBtn(){
				uni.navigateTo({
					url: "./launchDoorToDoor",
					animationType: "fade-in"
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/doorToDoor/doorToDoor.scss";
</style>
