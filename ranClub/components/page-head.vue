<template name="page-head">
	<view>
		<view class="role" @tap="toggleAsideBox">
			<text class="role-name">{{role}}</text>
			<image src="/static/imgs/common/down.png"></image>
		</view>
		<view class="aside-box" @tap="clickButton" v-if="showAside">
			<view id="logout">切换登录</view>
			<view id="changePwd">修改密码</view>
		</view>
		
		<view class="mask" @touchmove.stop.prevent="" v-if="showAside" @tap="hideMask"></view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			role: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				showAside: false
			}
		},
		methods: {
			//显示/隐藏操作面板
			toggleAsideBox(){
				this.showAside = !this.showAside;
			},
			
			//点击操作按钮
			clickButton(e){
				let id = e.target.id;
				if(id == "logout"){
					uni.reLaunch({
						url: "/pages/login/login"
					})
				} else {
					uni.navigateTo({
						url: "/pages/login/changePwd"
					})
				}
			},
			
			//点击蒙版
			hideMask(){
				this.showAside = false;
			}
		}
	}
</script>
<style lang="scss">
	.role{
		width: 200upx;
		height: 40upx;
		
		.role-name{
			float: left;
			margin: 4upx 20upx 20upx 0;
		}
		
		image{
			float: left;
			width: 40upx;
			height: 40upx;
			margin-top: 4upx;
		}
	}
	
	
	.aside-box{
		position: absolute;
		top: 80upx;
		left: 40upx;
		width: 200upx;
		height: 240upx;
		border: 1px solid #333;
		z-index: 3;
		background: #fff;
		
		view{
			height: 120upx;
			line-height: 120upx;
			text-align: center;
		}
	
	}
	
	.mask{
		// display: none;
		background: rgba(0, 0, 0, 0.2);
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	
	
</style>

