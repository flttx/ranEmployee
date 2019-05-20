const api_key = "iblUnUKXhwPVr8eylRt7DoXU"; //应用API KEY
const secret_key = "m94FTVWXc1zmvWvqsKDyxbmoTcMRgxpT"; //应用SECRET KEY

// 	const access_token = "24.450ad2bbce8820a48197acc49a81105a.2592000.1557472216.282335-15812397";

// const request = require('./request');
import network from "./network.js";


//获取access_token
function requestAccessToken(callback) {
	let params = {
		grant_type: 'client_credentials',
		client_id: api_key,
		client_secret: secret_key
	}

	network.request('https://aip.baidubce.com/oauth/2.0/token', params, null, "GET", res => {
		if (res.hasOwnProperty('access_token')) {
			let nowTime = new Date().getTime();
			let access_token_obj = {
				access_token: res.access_token,
				requestTime: nowTime
			}
			uni.setStorageSync("access_token_obj", access_token_obj)
			callback(res.access_token);
		} else { //获取access_token失败
			console.log(JSON.stringify(res));
		}

	});
}

//识别中...调用文字识别API,传入图片数据参数
function recognition(access_token, imgData, callback) {
	let params = {
		access_token: access_token,
		image: imgData
	};
	let header = {
		'Content-Type': 'application/x-www-form-urlencoded'
	};
	network.request('https://aip.baidubce.com/rest/2.0/ocr/v1/license_plate', params, header, "POST", res => {
		callback(res);
	}, err => {
		uni.showToast({
			title: "请对准车牌重新拍照",
			icon: "none"
		})
	}, "识别中...");
}

/**
 * 开始进行文字识别，传入base64图片数据和回调函数
 */
function startOCR(imgData, callback) {
	console.log("开始识别...");
	console.log("access_token缓存？" + uni.getStorageSync("access_token_obj"));
	if (uni.getStorageSync("access_token_obj")) { //如果access_token已存入缓存，表示请求过
		let obj = uni.getStorageSync("access_token_obj");
		let nowTime = new Date().getTime();
		if ((nowTime - obj.requestTime) >= 1000 * 3600 * 24 * 30) { //如果上次请求时间在30天之前，则需要重新获取access_token
			requestAccessToken(res => {
				recognition(res, imgData, callback);
			});
		} else {
			recognition(obj.access_token, imgData, callback);
		}
	} else { //缓存中没有access_token
		requestAccessToken(res => {
			recognition(res, imgData, callback);
		});
	}
}



module.exports = {
	startOCR: startOCR
}
