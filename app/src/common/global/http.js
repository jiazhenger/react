/* ====================================== http 请求  ====================================== */
// axios http 请求
import axios from 'axios';
// localStorage 本地存储
import F from './methods';
const LS = require('./localStorage');
const DB = require('./indexdb');
const Config = require('@common/config');
// ===================================================== 公共函数
// 错误提法信息
const logError = (msg)=>{
	console.log('%cj+2 错误提示：' + msg,'color:red');
}
// 友情提示
//const logPromp = (msg)=>{ console.log('%cj+2 友情提示：' + msg,'color:#ce6007'); }
// 配置头信息
const config = ()=>{
	return {
		baseURL:Config.api,	// api 线上地址
		//baseURL:'http://10.1.22.112:8080/genius/api/',	// api 本地地址
	
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			//'authorization' : localStorage.token
		},
		timeout: 30000,
		withCredentials : true
	}
}
// 接口错误处理
const error = (err, url) =>{
	if(err.status === 404){
		//vue.$router.push({ path:'/404', query:{ api:url } });
		logError('你访问的 api 不存在，请检查: '+  err.url);
	}else if(err.status === 500){
        logError('服务器内部错误: '+  url);
    }else if(err.status === 0){
        logError('可能存在服务器拒绝 cors 跨域请求 || 访问的服务器不存在 || 访问的 api 没有返回数据 || 访问的 api 返回数据格式错误：' + url);
    }else{
    	logError('服务器出错：' + url);
    }
}
// 处理请求参数
/*
const manageBody = (body,param,promise) => {
	let mbody = body;
	if(F.isFunction(mbody)){
		mbody = body.call(promise, param);
		if(!F.isObject(mbody)){
			logError('请求参数是 函数时，必须返回一个对象参数 {}');
			return {}
		}
		return mbody;
	}else if(F.hasObject(body)){
		return body;
	}else{
		//logPromp('请求参数格式有 {} 与 函数返回 {} 或不传三种, 如请求数据不正确，请确认是否需要传参');
		return {}
	}
}*/
// 初始化请求
/*
const httpInit = (url, body, action, cache) => {
	return new Promise((resolve,reject) => {
		// 如果是初次请求
		if(!LS.get('init')){
			httpRequest(Config.init,{},'post').then(data=>{
				if(data.code === 0){
					LS.set('init',data.data);						// 保存初始化数据
					let mbody = manageBody(body,data.data,this);	// 函数返回带公参
					
					httpRequest(url,mbody,action).then( result => resolve(result.data), data => reject(data))
				}
			})
		}else{
			let mbody = manageBody(body,LS.get('init'),this);	// 函数返回带公参
			cache ? httpCache(url,mbody,action).then( result => resolve(result.data), data => reject(data))
				  : httpRequest(url,mbody,action).then( result => resolve(result.data), data => reject(data))
		}
	})
}
*/
// 封装公参
const publicParam = (body, action) => {
	let param = LS.get('login');
	let str='';
	for(let i in param){
		str += i + '=' + param[i] + '&' 
	}

	str = F.hasObject(body) && action === 'get' ? ( str + 'data=' + JSON.stringify(body) ) : str;
	
	return encodeURI( '?' + str);	// encodeURI 不对 [:, /, ;,?] 进行编码
}
// http 核心封装
const coreRequest = (url, body, action, resolve, reject, cache) => {
	let param = publicParam(body,action);
	let promise;
	if(action === 'get'){
		let uri = body ? url + param : url;
		promise = axios.get(uri, config());
		console.log('%c' + action + ' === ' + Config.api + url + param, 'color:blue')		// 输出 api
	}else{
		// 初始化重调 post
		if(url === Config.init){
			promise = axios.post(url, {}, config());
			//console.log('%c' + '初始化请求：' + action + ' === ' + Config.api + url, 'color:blue')		// 输出 api
		}else{
			promise = axios.post(url + param, { data: body }, config());
			console.log('%c' + action + ' === ' + Config.api + url + param, 'color:blue')		// 输出 api
		}
	}
	promise.then(res => {	// 接口正确接收数据处理
		let data = res.data;
		let code = data['code'];
		// 数据请求成功		
		if(code === 0){
			if(!F.isValid(data.data)){
				resolve({data:{'j+2提示': '接口未返回数据 data'}});
				return false;
			}
			resolve(data);
			if(Config.cache && cache){ DB.set(url,data);}	// 缓存数据
		} else if(code === 1919 || code === 1909){	// 未登录处理
			
		}else { // 数据请求失败	
			reject(data);
			logError('ajax请求畅通，返回后台程序容错信息：' + data['msg'])
		}
	}, (err) => { 					// 接口错误处理
		error(err, Config.api + url)
	})
}
// http 不带缓存请求
const httpRequest = (url, body, action = 'get') => {
	return new Promise((resolve, reject) => coreRequest(url, body, action, resolve, reject, false))
}
// http 带缓存请求
const httpCache = (url,body,action)=>{
	return new Promise((resolve,reject)=>{
		DB.get(url).then( data => data ? resolve(data) : coreRequest(url, body, action, resolve, reject, true))
	})
}
// get 请求
export const get = (url,param,config) => {
	// 初始化请求
	//return httpInit(url,param,'get',config.cache);
	// 缓存请求
	return (Config.cache && config && config.cache) ? httpCache(url,param,'get') : httpRequest(url,param,'get');
}
// post 请求
export const post = (url,body,config) => {
	//return httpInit(url,body,'post',config.cache);
	// 缓存请求
	return (Config.cache && config && config.cache) ? httpCache(url,body,'post') : httpRequest(url,body,'post');
}
// 获取文本数据
export const getTxt = (url) => {
	//let api = 'http://10.1.30.73/src/';
	//let api = 'http://10.1.22.15/reactjs/src/';
	//let api = 'http://localhost:8020/my-template/reactjs/src/';	// 本地访问
	let api= 'https://jiazhenger.github.io/react/app/src/';	// github访问
	return new Promise((resolve, reject) => {
		axios.get(api + url).then(res => {
			let data = res.data
			if(data){
				resolve(data);
			} else {
				reject(data);
			}
		})
	})
}
export default { get, post, getTxt }
