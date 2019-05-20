<template>
	<view class="content">
		<view class="search">
			<text class="uni-icon uni-icon-search"></text>
			<input type="text"  placeholder="姓名/手机号">
		</view>
		<view class="role-line">
			<view @tap="selectRole">
				<view class="role" @tap.stop.prevent="clickRole">{{searchRole}}<text class="uni-icon uni-icon-arrowdown"></text></view>
				<transition name="slide-fade">
					<view class="select" v-if="showRoles">
						<text v-for="(role, index) in roles" :key="index" data-id="select" :data-index="index">
							{{role.name}}
						</text>
					</view>
				</transition>
			</view>
			<view class="add-line" @tap="addStaff">新增<image src="../../../../static/imgs/common/add-circle.png"></image></view>
		</view>
		<view class="row">
			<text class="name">姓名</text>
			<text class="phone">手机号</text>
		</view>
		<scroll-view scroll-y style="height: calc(100% - 260upx);padding-bottom: 80upx;">
			<view class="row" v-for="(staff, index) in staffs" :key="index">
				<text class="name single-line">{{staff.name}}</text>
				<text class="phone">{{staff.phone}}</text>
				<view class="operation-line" @tap="selectOperation">
					<view class="operation" @tap.stop.prevent="clickOperation" :data-index="index">
						{{staff.operation}}
						<text class="uni-icon uni-icon-arrowdown"></text>
					</view>
					<transition name="slide-fade">
						<view class="operation-select" v-if="staff.showSelect">
							<text v-for="(operation, operationIndex) in operations" :key="operationIndex" data-id="select" :data-index="operationIndex" :data-arrIndex="index">{{operation}}</text>
						</view>
					</transition>
				</view>
			</view>
		</scroll-view>
		
		<view class="mask" @touchmove.stop.prevent="" v-if="showTip" @tap="hideMask"></view>
		<view class="tip-box" v-if="showTip">
			<p>停用前请先进行交接</p>
			<view class="select-row">
				<label>停用原因</label>
				<view @tap="selectReason">
					<view class="select-line" @tap.stop.prevent="clickReason">
						{{stopReason}}
						<text class="uni-icon uni-icon-arrowdown"></text>
					</view>
					<transition name="slide-fade">
						<view class="select" v-if="showResonSelect">
							<text v-for="(reason, index) in reasons" :key="index" data-id="select" :data-index="index">{{reason}}</text>
						</view>
					</transition>
				</view>
			</view>
			<view class="select-row">
				<label>交接人</label>
				<view @tap="selectHandover">
					<view class="select-line" @tap.stop.prevent="clickHandover">
						{{handoverPerson}}
						<text class="uni-icon uni-icon-arrowdown"></text>
					</view>
					<transition name="slide-fade">
						<view class="select" v-if="showHandoverSelect">
							<text v-for="(handover, index) in handovers" :key="index" data-id="select" :data-index="index">{{handover.name}}</text>
						</view>
					</transition>
				</view>
			</view>
			<view class="tips">*店长、销售、物流将进行订单物件交接</view>
			<view class="btn-row" @tap="clickBtn">
				<button data-id="cancel">取消</button>
				<button data-id="confirm">确定</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				roles: [{name: "店长", value: 1},{name: "店助", value: 2},{name: "师傅", value: 3},{name: "财务", value: 4}], //角色
				showRoles: false,  //显示角色选项
				searchRole: "店长",  //搜索的角色
				staffs: [{name: "许晓鑫鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},
				{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},
				{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},
				{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},
				{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},
				{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false},{name: "许晓鑫", phone: "18305172222", operation: "操作", showSelect: false}],  //员工列表
				operations: ["操作","修改","停用","删除"],  //操作选项
				showTip: false,  //显示停用提示面板
				reasons: ["离职", "暂时停用"],  //停用原因选项
				handovers: [{name: "许大新"},{name: "许一新"},{name: "许二新"},{name: "许三新"},{name: "许四新"}], //交接人
				showResonSelect: false, //显示停用原因选项
				showHandoverSelect: false, //显示交接人选项
				stopReason: "离职", //停用原因
				handoverPerson: "",
			}
		},
		
		onLoad() {
			let module = uni.getStorageSync("role").module;
			if(module == 1){
				this.roles = [{name: "店长", value: 1},{name: "店员", value: 2},{name: "物流", value: 5},{name: "财务", value: 4}];
			} else if(module == 3){
				this.roles = [{name: "店长", value: 1},{name: "财务", value: 4}];
			}
			
		},
		
		methods:{
			//点击角色栏
			clickRole(){
				this.showRoles = !this.showRoles;
			},
			
			//选择角色
			selectRole(e){
				if(e.target.dataset.id){
					let index = e.target.dataset.index;
					this.searchRole = this.roles[index].name;
					this.showRoles = false;
				}
				
			},
			
			//点击操作
			clickOperation(e){
				let index = e.currentTarget.dataset.index;
				this.staffs[index].showSelect = !this.staffs[index].showSelect;
			},
			
			//选择操作
			selectOperation(e){
				if(e.target.dataset.id){
					let index = e.target.dataset.index,   //操作选项索引
					arrIndex = e.target.dataset.arrindex; //员工数组索引
					this.staffs[arrIndex].showSelect = false;
					this.staffs[arrIndex].operation = this.operations[index];
					if(index == 1){  //点击修改
						uni.navigateTo({
							url: "./editStaff",
							animationType: "zoom-fade-out"
						});
					} else if(index == 2){  //点击停用
						this.showTip = true;
					} else if(index == 3){  //点击删除
						uni.showModal({
							title: "提示",
							content: "确定要删除？",
							cancelText: "否",
							confirmText: "是",
							success:(res)=>{
								if (res.confirm) {
									this.staffs.splice(arrIndex, 1);
								}
							}
						})
					}
				}
				
			},
			
			//新增员工
			addStaff(){
				uni.navigateTo({
					url: "./editStaff",
					animationType: "zoom-fade-out"
				});
			},
			
			//点击停用原因
			clickReason(){
				this.showResonSelect = !this.showResonSelect;
			},
			
			//点击交接人
			clickHandover(){
				this.showHandoverSelect = !this.showHandoverSelect;
			},
			
			//选择停用原因
			selectReason(e){
				if(e.target.dataset.id){
					let index = e.target.dataset.index;
					this.stopReason = this.reasons[index];
					this.showResonSelect = false;
				}
			},
			
			//选择交接人
			selectHandover(e){
				if(e.target.dataset.id){
					let index = e.target.dataset.index;
					this.handoverPerson = this.handovers[index].name;
					this.showHandoverSelect = false;
				}
			},
			
			//点击按钮
			clickBtn(e){
				if(e.target.dataset.id){
					let id = e.target.dataset.id;
					if(id == "cancel"){ //点击取消
						this.showTip = false;
					} else { //点击确定
						
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/staffManage/staffManage.scss"
</style>
