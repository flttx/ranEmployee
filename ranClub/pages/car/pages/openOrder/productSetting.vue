<template>
	<view class="content">
		<view class="setting-line">
			<view class="input-row name">
				<label>销售产品：</label>
				<input value="玻璃水" />
			</view>
			<view class="operation-box">
				<text class="uni-icon uni-icon-minus" @tap="clickMinus"></text>
				<text class="operation-num">10</text>
				<text class="uni-icon uni-icon-plus" @tap="clickPlus"></text>
			</view>
		</view>
		<view class="setting-line">
			<view class="input-row long">
				<label>原价：</label>
				<input  />
			</view>
		</view>
		<view class="setting-line">
			<view class="input-row long">
				<label>优惠后价格：</label>
				<input  />
			</view>
		</view>
		<view class="textarea-row">
			<label>备注：</label>
			<textarea></textarea>
		</view>
		
		<p class="box-title">销售提成 <image src="../../../../static/imgs/common/add.png" class="click" @tap="clickAdd"></image></p>
		<view class="box" v-if="saleMembers.length > 0">
			<view class="service-item" @tap="editMember" v-for="(item, index) in saleMembers" :key="index">
				<text class="service-item-name">{{item.name}}</text>
				<view class="service-item-price">{{item.commission}}元</view>
				<image class="delete-icon" src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap.stop.prevent="deleteMember"></image>
			</view>
		</view>
		
		
		<view class="bottom">
			<button @tap="backPage">确定</button>
		</view>
		
		<view class="mask" v-if="showMemberBox || showEditBox" @tap="hideMask"></view>
		
		<view class="member-box" v-if="showMemberBox">
			<p>员工列表</p>
			<radio-group>
				<label class="radio" v-for="(member, i) in memberList" :key="i">
					<radio :value="i+''" :checked="member.checked" />{{member.name}}
				</label>
			</radio-group>
		</view>
		
		<view class="member-box" v-if="showEditBox">
			<p>提成设置</p>
			<input :placeholder="'姓名：'+editItem.name"/>
			<input :placeholder="'提成：'+editItem.commission"/>
			<textarea v-model="editItem.remark" :placeholder="editItem.remark != ''?editItem.remark:'备注'"></textarea>
			<view class="edit-btn-box">
				<button>确定</button>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showMemberBox: false,   //显示人员列表
				showEditBox: false, //显示提成设置
				memberList: [{name: "许小新", checked: false},{name: "许新", checked: false},{name: "许大新", checked: false},{name: "许一", checked: false},
				{name: "许二", checked: false},{name: "许三", checked: false},{name: "许四", checked: false},{name: "许五", checked: false}],  //人员数据
				saleMembers: [{name: "张三", commission: 0, remark: ""}],  //销售提成员工数据
				editItem: {
					name: "",
					commission: 0,
					remark: ""
				}
			}
		},
		
		methods: {
			//点击添加员工信息
			clickAdd() {
				this.showMemberBox = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showMemberBox = false;
				this.showEditBox = false;
			},
			
			//删除员工
			deleteMember(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.saleMembers.splice(index, 1);
			},
			
			//修改提成
			editMember(){
				this.showEditBox = true;
			},
			
			//返回上一页
			backPage(){
				uni.navigateBack();
			}
		},
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/serviceSetting.scss";
</style>
