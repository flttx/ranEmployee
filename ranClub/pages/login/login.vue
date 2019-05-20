<template>
	<view class="content">
		<view class="logo"></view>
		<view class="input-row">
			<label>用户名</label>
			<input type="text" placeholder="请输入用户名" v-model="userName"/>
			<text class="uni-icon uni-icon-clear" :style="{display:userName.length>0?'block':'none'}" @tap="clearUserName"></text>
		</view>
		<view class="input-row">
			<label>密码</label>
			<input type="text" placeholder="请输入密码" v-model="password" v-bind:password="isPassword"/>
			<text class="uni-icon uni-icon-eye" :style="{color:isPassword?'#666':'black'}" @tap="togglePassword"></text>
		</view>
		<view class="btn-row">
			<button type="button" class="loginBtn" plain="true">登录</button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				userName: "",
				password: "",
				isPassword: true
			}
		},
		
		methods: {
			//清空用户名
			clearUserName(){
				this.userName = "";
			},
			
			//显示/隐藏密码
			togglePassword(){
				this.isPassword = !this.isPassword;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/login/login.scss";
	
</style>
