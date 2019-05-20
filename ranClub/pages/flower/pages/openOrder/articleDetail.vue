<template>
	<view class="content">
		<view class="service-detail">
			<p>服务详情</p>
			<view class="input-row">
				<label class="cellname">服务项目</label>
				<input type="text" disabled placeholder="请选择" @tap="showBoxHandler(1)"/>
			</view>
			<view class="input-row">
				<label class="cellname">是否加急</label>
				<radio-group>
					<label class="radio"><radio value="r1" checked="true" />否</label>
					<label class="radio"><radio value="r2" />是</label>
				</radio-group>
			</view>
			<view class="input-row">
				<label class="cellname">预计取件日期</label>
				<input type="text" disabled placeholder="请选择" @tap="selectDate"/>
			</view>
			<view class="input-row">
				<label class="cellname">备注</label>
				<input type="text" placeholder="请输入" :disabled="type==3"/>
			</view>
		</view>
		
		<view class="article-detail">
			<p>物件详情</p>
			<view class="input-row">
				<label class="cellname">品类</label>
				<input type="text" disabled placeholder="请选择" @tap="showBoxHandler(2)"/>
			</view>
			<view class="input-row">
				<label class="cellname">品牌</label>
				<input type="text" placeholder="请输入" :disabled="type==3"/>
			</view>
			<view class="input-row">
				<label class="cellname">颜色</label>
				<input type="text" placeholder="请输入" :disabled="type==3"/>
			</view>
			<view class="input-row">
				<label class="cellname">附带物件</label>
				<input type="text" disabled placeholder="请选择" @tap="showBoxHandler(3)"/>
			</view>
			<view class="input-row">
				<label class="cellname">不良效果</label>
				<input type="text" disabled placeholder="请选择" @tap="showBoxHandler(4)"/>
			</view>
			<view class="input-row">
				<label class="cellname">物件瑕疵</label>
				<input type="text" disabled placeholder="请选择" @tap="showBoxHandler(5)"/>
			</view>
			<view class="upload-row" v-if="type!=3">
				<label>物件照片</label>
				<view class="img-box">
					<image v-for="(img, index) in imgs" :key="index" :src="img.path"></image>
					<text class="uni-icon uni-icon-plusempty" @tap="clickUpload" v-if="imgs.length<6"></text>
				</view>
				
			</view>
			
		</view>
		
		<view class="bottom">
			<button @tap="backPage">{{type!=3?'取消':'返回'}}</button>
			<button @tap="clickConfirm" v-if="type!=3">确定</button>
			<button @tap="toArticleStatus" v-else>物件状态</button>
		</view>
		
		
		<view class="mask" @touchmove.stop.prevent="" @tap="hideMask" v-if="showBox"></view>
		
		<view class="select-box" v-if="showBox">
			<block v-if="boxType==1">
				<checkbox-group class="single-box">
					<label class="checkbox-item" v-for="(item, index) in itemList" :key="index">
						<checkbox :value="index + ''" name="item"/>{{item.name}}
					</label>
				</checkbox-group>
			</block>
			<block v-else-if="boxType==2">
				<radio-group class="double-box">
					<label class="radio-item" v-for="(item, categoryIndex) in categories" :key="categoryIndex">
						<radio :value="categoryIndex + ''" name="category"/>{{item.name}}
					</label>
				</radio-group>
			</block>
			<block v-else-if="boxType==3">
				<radio-group class="single-box">
					<label class="radio-item" v-for="(item, attachmentIndex) in attachments" :key="attachmentIndex">
						<radio :value="attachmentIndex + ''" name="attachment"/>{{item.name}}
						<input type="text" value="" v-if="attachmentIndex == attachments.length-2" placeholder="请输入"/>
					</label>
				</radio-group>
			</block>
			<block v-else-if="boxType==4">
				<checkbox-group class="single-box">
					<label class="radio-item" v-for="(item, effectIndex) in effects" :key="effectIndex">
						<checkbox :value="effectIndex + ''" name="attachment"/>{{item.name}}
						<input type="text" value="" v-if="effectIndex == effects.length-1" placeholder="请输入"/>
					</label>
				</checkbox-group>
			</block>
			<block v-else-if="boxType==5">
				<checkbox-group class="double-box">
					<label class="checkbox-item" v-for="(item, flawIndex) in flaws" :key="flawIndex">
						<checkbox :value="flawIndex + ''" name="attachment"/>{{item.name}}
						<input type="text" value="" v-if="flawIndex == flaws.length-1" placeholder="请输入"/>
					</label>
				</checkbox-group>
			</block>
			<view class="btn-box">
				<button @tap="hideMask">取消</button>
				<button @tap="confirmSelect">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type: 1,  //操作，1-添加，2-编辑，3-查看
				showBox: false,  //显示弹出面板
				boxType: 1,  //弹出面板类型
				itemList: [{name: "清洗", value: 1},{name: "翻新", value: 2},{name: "干洗", value: 3},{name: "维修", value: 4},{name: "服饰修改", value: 5}],  //服务项目
				categories: [{name: "箱包", value: 1},{name: "钱包", value: 2},{name: "鞋靴", value: 3},{name: "上装", value: 4},{name: "下装", value: 5},
				{name: "配饰", value: 6},{name: "皮带", value: 7},{name: "其他", value: 8}],  //品类
				attachments: [{name: "肩带", value: 1},{name: "配饰", value: 2},{name: "其他", value: 3},{name: "无", value: 4}],  //附带物件
				effects: [{name: "污渍尽量淡化", value: 1},{name: "颜色略有色差", value: 2},{name: "无", value: 3},{name: "其他", value: 4}],  //不良效果
				flaws: [{name: "磨损", value: 1},{name: "破洞", value: 2},{name: "划痕", value: 3},{name: "绽线", value: 4},{name: "破损", value: 5},{name: "掉色", value: 6},
				{name: "污渍", value: 7},{name: "变色", value: 8},{name: "染色", value: 9},{name: "泛白", value: 10},{name: "水印", value: 11},{name: "脱胶", value: 12},
				{name: "褶皱", value: 13},{name: "起泡", value: 14},{name: "变形", value: 15},{name: "起皮", value: 16},{name: "抽丝", value: 17},{name: "无", value: 18},
				{name: "裂痕", value: 19},{name: "其他", value: 20}],  //瑕疵
				imgs: [],  //上传的图片
			}
		},
		
		onLoad(option) {
			this.type = option.type;
		},
		
		methods:{
			/**显示弹出面板
			 * @param {Object} type (1-服务项目，2-品类，3-附带物件，4-不良效果，5-物件瑕疵)
			 */
			showBoxHandler(type){
				this.boxType = type;
				this.showBox = true;
			},
			
			//隐藏蒙版
			hideMask(){
				this.showBox = false;
			},
			
			//选择日期
			selectDate(){
				plus.nativeUI.pickDate(function(e){
					let d=e.date;
					console.log( "选择的日期："+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate() );
				},function(e){
					console.log( "未选择日期："+e.message );
				});
			},
			
			//隐藏弹出层
			hidePopup(){
				this.showPopup = false;
			},
			
			//点击上传图片
			clickUpload(){
				let _this = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function (res) {
						let files = res.tempFilePaths;
						_this.imgs.push.apply(_this.imgs, files);
						// for(let i = 0;i<files.length;i++){
						// 	console.log(files[i]);
						// 	plus.io.resolveLocalFileSystemURL(files[i], function(entry) {
						// 		var localurl = entry.toLocalURL(); 
						// 		console.log(localurl);
						// 		_this.imgs.push({
						// 			path: localurl
						// 		});
						// 	});
						// }
					}
				});
			},
			
			//返回上一页
			backPage(){
				uni.navigateBack();
			},
			
			//点击确定
			clickConfirm(){
				
			},
			
			//跳转物件状态
			toArticleStatus(){
				uni.navigateTo({
					url: '../searchOrder/articleStatus',
					animationType: "fade-in"
				});
			}
			
		}
	}
	
</script>

<style lang="scss">
	@import "../../../../scss/luxury/openOrder/articleDetail.scss";
</style>
