<template>
	<view class="content">
		<view class="row">
			<view>请输入原密码</view>
			<view class="input-row">
				<input type="text" placeholder="请输入密码" v-model="oldPassword" v-bind:password="passwordType.isOldPassword"/>
				<text class="uni-icon uni-icon-eye" :style="{color:passwordType.isOldPassword?'#666':'black'}" @tap="togglePassword" data-type="isOldPassword"></text>
			</view>
		</view>
		<view class="row">
			<view>请输入新密码</view>
			<view class="input-row">
				<input type="text" placeholder="请输入密码" v-model="newPassword" v-bind:password="passwordType.isNewPassword"/>
				<text class="uni-icon uni-icon-eye" :style="{color:passwordType.isNewPassword?'#666':'black'}" @tap="togglePassword" data-type="isNewPassword"></text>
			</view>
		</view>
		<view class="row">
			<view>请再次输入新密码</view>
			<view class="input-row">
				<input type="text" placeholder="请输入密码" v-model="confirmPassword" v-bind:password="passwordType.isConfirmPassword"/>
				<text class="uni-icon uni-icon-eye" :style="{color:passwordType.isConfirmPassword?'#666':'black'}" @tap="togglePassword" data-type="isConfirmPassword"></text>
			</view>
		</view>
		<view class="btn-row">
			<button type="button" class="confirmBtn" plain="true">确认修改</button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				oldPassword: "",
				newPassword: "",
				confirmPassword: "",
				
				passwordType: {   //密码类型
					isOldPassword: true,
					isNewPassword: true,
					isConfirmPassword: true
				}
			}
		},
		
		methods: {
			//显示/隐藏密码
			togglePassword: function(event){
				let type = event.currentTarget.dataset.type;
				this.passwordType[type] = !this.passwordType[type];
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/login/changePwd.scss";
	
</style>
