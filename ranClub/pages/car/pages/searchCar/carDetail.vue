<template>
	<view class="content">
		<view class="form">
			<view class="box">
				<view class="car-title">
					<text class="memberLevel">3000会员</text>
					<text class="coupon">券*7</text>
				</view>
				<p class="car-no">苏A 12345</p>
				<text class="member-info">
					许小新 | A00001 | 213.13元
				</text>
			</view>

			<view class="mui-input-row row">
				<text class="label">车主：</text>
				<input type="text" class="mui-input-clear long" v-model="carOwner"/>
			</view>

			<view style="height: 50px;">
				<view class="mui-input-row row phone">
					<text class="label">电话：</text>
					<input type="text" class="long" v-model="phoneNumber"/>
				</view>
				<view class="other-phone btn" @tap="clickOtherPhone">其他电话</view>
			</view>

			<view class="mui-input-row row">
				<text class="label">车辆品牌：</text>
				<input type="text" class="mui-input-clear" v-model="carBrand"/>
			</view>

			<view class="mui-input-row row">
				<text class="label">颜色：</text>
				<input type="text" class="long btn" v-model="color"/>
			</view>

			<view class="car-type">
				<radio-group>
					<label class="radio">
						<radio value="r1" />五座</label>
					<label class="radio">
						<radio value="r1" />SUV</label>
					<label class="radio">
						<radio value="r1" />其他</label>
				</radio-group>
			</view>

			<view class="textarea-box">
				<label>备注：</label>
				<textarea v-model="remark">

			</textarea>
			</view>
			<view>
				<text class="consumeRecord" @tap="toConsumeRecord">消费记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carOwner: "", //车主
				phoneNumber: "", //电话
				carBrand: "", //车辆品牌
				color: "", //车辆颜色
				remark: "", //备注
				otherContactName: "", //其他联系人姓名
				otherPhoneNumber: "", //其他联系电话
				otherContactNameValue: "",  //其他联系人姓名输入框值
				otherPhoneNumberValue: "",  //其他联系电话输入框值
				showOtherPhone: false,  //显示其他电话面板
				showColorBox: false, //显示车辆颜色面板
			}
		},
		
		methods:{
			//显示其他电话面板
			clickOtherPhone() {
				this.showOtherPhone = true;
			},
			
			//显示车辆颜色面板
			clickColorBox() {
				this.showColorBox = true;
			},
			
			//点击蒙版
			clickMask(){
				this.showOtherPhone = false;
				this.showColorBox = false;
			},
			
			//点击其他电话面板按钮
			clickAddBoxBtn(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "cancel"){ //点击取消
						this.otherContactNameValue = "";
						this.otherPhoneNumberValue = "";
					} else {
						if(this.otherContactNameValue.trim() == "" || this.otherPhoneNumberValue.trim() == ""){
							uni.showToast({
								title: "请输入内容",
								icon: "none"
							});
							return;
						}
						this.otherContactName = this.otherContactNameValue;
						this.otherPhoneNumber = this.otherPhoneNumberValue;
					}
					this.showOtherPhone = false;
				}
			},
			
			//选择颜色
			selectColor(e){
				this.color = e.currentTarget.dataset.value;
				this.showColorBox = false;
			},
			
			//跳转消费记录
			toConsumeRecord(){
				uni.navigateTo({
					url: "./consumeRecord",
					animationType: "fade-in"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/searchCar/carDetail.scss";
</style>
