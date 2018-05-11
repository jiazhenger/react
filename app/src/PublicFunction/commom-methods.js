/* ====================================== 备用方法  ====================================== */
module.exports = {
	// ======================================================================== 测试 console.log 输出 
	logError(msg){
		console.log('%cj+2 错误提示：' + msg,'color:red');
	},
	logPromp(msg){
		console.log('%cj+2 友情提示：' + msg,'color:#ce6007');
	},
	// ========================================================================= 时间处理
	// 获取当前时间
	getTime(){
		reutrn (new Date()).valueOf().toString();
	},
	// ======================================================================== 数据拷贝
	// 深拷贝
	copyData(data){
		return JSON.parse(JSON.stringify(data))
	},
	// ======================================================================== 复制
	copy(copyTargetId){
		var e = document.getElementById(copyTargetId);
		e.select();
		document.execCommand("Copy");
		alert("复制链接成功！");
	},
	// ======================================================================== 阻止事件冒泡
    // 阻止冒泡不阻止默认行为
	stop(event){
		event.stopPropagation();
	},
	// 阻止冒泡并阻止默认行为
	prevent(event){
		event.preventDefault()
	},
}
