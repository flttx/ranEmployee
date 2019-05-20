<template>
	<view class="content">
		<view>请输入会员卡号/手机号码</view>
		<input type="number" placeholder="会员卡号/手机号码" v-model="searchValue"/>
		<button @tap="openPage">确定</button>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				fromPage: 1, //跳转哪个页面，1-充值，2-购买服务,
				searchValue: "",  //搜索内容
			}
		},
		
		onLoad(option) {
			this.fromPage = option.fromPage;
		},
		
		methods: {
			openPage(){
				if(this.searchValue == ""){
					uni.showToast({
						title: "请输入内容",
						icon: "none"
					});
					return;
				}
				let pageUrl = "";
				if(this.fromPage == 1){
					pageUrl = "../rechargeDetail/rechargeDetail";
				} else {
					pageUrl = "../buyServiceDetail/buyServiceDetail";
				}
				
				uni.navigateTo({
					url: pageUrl,
					animationType: "fade-in"
				})
			}
		}
		
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/inputNumber/inputNumber.scss";
</style>
