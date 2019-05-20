<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/uni.css';
	/*每个页面公共css */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	
	/* 单行超出部分省略号 */
	.single-line{
	  white-space:nowrap;
	  overflow:hidden;
	  text-overflow:ellipsis;
	}
	
	uni-input div{
		width: 100% !important;
	}
	
	button{
		margin: 0;
		padding: 0;
	}
	
</style>
