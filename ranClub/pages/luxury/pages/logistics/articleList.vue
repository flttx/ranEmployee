<template>
	<view class="content">
		<view class="header">
			<text class="uni-icon uni-icon-arrowthindown"></text>
			<text class="uni-icon uni-icon-arrowthinup"></text>
			<view class="date-picker" @tap="pickerDate">
				<view class="date-value">开单时间: {{date}}</view>
			</view>
		</view>
		
		<scroll-view class="scroll-wrapper">
			<view class="item">
				<view class="item-no">201901010001-01<text class="red">【加急】</text></view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<text>包 Gucci 蓝色</text>
						<text>翻新</text>
					</view>
					
					<button class="btn" @tap="clickBtn">{{btnTitle}}</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type: 1, //类型，1-从门店取货，2-送往工厂，3-洗护中，4-送往门店
				date: "",  //开单时间
				btnTitle: "", //按钮文字
			}
		},
		
		onLoad(option){
			this.type = option.type;
			switch(parseInt(this.type)){
				case 1:
					this.btnTitle = "门店取货";
					break;
				case 2:
					this.btnTitle = "已送至工厂";
					break;
				case 3:
					this.btnTitle = "已从工厂取货";
					break;
				case 4:
					this.btnTitle = "已送往门店";
					break;
			}
		},
		
		methods:{
			//选择日期
			pickerDate() {
				plus.nativeUI.pickDate(function(e) {
					var d = e.date;
					console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
				}, function(e) {
					console.log("未选择日期：" + e.message);
				}, {
					title: "请选择日期：",
					maxDate: new Date()
				});
			},
			
			//点击按钮
			clickBtn(){
				let content = "";
				if(this.type == 1){
					content = "已从门店取货";
				} else if(this.type == 2){
					content = "已送至工厂";
				} else if(this.type == 3){
					content = "已从工厂取货";
				}
				
				if(content != ""){
					uni.showModal({
						title: '提示',
						content: '是否' + content + "?",
						cancelText: '否',
						confirmText: '是',
						success: res => {
							
						}
					});
				}
			}
			
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/luxury/logistics/articleList.scss";
</style>
