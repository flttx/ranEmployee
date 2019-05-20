<template>
	<view class="content">
		<view class="form">
			<view class="input-row input">
				<label>会员卡号</label>
				<input type="text" disabled class="memberNo" value="000001" style="color: #666;" />
			</view>
			<view class="input-row input">
				<label>会员姓名</label>
				<view>
					<input type="text" placeholder="请输入会员姓名" v-model="params.memberName"/>
					<text class="uni-icon uni-icon-clear" :style="{display:params.memberName.length>0?'block':'none'}" @tap="clearInput" id="memberName"></text>
				</view>
			</view>
			<view class="input-row input">
				<label>手机号码</label>
				<view>
					<input type="text" placeholder="请输入手机号码" v-model="params.phoneNumber" />
					<text class="uni-icon uni-icon-clear" :style="{display:params.phoneNumber.length>0?'block':'none'}" @tap="clearInput" id="phoneNumber"></text>
				</view>
				
			</view>
			
			<view class="sex-box">
				<radio-group>
					<label class="sexLabel">性别</label>
					<label class="radio"><radio value="r1"/>未知</label>
					<label class="radio"><radio value="r1"/>男</label>
					<label class="radio"><radio value="r1"/>女</label>
				</radio-group>
			</view>
			
			<view class="memberLevel"> 
				<text>会员等级</text>
				<checkbox-group class="member-info">
					<label class="checkbox-item" v-for="item in checkboxs" :key="item.value"><checkbox :value="item.name" name="level"/>{{item.name}}</label>
				</checkbox-group>
			</view>
			
			<view class="car-box" @tap="addCar">
				<view class="car-title">车辆信息<image src="../../../../static/imgs/common/add.png" data-id="add-btn"></image></view>
				<view class="card-box">
					<view class="cardNo-box">
						<view class="cardNo" v-for="(item, index) in carNos" :key="index"><span>{{item}}</span><image src="../../../../static/imgs/common/delete.png" :data-index="index"  @tap="deleteCarNo"></image></view>
					</view>
					<view class="add-btn" data-id="add-btn">+  添加车辆</view>
				</view>
			</view>
			
			<view class="btn-box">
				<button class="left">取消</button>
				<button class="right">确认开卡</button>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				checkboxs: [{value: "粉丝会员", name: "粉丝会员"},{value: "赠卡会员", name: "赠卡会员"},{value: "次卡会员", name: "次卡会员"}],
				params: {
					memberName: "",
					phoneNumber: "",
				},
				carNos: [],   //车牌数组
			}
		},
		
		onLoad(){
			
			var cmr = plus.camera.getCamera();
			cmr.startVideoCapture( function( path ){
					console.log( "Capture video success: " + path );  
				},
				function( error ) {
					console.log( "Capture video failed: " + error.message );
				},
			);
		},
		
		
		methods: {
			//清空输入框
			clearInput(e){
				let paramName = e.currentTarget.id;
				this.params[paramName] = "";
			},
			
			//点击添加车辆
			addCar(e){
				if(e.target.dataset.id){
					uni.navigateTo({
						url: "../openOrder/openOrder?fromCardPage=1",
						animationType: "fade-in"
					})
				}
			},
			
			//删除车牌
			deleteCarNo(e){
				this.carNos.splice(parseInt(e.target.dataset.index), 1);
			}
			
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/openCard/openCard.scss";
</style>
