<template>
	<view class="content">
		<view class="form">
			<view class="mui-input-row row">
				<text class="label">车主：</text>
				<input type="text" class="mui-input-clear long" v-model="carOwner" @focus="hideBottomBtn" @blur="showBottomBtn"/> 
			</view>
			
			<view style="height: 50px;">
				<view class="mui-input-row row phone">
					<text class="label">电话：</text>
					<input type="text" class="long" v-model="phoneNumber" @focus="hideBottomBtn" @blur="showBottomBtn"/> 
				</view>
				<view class="other-phone btn" @tap="clickOtherPhone" >其他电话</view>
			</view>
			
			<view class="mui-input-row row">
				<text class="label">车辆品牌：</text>
				<input type="text" class="mui-input-clear" v-model="carBrand" @focus="hideBottomBtn" @blur="showBottomBtn"/> 
			</view>
			
			<view class="mui-input-row row">
				<text class="label">颜色：</text>
				<input type="text" class="long btn" v-model="color" @tap="clickColorBox" @focus="hideBottomBtn" @blur="showBottomBtn"/> 
			</view>
			
			<view class="car-type">
				<radio-group>
					<label class="radio"><radio value="r1"/>五座</label>
					<label class="radio"><radio value="r1"/>SUV</label>
					<label class="radio"><radio value="r1"/>其他</label>
				</radio-group>
			</view>
			
			<view class="textarea-box">
				<label>备注：</label>
				<textarea v-model="remark" @focus="hideBottomBtn" @blur="showBottomBtn">
					
				</textarea>
			</view>
			
			<view class="btn-box">
				<button class="btn" >车辆图片</button>
				<button class="btn" >会员开卡</button>
			</view>
			
			
			
			<view class="bottom" v-if="showBottom">
				<button class="btn" >确定</button>
			</view>
		</view>
		
		
		<view class="mask" v-if="showOtherPhone || showColorBox" @tap="clickMask"></view>
		
		<view class="add-box" v-if="showOtherPhone">
			<p>添加其他车辆联系人</p>
			<view class="mui-input-row row">
				<text class="label">联系人姓名：</text>
				<input type="text" class="mui-input-clear short" v-model="otherContactNameValue"/> 
			</view>
			
			<view class="mui-input-row row">
				<text class="label">联系人电话：</text>
				<input type="text" class="mui-input-clear short" v-model="otherPhoneNumberValue"/> 
			</view>
			
			<view class="add-box-btn" @tap="clickAddBoxBtn">
				<button class="cancel" data-id="cancel">取消</button>
				<button class="confirm" data-id="confirm">确定</button>
			</view>
		</view>
		
		<view class="color-box" v-if="showColorBox">
			<p>车辆颜色</p>
			<view style="margin-bottom: 10px;">
				<text class="color-item" data-value="黑色" @tap="selectColor">
					<text class="color-value black"></text>
					<text class="color-text">黑色</text>
				</text>
				<text class="color-item" data-value="白色" @tap="selectColor">
					<text class="color-value white"></text>
					<text class="color-text">白色</text>
				</text>
				<text class="color-item" data-value="红色" @tap="selectColor">
					<text class="color-value red"></text>
					<text class="color-text">红色</text>
				</text>
				
				<text class="color-item" data-value="黄色" @tap="selectColor">
					<text class="color-value yellow"></text>
					<text class="color-text">黄色</text>
				</text>
				<text class="color-item" data-value="灰色" @tap="selectColor">
					<text class="color-value grey"></text>
					<text class="color-text">灰色</text>
				</text>
				<text class="color-item" data-value="棕色" @tap="selectColor">
					<text class="color-value brown"></text>
					<text class="color-text">棕色</text>
				</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
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
				showBottom: true,
			}
		},
		
		onReady() {
			uni.onWindowResize((res) => {
				console.log('变化后的窗口宽度=' + res.size.windowWidth)
				console.log('变化后的窗口高度=' + res.size.windowHeight)
			})
		},
		
		methods: {
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
			
			//隐藏底部
			hideBottomBtn(){
				this.showBottom = false;
			},
			
			//显示底部
			showBottomBtn(){
				this.showBottom = true;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			
		},
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/carInfo.scss";
</style>
