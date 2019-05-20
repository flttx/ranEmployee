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
					<view class="item">
						<view class="item-no">201901010001-01<text class="red">【加急】</text></view>
						<view class="item-info">
							<image src="/static/imgs/luxury/scene.png"></image>
							<view class="item-desc">
								<text>包 Gucci 蓝色</text>
								<text>翻新</text>
							</view>
							
							<button class="btn" @tap="clickBtn">{{currentIndex==0?'已送回顾客':'联系顾客'}}</button>
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
						name: "待送回顾客",
						value: 1,
						data: [{
							id: 1,
							user_name: "许一",
							mobile: "18305172222",
							num: 2,
							address: "南京市玄武区德基写字楼1888南京市玄武区德基写字楼1888",
						}, {
							id: 1,
							user_name: "许一",
							mobile: "18305172222",
							num: 2,
							address: "南京市玄武区德基写字楼1888",
						}]
					},
					{
						name: "已送回顾客",
						value: 2,
						data: [{
							id: 2,
							user_name: "许二",
							mobile: "18305172222",
							num: 3,
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
				if(this.currentIndex == 0){
					uni.showModal({
						title: '提示',
						content: '是否已送回顾客?',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							console.log(res);
						},
					});
				} 
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/logistics/delivery.scss";
</style>
