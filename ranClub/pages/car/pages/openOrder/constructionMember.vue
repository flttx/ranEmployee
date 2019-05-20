<template>
	<view class="content">
		<checkbox-group>
			<label class="checkbox" v-for="(member, index) in memberList" :key="index">
				<checkbox :value="index+''" :checked="member.checked" />{{member.name}}
			</label>
		</checkbox-group>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				memberList: [{name: "许小新", checked: false},{name: "许新", checked: false},{name: "许大新", checked: false},{name: "许一", checked: false},
				{name: "许二", checked: false},{name: "许三", checked: false},{name: "许四", checked: false},{name: "许五", checked: false}],  //人员数据
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/constructionMember.scss";
</style>
