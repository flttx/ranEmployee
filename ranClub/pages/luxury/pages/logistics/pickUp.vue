<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text" placeholder="用户名/手机号码">
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
						<view class="btn-box">
							<button v-if="currentIndex==0" @tap="clickBtn" :data-status="item.status">确认{{item.status=="待接单"?"接单":"取件"}}</button>
							<button v-if="currentIndex==1" @tap="clickBtn">已送至门店</button>
							<button v-if="currentIndex==0 || currentIndex==2">联系用户</button>
							<button v-if="currentIndex==1 || currentIndex==2">联系门店</button>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						name: "待上门取件",
						value: 1,
						data: [{
							id: 1,
							user_name: "许一",
							mobile: "18305172222",
							num: 2,
							address: "南京市玄武区德基写字楼1888南京市玄武区德基写字楼1888",
							status: "待接单"
						}, {
							id: 1,
							user_name: "许一",
							mobile: "18305172222",
							num: 2,
							address: "南京市玄武区德基写字楼1888",
							status: "待取件"
						}]
					},
					{
						name: "待送至门店",
						value: 2,
						data: [{
							id: 2,
							user_name: "许二",
							mobile: "18305172222",
							num: 3,
							address: "南京市玄武区德基写字楼1888"
						}]
					},
					{
						name: "已送至门店",
						value: 3,
						data: [{
							id: 1,
							user_name: "许三",
							mobile: "18305172222",
							num: 4,
							address: "南京市玄武区德基写字楼1888"
						}]
					}
				],
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
			
			//点击按钮
			clickBtn(e){
				let title = "";
				if(this.currentIndex == 0){
					let status = e.currentTarget.dataset.status;
					if(status == "待接单"){
						title = "确认接单";
					} else {
						title = "确认取件";
					}
				} else {
					title = "已送至门店";
				}
				uni.showModal({
					title: '提示',
					content: '是否' + title + "?",
					cancelText: '否',
					confirmText: '是',
					success: res => {
						console.log(res);
					},
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/logistics/pickUp.scss";
</style>
