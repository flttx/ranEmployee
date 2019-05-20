<template>
	<view class="content">
		<view>请输入会员卡号/手机号码</view>
		<input type="number" placeholder="会员卡号/手机号码" v-model="searchValue"/>
		<button @tap="toOpenOrderDetail(1)">确定</button>
		<text @tap="toOpenOrderDetail(2)">散客消费</text>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				searchValue: "",
			}
		},
		
		methods: {
			//跳转开单详情
			toOpenOrderDetail(type){
				uni.navigateTo({
					url: "./openOrderDetail?type="+type,
					animationType: "fade-in"
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/inputNumber/inputNumber.scss";
	
	text{
		display: inline-block;
		position: absolute;
		right: 0;
		bottom: 0;
		height: 50upx;
		border-bottom: 2upx solid;
	}
</style>
