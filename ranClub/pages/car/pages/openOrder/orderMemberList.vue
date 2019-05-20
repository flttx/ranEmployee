<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="用户名/手机号码">
		</view>
	
		<scroll-view class="scroll-wrapper" @scrolltolower="loadMemberList" scroll-y style="height: calc(100% - 120upx);">
			<view class="memberList">
				<view class="li">
					<text class="member-info">
						<text class="member-name">许先生</text>
						<text class="member-phone">18318318333</text>
					</text>
					<text class="card-info">
						会员卡号：
						<text>00001</text>
						<text class="member-level">充值会员</text>
					</text>
				</view>
				<view class="li">
					<text class="member-info">
						<text class="member-name">许先生</text>
						<text class="member-phone">18318318333</text>
					</text>
					<text class="card-info">
						会员卡号：
						<text>00001</text>
						<text class="member-level">充值会员</text>
					</text>
				</view>
				<view class="li">
					<text class="member-info">
						<text class="member-name">许先生</text>
						<text class="member-phone">18318318333</text>
					</text>
					<text class="card-info">
						会员卡号：
						<text>00001</text>
						<text class="member-level">充值会员</text>
					</text>
				</view>
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		
		methods: {
			loadMemberList(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/OrderMemberList.scss";
</style>
