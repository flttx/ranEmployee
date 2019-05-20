<template>
	<view class="content">
		<view class="box-title">
			会员消费
		</view>
		<view class="box">
			<view class="row">
				<label class="colname">顾客姓名</label>
				<view class="value">许小新</view>
			</view>
			<view class="row">
				<label class="colname">联系方式</label>
				<view class="value">
					<text>18305172222</text>
					<view><text>余额：1000元</text><text class="member-level">3000会员</text></view>
				</view>
			</view>
			
			<view class="input-row">
				<label class="colname">取货时间</label>
				<input type="text" class="disabled" :disabled="type==2" v-model="receiveDate"/>
			</view>
			
			<view class="row">
				<label class="colname">取货方式</label>
				<radio-group @change="selectReceiveWay">
					<label class="radio-item"><radio :disabled="type==2" checked value="1"/>自取</label>
					<label class="radio-item"><radio :disabled="type==2" value="2"/>送货上门</label>
				</radio-group>
			</view>
			
			
			<view class="input-row">
				<label class="colname">地址</label>
				<textarea :disabled="type==2"></textarea>
			</view>
			
			<view class="input-row">
				<label class="colname">备注</label>
				<input type="text" :disabled="type==2" placeholder="请输入备注"/>
			</view>
			
			<hr style="margin-top: 20upx;"/>
			
			<view class="input-row">
				<label class="colname">物品用途</label>
				<radio-group @change="selectUse">
					<label class="radio-item"><radio :disabled="type==2" checked value="1"/>礼品</label>
					<label class="radio-item"><radio :disabled="type==2" value="2"/>自用</label>
				</radio-group>
			</view>
			
			<view class="input-row" v-if="useType == 1">
				<label class="colname">祝福卡片</label>
				<radio-group @change="selectCard">
					<label class="radio-item"><radio :disabled="type==2" checked value="1"/>不需要</label>
					<label class="radio-item"><radio :disabled="type==2" value="2"/>需要</label>
				</radio-group>
			</view>
			
			<block v-if="useType == 1 && needCard">
				<view class="input-row">
					<label class="colname">卡片收件人</label>
					<input type="text" :disabled="type==2" placeholder="请输入卡片收件人"/>
				</view>
				
				<view class="input-row">
					<label class="colname">卡片内容</label>
					<input type="text" :disabled="type==2" placeholder="请输入卡片内容"/>
				</view>
			</block>
			
		</view>
		
		<view class="box-title">花束明细</view>
		<view class="box" @tap="clickHandler">
			<view class="item">
				<view class="item-name">201903080001-01</view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view>情人节花束1</view>
						<view>1束 <text class="operation" data-id="edit" v-if="type==1">编辑</text></view>
						<view class="item-price">￥400<text class="original-price red">￥500</text><text class="operation" data-id="delete" v-if="type==1">删除</text></view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="item-name">201903080001-02</view>
				<view class="item-info">
					<image src="/static/imgs/luxury/scene.png"></image>
					<view class="item-desc">
						<view>情人节花束2</view>
						<view>1束 <text class="operation" v-if="type==1">编辑</text></view>
						<view class="item-price">￥400<text class="original-price red">￥500</text><text class="operation" v-if="type==1">删除</text></view>
					</view>
				</view>
			</view>
			<view class="add-row" v-if="type==1">
				<text data-id="add">
					<text data-id="add">添加花束</text>
					<text class="uni-icon uni-icon-plusempty" data-id="add"></text>
				</text>
			</view>
			<view class="total-price"><text class="total">订单总额：￥1200.00</text></view>
			<view class="extra-price">会员余额：¥1000.00</view>
			<view class="extra-price">优惠券：¥200.00</view>
		</view>
		
		
		<view class="bottom" @tap="clickBottomBtn">
			<button data-id="back">返回</button>
			<button data-id="confirm" v-if="type==1">确认接单</button>
		</view>
		
		

		<!-- <view class="mask" @touchmove.stop.prevent="" @tap="hideMask" v-if=""></view> -->
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type: 1, //类型，1-接单，2-查看
				receiveDate: "",  //取货时间
				useType: 1, //用途，1-礼品，2-自用
				needCard: false, //需要卡片
			}
		},
		
		onLoad(option) {
			this.type = option.type;
			
		},
		
		methods:{
			
			//隐藏蒙版
			hideMask(){
				
			},
			
			//选择取货方式
			selectReceiveWay(){
				
			},
			
			//选择用途
			selectUse(e){
				this.useType = e.detail.value;
			},
			
			//选择是否需要卡片
			selectCard(e){
				this.needCard = e.detail.value == 2;
			},
			
			//点击事件
			clickHandler(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					switch(id){
						case "add":   //点击添加物件
							uni.navigateTo({
								url: "./articleDetail",
								animationType: "fade-in"
							});
							break;
						case "edit":  //点击编辑
							uni.navigateTo({
								url: "./articleDetail",
								animationType: "fade-in"
							});
							break;
						case "delete":  //点击删除
							uni.showModal({
								title: "提示",
								content: "确定要删除？",
								cancelText: "否",
								confirmText: "是",
								success: (res)=>{
									if (res.confirm) {
										console.log('用户点击是');
									} else if (res.cancel) {
										console.log('用户点击否');
									}
								}
							});
							break;
					}
				}
			},
			
			//点击底部按钮
			clickBottomBtn(e){
				let id = e.target.dataset.id;
				if(id == "back"){
					uni.navigateBack();
				} else {
					uni.showModal({
						title: "提示",
						content: "确定要接单？",
						cancelText: "否",
						confirmText: "是",
						success: (res)=>{
							if (res.confirm) {
								console.log('用户点击是');
							} else if (res.cancel) {
								console.log('用户点击否');
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/flower/receiveOrder/orderDetail.scss";
</style>
