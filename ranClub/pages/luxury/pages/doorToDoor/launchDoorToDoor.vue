<template>
	<view class="content">
		<view class="box">
			<view class="input-row">
				<label class="cellname">顾客姓名</label>
				<input type="text" placeholder="请输入顾客姓名"/>
			</view>
			<view class="input-row">
				<label class="cellname">联系方式</label>
				<input type="text" placeholder="请输入联系方式"/>
			</view>
			<view class="input-row">
				<label class="cellname">预计取件数量</label>
				<input type="text" placeholder="请输入预计取件数量"/>
			</view>
			<view  class="textarea-row">
				<label class="cellname">地址</label>
				<textarea></textarea>
			</view>
		</view>
		<view class="btn-box">
			<button>取消</button>
			<button>确定</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/doorToDoor/launchdoorToDoor.scss";
</style>
