<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="用户名/手机号码">
		</view>
			
		<scroll-view class="scroll-wrapper" @scrolltolower="loadOrderList" scroll-y style="height: calc(100% - 120upx);">
			<view class="li" @tap="toMemberDetail">
				<view class="user-info">许先生 <text class="phone">18318318333</text></view>
				<view class="card-info">
					<text class="card-no">会员卡号：0001</text>
					<text class="card-type">充值会员</text>
				</view>
			</view>	
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				memberList: [],  //会员列表
			}
		},
		
		methods:{
			//跳转会员详情
			toMemberDetail(){
				uni.navigateTo({
					url: "./memberDetail",
					animationType: "fade-in"
				})
			}
		}
	}
</script>


<style lang="scss">
	@import "../../../../scss/car/searchMember/searchMember.scss";
</style>
