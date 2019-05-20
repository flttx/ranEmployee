<template>
	<view class="content">
		<page-head :role="role.roleType"></page-head>
		<scroll-view class="messageList" scroll-y>
			<view class="message-item" v-for="(message, index) in messageList" :key="index">
				<view class="message-time">{{message.time}}</view>
				<view class="message-content">{{message.content}}</view>
			</view>
		</scroll-view>
		<page-foot :tabs="tabs"></page-foot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role: {},
				messageList: [{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				},{
					content: "会员 许大新 1380131412 已预约 明天下午14:00，请门店人员尽快与顾客联系并确认！",
					time: "2019-02-13 14:15"
				}],
				
				tabs: [{
					imgUrl: "/static/imgs/common/home.png",
					imgUrl1: "/static/imgs/common/home1.png",
					title: "首页",
					pageUrl: "../car/manager/managerIndex",
					active: false
				}, {
					imgUrl: "/static/imgs/common/message.png",
					imgUrl1: "/static/imgs/common/message1.png",
					title: "消息",
					pageUrl: "./message",
					active: true
				}]
			}
		},
		
		onLoad() {
			this.role = uni.getStorageSync("role");
			if(this.role.roleType == "店助"){
				this.tabs[0].pageUrl = "../" + this.judgeModule(this.role.module) + "/assistant/assistantIndex";
			} else if(this.role.roleType == "师傅"){
				this.tabs[0].pageUrl = "../" + this.judgeModule(this.role.module) + "/worker/workerIndex";
			} else if(this.role.roleType == "财务"){
				this.tabs[0].pageUrl = "../" + this.judgeModule(this.role.module) + "/treasurer/treasurerIndex";
			} else if(this.role.roleType == "物流"){
				
			} else {
				this.tabs[0].pageUrl = "../" + this.judgeModule(this.role.module) + "/manager/managerIndex";
			}
		},
		
		methods: {
			//根据模块枚举判断跳转页面路径
			judgeModule(module){
				let pageUrl = "";
				switch (module){
					case 1:  //奢侈品护理
						pageUrl = "luxury";
						if(this.role.roleType == "店长"){
							this.tabs.splice(1,0,{
								imgUrl: "/static/imgs/common/logistics.png",
								imgUrl1: "/static/imgs/common/logistics1.png",
								title: "物流",
								pageUrl: "../luxury/pages/logistics/logistics",
								active: false
							});
						}
						break;
					case 2:  //名车护理
						pageUrl = "car";
						break;
					case 3:  //花艺
						pageUrl = "flower";
						break;
				}
				return pageUrl;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/message/message.scss";
</style>
