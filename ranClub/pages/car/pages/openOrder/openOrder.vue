<template>
	<view>
		<view class="form">
			<view class="cardNo">
				<view v-for="(value,index) in result" :key="index" :class="{'bigFont': index == 0||index == 1, 'num-box': index == 2, 'active': curIndex == index}" :data-index="index" @tap="clickCardNo">
					<text v-if="index>1" class="num">{{value}}</text>
					<block v-else>{{value}}</block>
				</view>
			</view>
			
			<view class="keyboard"> 
				<view class="provinces" v-if="curIndex == 0" @tap="clickProvinces">
					<view class="row" v-for="(row, index) in provinces" :key="index">
						<text v-for="(province, i) in row.data" :key="i" :data-value="province">{{province}}</text>
					</view>
				</view>
				
				<view class="english" v-if="curIndex>0" @tap="clickEnglish">
					<view class="line">
						<text v-for="(value, index) in [1,2,3,4,5,6,7,8,9,0]" :key="index" :data-value="value">{{value}}</text>
					</view>
					
					<view class="line">
						<text v-for="(value, index) in ['Q','W','E','R','T','Y','U','I','O','P']" :key="index" :data-value="value">{{value}}</text>
					</view>
					
					<view class="line">
						<text v-for="(value, index) in ['A','S','D','F','G','H','J','K','L']" :key="index" :data-value="value">{{value}}</text>
					</view>
					
					<view class="line">
						<text v-for="(value, index) in ['Z','X','C','V','B','N','M']" :key="index" :data-value="value">{{value}}</text>
					</view>
				</view>
			</view>
			
			<view class="bottom" @tap="clickButton">
				<button data-id="specialNo">特殊车牌</button>
				<image src="../../../../static/imgs/common/camera.png" data-id="camera"></image>
				<button data-id="confirm">确定</button>
			</view>
			
			
		</view>
		
		<view class="mask" v-if="showSpecialNo" @tap="hideMask" @touchmove.stop.prevent=""></view>
		
		<view class="input-box" v-if="showSpecialNo">
			<view class="p">特殊车牌</view>
			<input type="text" class="uni-input" placeholder="不输入则默认为临牌" v-model="specialNoInputValue"/>
			<view class="btn-box" @tap="clickBoxButton">
				<button class="left" data-id="cancel">取消</button>
				<button class="right" data-id="confirm">确定</button>
			</view>
		</view>
		
	</view>
	
	
	
	
</template>

<script>
	import ocr from "../../../../common/baidu_ocr.js";
	
	export default{
		data(){
			return{
				provinces: [{
					"data": ["京","津","冀","晋","蒙","辽","吉","黑"]
				},{
					"data": ["沪","苏","浙","皖","闽","赣","鲁","豫"]
				},{
					"data": ["鄂","湘","粤","桂","琼","渝","川","贵"]
				},{
					"data": ["云","藏","陕","甘","青","宁","新","台"]
				}],  //省市简称
				result: ["", "", "", "", "", "", ""],  //车牌   用空字符串防止在手机上显示Null
				curIndex: 0, //当前输入位置,0-省市简称,1-城市,2以上-车牌后6位
				fromCardPage: false, //标记是否从开卡页面打开
				showSpecialNo: false,  //展示特殊车牌输入面板
				specialNo: "", //特殊车牌号
				specialNoInputValue: ""  //特殊车牌输入框内容
			}
		},
		
		onLoad(option) {
			if(option.fromCardPage){
				this.fromCardPage = true;
			}
		},
		
		methods: {
			//省市键盘点击事件
			clickProvinces(e){
				if(e.target.dataset.value){
					this.result[0] = e.target.dataset.value;
					this.curIndex ++;
				}
			},
			
			//英文键盘点击事件
			clickEnglish(e){
				if(e.target.dataset.value){
					let value = e.target.dataset.value;
					if(this.curIndex == 1){
						if(/[0-9]/.test(value)){  //如果是数字
							uni.showToast({
								title: "请选择英文字母",
								icon: 'none'
							})
							return;
						} 
						this.result[this.curIndex] = e.target.dataset.value;
						this.curIndex ++;
					} else {
						this.result[this.curIndex] = e.target.dataset.value;
						if(this.curIndex < 6){
							this.curIndex ++;
						} else {
							this.curIndex = 2;
						}
					}
				}
			},
			
			//车牌点击事件
			clickCardNo(e){
				let index = parseInt(e.currentTarget.dataset.index);
				this.curIndex = index;
			},
			
			//底部按钮点击事件
			clickButton(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "specialNo") {
						this.showSpecialNo = true;
					} else if(id == "camera"){
						this.captureImage();
					} else {
						let licensePlate = "";
						licensePlate = this.result.join("");
						if(this.fromCardPage == true){
							var pages = getCurrentPages();
							var prevPage = pages[pages.length - 2];   //上一页
							prevPage.$vm.carNos.push(licensePlate);
							uni.navigateBack();
						} else {
							uni.navigateTo({
								url: "./openOrderDetail",
								animationType: "zoom-fade-out"
							})
						}
						
					}
				}
			},
			
			//隐藏蒙版
			hideMask(){
				this.showSpecialNo = false;
			},
			
			//特殊车牌面板按钮点击事件
			clickBoxButton(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "cancel"){
						this.specialNoInputValue = "";
						this.showSpecialNo = false;
					} else {
						this.showSpecialNo = this.specialNoInputValue;
						this.showSpecialNo = false;
					}
				}
			},
			
			//拍照
			captureImage() {
				let _this = this;
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				console.log("Resolution: " + res + ", Format: " + fmt);
				cmr.captureImage(function(path) {
						_this.convertUrl(path);
					},
					function(error) {
						alert("Capture image failed: " + error.message);
					}, {
						resolution: res,
						format: fmt
					}
				);
			},
			
			//转换图片路径并调用方法识别
			convertUrl(path){
				let _this = this;
				//转换为本地文件路径
				plus.io.resolveLocalFileSystemURL(path, function(entry) {
					var localurl = entry.toLocalURL(); 
					var reader = new plus.io.FileReader();  
					reader.onloadend = function (e) {  
						  var imgData = e.target.result.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", "");//base64图片  
						  ocr.startOCR(imgData, res=>{
							var number = res.words_result.number;
							if(number.length == 7){
								uni.showToast({
									title: "识别成功",
									icon: "none"
								})
								var values = number.split("");
								_this.result = values;
							}
						  });
					};  
					reader.readAsDataURL(localurl);  
				});
			},
			
			
			
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openOrder/openOrder.scss";
</style>
