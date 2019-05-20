<template>
	<view class="content">
		<view class="form">
			<view class="row" id="toService">
				<text class="label">服务项目：</text>
				<text class="value" v-model="serviceItem"></text>
				<image src="../../../../static/imgs/common/right.png"></image>
			</view>
			
			<view class="row">
				<text class="label">购买次数：</text>
				<input type="number" v-model="buyCount" @input="inputBuyCount"/> 
			</view>
			
			<view class="row">
				<text class="label">购买金额：</text>
				<input type="number" v-model="buyMoney" @input="inputBuyMoney" @blur="inputBuyMoney"/> 
			</view>
			
			<view class="row deadline">
				<text class="label">过期时间：</text>
				<input type="text"  v-model="deadline" disabled/> 
			</view>
			
			<view class="row payWay" @tap="showPayBox">
				<text class="label">支付方式：</text>
				<text class="value single-line">{{payWay}}</text>
				<image src="../../../../static/imgs/common/right.png"></image>
			</view>
			
			
			
			
			<view class="bottom">
				<button>取消</button>
				<button>确认购买</button>
			</view>
	
		</view>
		
		
		
		<view class="mask" v-if="showMask" @tap="hideMask"></view>
		<view class="pay-box" v-if="showMask">
			<checkbox-group class="member-info" @change="selectPayWay">
				<label class="checkbox-item" v-for="(item, index) in payWays" :key="index"><checkbox :value="index + ''" name="pay" :checked="item.checked"/>{{item.name}}</label>
			</checkbox-group>
			<view class="pay-btn-box" @tap="clickPayBtn">
				<button class="cancel" data-id="cancel">取消</button>
				<button class="confirm" data-id="confirm">确定</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import util from "../../../../common/util.js";
	
	export default{
		data(){
			return{
				payWays: [{name: "微信支付", value: "微信支付", checked: false},{name: "支付宝支付", value: "支付宝支付", checked: false},{name: "POS机", value: "POS机", checked: false},
				{name: "现金", value: "现金", checked: false},{name: "登记免费", value: "登记免费", checked: false}],   //支付方式
				showMask: false,  //显示蒙版
				payWay: "",  //支付方式
				selectedPayWay: "",  //选择的支付方式
				serviceItem: "", //服务项目
				buyCount: "", //购买次数
				buyMoney: "", //购买金额
				deadline: "", //过期时间
				
			}
		},
		
		
		methods: {
			//显示支付方式面板
			showPayBox(){
				this.showMask = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showMask = false;
			},
			
			//点击支付方式面板按钮
			clickPayBtn(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "cancel"){
						this.selectedPayWay= "";
						this.payWays.map(function(item){
							item.checked = false;
						});
					} else {
						this.payWay = this.selectedPayWay;
					}
					this.showMask = false;
				}
			},
			
			//选择支付方式
			selectPayWay(e){
				//value存的是选中checkbox的索引
				let values = e.detail.value;
				this.selectedPayWay = "";
				for(let i = 0,len = values.length;i<len;i++){
					this.selectedPayWay += this.payWays[values[i]].name;
					if(i<len-1){
						this.selectedPayWay += ",";
					}
				}
				//遍历数组，将选中的元素checked置为true,其余的置为false
				this.payWays.map(function(item,index){
					item.checked = values.includes(index.toString());
				});
			},
			
			
			//输入购买次数
			inputBuyCount(){
				if(!/^[0-9]+$/.test(this.buyCount)) {
					this.buyCount = this.buyCount.substring(0, this.buyCount.length-1);
				}
			},
			
			//输入购买金额
			inputBuyMoney(e){
				console.log(this.buyMoney);
				if(!util.validateMoney(this.buyMoney)){
					this.buyMoney = this.buyMoney.substring(0, this.buyMoney.length-1);
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/buyServiceDetail/buyServiceDetail.scss";
</style>
