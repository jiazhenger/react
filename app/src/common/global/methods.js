/* ====================================== 全局变量及方法  ====================================== */
module.exports = {
	// ========================================================================  判断数据类型
	// 判断数据是否是对象 {}
	isObject(obj){
		return {}.toString.call(obj) === '[object Object]';
	},
	// 判断数据是否是对象{}，且对象长度 >0
	hasObject(obj){
		return this.isObject(obj) && Object.keys(obj).length > 0;
	},
	// 判断数据是否是函数 function
	isFunction(obj){
		return {}.toString.call(obj) === '[object Function]';
	},
	// 判断数据是否是数组 []
	isArray(obj){
		return {}.toString.call(obj) === '[object Array]';
	},
	// 判断数据是否是数级 []，且长度>0
	hasArray(obj){
		return this.isArray(obj) && obj.length > 0;
	},
	// 判断数据是否是字符串
	isString(obj){
		return {}.toString.call(obj) === '[object String]';
	},
	// 判断数据是否是数字
	isNumber(obj){
		return {}.toString.call(obj) === '[object Number]';
	},
	// 判断数据是否有效
	isValid(obj){
		return obj !== undefined && obj !=='' && obj !== null;
		//return obj !== undefined && obj !=='' && obj !== null && obj !== NaN;
	},
	// 判断数据的有效性
	isData(obj){
		return this.hasArray(obj) || this.hasObject(obj) || this.isValid(obj);
	},
    // ======================================================================== 阻止默认
    // 阻止冒泡不阻止默认行为
	stop(event){
		event.stopPropagation();
	},
	// 阻止冒泡并阻止默认行为
	prevent(event){
		event.preventDefault()
	},
	// ======================================================================== 返回测试数据
	// 将对象转为字符串
	json(data){
		return JSON.stringify(data,null,'\t');
	},
	// 将序列化对象转为对象
	data(param){
		if(!this.isValid(param) && !this.isString(param)) return {};
		
		let stack = {}
		let arr = (param.replace('?','')).split('&');
		
		arr.forEach((v,i)=>{
			let m = v.split('=');
			stack[m[0]] = m[1];
		})
		
		return stack
	},
	// 序列化对象 {} to ?a=1&b=2
	search(obj){
		if(!this.hasObject(obj)) return;
		let stack='?';
		for(let i in obj){
			stack+= i + '=' + JSON.stringify(obj[i]) + '&';
		}
		return stack.substring(0,stack.lastIndexOf('&'));
	}
}