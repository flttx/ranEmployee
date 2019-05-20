/**
 * 请求方法
 * @param: url  接口地址
 * @param: param 传递的参数
 * @param: header 请求头
 * @param: method 请求类型GET/POST
 * @param: successCallBack 成功回调
 * @param: errorCallBack 失败回调
 * @param: loadMsg 加载提示
 */
function request(url, param, header, method, successCallBack, errorCallBack, loadMsg){
	if(loadMsg && loadMsg != ""){
		uni.showLoading({
			title: loadMsg,
			mask: true
		});
	}
	var headers = {
		'Content-Type':'application/json'
	}
	if(header != null) {
		headers = header;
	}
	
	uni.request({
		url: url,
		data: param,
		header: headers,
		method: method,
		success: (res)=>{
			if(loadMsg && loadMsg != ""){
				uni.hideLoading();
			}
			if((res.data["code"] && res.data.code == 200) || !res.data["error_code"]){
				if(typeof successCallBack == "function"){
					successCallBack(res.data);
				}
			} else {
				let msg = res.data["msg"] || res.data["error_msg"];
				if(typeof errorCallBack == "function"){
					errorCallBack(res.data);
				}
			}
		},
		fail: (err)=>{
			if(loadMsg && loadMsg != ""){
				uni.hideLoading();
			}
			console.log(err);
			console.log("接口地址:" + url);
		}
	});
}






/**
 * 请求地址
 */






module.exports = {
	request: request
}