<template>
	<view class="content">
		<view class="form">
			<view class="input-row">
				<label>姓名</label>
				<input />
			</view>
			<view class="input-row">
				<label>手机号码</label>
				<input />
			</view>
			<view class="input-row">
				<label>密码</label>
				<input />
			</view>
			<view class="input-row">
				<label>角色</label>
				<view class="select-btn" @tap="showRoleBox">角色选择</view>
			</view>
			<view class="btn-row">
				<button @tap="backPage">取消</button>
				<button>确定</button>
			</view>
		</view>
		
		<view class="role-box" v-if="showBox">
			<view v-for="(role, index) in roles" :key="index">
				<text @tap="selectRole" :data-index="index">{{role.name}}</text>
			</view>
			
		</view>
		
		<view class="mask" @touchmove.stop.prevent="" v-if="showBox" @tap="hideMask"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showBox: false,  //显示角色面板
				roles: [{name: "店长", value: 1},{name: "店助", value: 2},{name: "师傅", value: 3},{name: "财务", value: 4}], //角色
				role: "",
				
			}
		},
		
		onLoad() {
			let module = uni.getStorageSync("role").module;
			if(module == 1){
				this.roles = [{name: "店长", value: 1},{name: "店员", value: 2},{name: "物流", value: 5},{name: "财务", value: 4}];
			} else if(module == 3){
				this.roles = [{name: "店长", value: 1},{name: "财务", value: 4}];
			}
			
		},
		
		methods:{
			//显示角色面板
			showRoleBox(){
				this.showBox = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showBox = false;
			},
			
			//选择角色
			selectRole(e){
				let index = e.currentTarget.dataset.index;
				this.role = this.roles[index].name;
				this.showBox = false;
			},
			
			//返回上一页
			backPage(){
				uni.navigateBack({
					
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/staffManage/editStaff.scss"
</style>
