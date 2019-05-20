<template>
	<view class="content">
		<view class="basic-info">
			<view class="info">会员卡号：0001</view>
			<view class="info">会员姓名：许先生</view>
			<view class="info">联系方式：18318318333</view>
			<view class="info">会员类型：充值会员</view>
			<view class="info">开卡日期：2019-01-29</view>
		</view>
		<view class="center-line">
			<text class="statistics">累计消费：1000元</text>
			<text class="btn" @tap="toPage(1)">消费账单</text>
		</view>
		<view class="info">余额：1000元<text class="change" @tap="clickChange(1)">修改</text></view>
		<view class="center-line">
			<text class="statistics">累计充值：1000元</text>
			<text class="btn" @tap="toPage(2)">余额记录</text>
		</view>
		<view class="info">积分：1000个<text class="change" @tap="clickChange(2)">修改</text></view>
		<view class="center-line">
			<text class="statistics">累计积分：1000个</text>
			<text class="btn" @tap="toPage(3)">积分记录</text>
		</view>
		<view class="info"><text class="info-content single-line">优惠券：5元优惠券*1</text><text class="change" @tap="clickChange(3)">修改</text></view>
		<view class="center-line">
			<text class="btn" @tap="toPage(4)">优惠券记录</text>
		</view>
		<view class="info"><text class="info-content single-line">已购服务：精致洗车*10</text><text class="change" @tap="clickChange(4)">修改</text></view>
		<view class="center-line">
			<text class="btn" @tap="toPage(5)">已购服务记录</text>
		</view>
		
		<view class="mask" v-if="showChangeBox" @touchmove.stop.prevent="" @tap="hideMask"></view>
		<view class="change-box" v-if="showChangeBox">
			<view class="form">
				<block v-if="changeType == 1 || changeType == 2">
					<view class="input-row">
						<label>增加：</label>
						<input />
						<label class="unit">{{changeType==1?'元':'个'}}</label>
					</view>
					<view class="input-row">
						<label>扣减：</label>
						<input />
						<label class="unit">{{changeType==1?'元':'个'}}</label>
					</view>
				</block>
				
				<block v-else>
					<view class="select-row">
						<label>类型：</label>
						<view class="select" @tap="showTypePicker">{{operationType}}<text class="uni-icon uni-icon-arrowdown"></text></view>
					</view>
					<view class="select-row">
						<label>{{changeType==3?'券':'服务'}}：</label>
						<view class="select" @tap="showItemPicker">{{itemName}}<text class="uni-icon uni-icon-arrowdown"></text></view>
					</view>
					<view class="select-row">
						<label>{{changeType==3?'张数':'次数'}}：</label>
						<input />
						<label style="text-align: center;">{{changeType==3?'张':'次'}}</label>
					</view>
				</block>
				
				<view class="title">备注</view>
				<input />
				<view class="title red" v-if="changeType == 1">修改后余额：1000元</view>
				<view class="title red" v-if="changeType == 2">修改后溜溜币：1000枚</view>
				<view class="btn-row">
					<button @tap="confirmChange">确定</button>
				</view>
			</view>
		</view>
		
		<mpvue-picker ref="mpvuePicker1" mode="selector" @onConfirm="confirmType" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker ref="mpvuePicker2" mode="selector" @onConfirm="confirmItem" :pickerValueArray="itemList"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvuePicker.vue';
	
	export default{
		components:{
			mpvuePicker
		},
		
		data(){
			return{
				showChangeBox: false,  //显示修改框
				changeType: 1,  //1-修改余额，2-修改积分，3-修改优惠券，4-修改已购服务
				pickerValueArray: [{label: "增加", value: 1},{label: "扣减", value: 2}],
				itemList: [],  //优惠券或服务列表
				operationType: '增加',
				itemName: "", //选择的优惠券名称或服务名称
			}
		},
		
		methods:{
			//隐藏蒙版
			hideMask(){
				this.showChangeBox = false;
			},
			
			//点击修改
			clickChange(type){
				this.changeType = type;
				this.showChangeBox = true;
				this.itemName = "";
			},
			
			//显示类型选择
			showTypePicker(){
				this.$refs.mpvuePicker1.show();
			},
			
			//显示项目选择
			showItemPicker(){
				if(this.changeType == 3){
					this.itemList = [{
						label: "10元代金券",
						value: 1
					}];
				} else {
					this.itemList = [{
						label: "精致洗车",
						value: 1
					}];
				}
				this.$refs.mpvuePicker2.show();
			},
			
			
			//确认选择类型
			confirmType(e){
				this.operationType = e.label;
			},
			
			//确认选择项目
			confirmItem(e){
				this.itemName = e.label;
			},
			
			//确认修改
			confirmChange(){
				this.showChangeBox = false;
			},
			
			//跳转页面
			toPage(type){
				uni.navigateTo({
					url: "./consumeRecord?type="+type,
					animationType: "fade-in"
				})
			}
		},
		
		
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/searchMember/memberDetail.scss";
</style>
