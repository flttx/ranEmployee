<template>
	<view class="content">
		<view class="form">
			<view class="input-row">
				<label>会员卡号：</label>
				<input type="text" disabled value="000001">
			</view>
			<view class="input-row">
				<label>会员姓名：</label>
				<input type="text" disabled value="许先生">
			</view>
			<view class="input-row">
				<label>联系方式：</label>
				<input type="text" disabled value="18318318333">
			</view>
			<view style="width: 100%;">
				<view class="input-row memberLevel">
					<label>会员等级：</label>
					<input type="text" disabled value="充值会员">
				</view>
				<view class="balance single-line">
					余额：100元
				</view>
			</view>
			
			<view class="recharge-box">
				<view class="item-box" style="justify-content: center;">
					<view class="item yearCard">
						<text>198元</text>
						<text>年卡会员</text>
					</view>
				</view>
				
				
				<view class="item-box" style="justify-content: space-between;">
					<view class="item money">
						<text>3000元</text>
						<text class="discount">赠送300元</text>
					</view>
					<view class="item money">
						<text>5000元</text>
						<text class="discount">赠送600元</text>
					</view>
				</view>
				
				<view class="item-box" style="justify-content: space-between;">
					<view class="item money">
						<text>10000元</text>
						<text class="discount">赠送1400元</text>
					</view>
					<view class="item money">
						<text>20000元</text>
						<text class="discount">赠送3000元</text>
					</view>
				</view>
				
				<view class="input-box">
					<image src="../../../../static/imgs/common/custom.png"></image>
					<input type="text" id="otherMoney"/>
					<text>自定义输入：</text>
				</view>
			</view>
			
			
			<view class="select-pay" @tap="showPayBox">
				<input disabled placeholder="请选择支付方式"> 
			</view>
			
			<view class="pay-box" v-if="showMask" @tap="selectPayWay">
				<p>请选择支付方式</p>
				<view class="pay-way-box" style="justify-content: space-between;">
					<text class="item pay-way" data-value="支付宝">支付宝</text>
					<text class="item pay-way" data-value="微信">微信</text>
				</view>
				<view class="pay-way-box" style="justify-content: space-between;">
					<text class="item pay-way" data-value="现金">现金</text>
					<text class="item pay-way" data-value="POS机">POS机</text>
				</view>
				<view style="height: 40px;margin-top: 20px;">
					<text class="item pay-way" style="float: left;" data-value="赠送">赠送</text>
					<view class="input-box" style="float: right;width: calc(100% - 120px);margin-top: 10px;">
						<image src="../../../../static/imgs/common/custom.png" data-id="otherWay"></image>
						<input type="text" placeholder="其他" v-model="otherWay"/>
					</view>
				</view>
			</view>
			
			<view class="remark-box">
				<view class="text">备注：</view>
				<textarea></textarea>
			</view>
			
			
			<view class="btn-box">
				<button class="cancel">取消</button>
				<button class="confirm">确认充值</button>
			</view>
			
		</view>
		
		<view class="mask" v-if="showMask" @tap="hideMask" @touchmove.stop.prevent=""></view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showMask: false,  //显示蒙版
				otherWay: "",  //其他支付方式
				payWay: "",  //支付方式
			}
		},
		
		
		methods: {
			//显示支付方式面板
			showPayBox(){
				this.showMask = true;
			},
			
			//隐藏支付方式面板
			hideMask(){
				this.showMask = false;
			},
			
			//选择支付方式
			selectPayWay(e){
				if(e.target.dataset.value){
					this.payWay = e.target.dataset.value;
					this.showMask = false;
				} else if(e.target.dataset.id){  //选择其他
					if(this.otherWay == ""){
						uni.showToast({
							title: "请填写内容",
							icon: "none"
						});
						return;
					} else {
						this.payWay = this.otherWay;
						this.showMask = false;
					}
				}
			}
		}
		
		
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/rechargeDetail/rechargeDetail.scss";
</style>
