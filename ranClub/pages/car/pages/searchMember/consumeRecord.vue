<template>
	<view class="content">
		<scroll-view class="list" scroll-y>
			<view class="li">
				<view>下单消费</view>
				<view class="date">2019-02-10 13:53:53</view>
				<text class="money">-￥80.00</text>
			</view>
			<view class="li">
				<view>下单消费</view>
				<view class="date">2019-02-10 13:53:53</view>
				<text class="money">-￥80.00</text>
			</view>
			<view class="li">
				<view>下单消费</view>
				<view class="date">2019-02-10 13:53:53</view>
				<text class="money">-￥80.00</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type: 1,  //1-消费账单，2-余额记录，3-积分记录，4-优惠券记录，5-已购服务记录
			}
		},
		
		onLoad(option){
			this.type = option.type;
			let title = "";
			switch (parseInt(this.type)){
				case 2:
					title = "余额记录";
					break;
				case 3:
					title = "积分记录";
					break;
				case 4:
					title = "优惠券记录";
					break;	
				case 5:
					title = "已购服务记录";
					break;	
				default:
					title = "消费账单";
					break;
			}
			if(this.type != 1){
				uni.setNavigationBarTitle({
					title: title
				});
			}
			
		},
	}
</script>

<style lang="scss">
	@import "../../../../scss/car/searchMember/consumeRecord.scss";
</style>
