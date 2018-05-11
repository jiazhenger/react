// eventProxy.js
//'use strict';
const eventProxy = {
	Class: {},
	on(key, fn) {
		if(this.Class[key] === undefined) {
			this.Class[key] = [];
    	}
    	this.Class[key].push(fn);
	},
	off(key) {
		this.Class[key] = [];
	},
	publish() {
		if(arguments.length === 0){ return false }
		setTimeout(()=>{
	    	let key = arguments[0];	// key 为事件句柄
	    	let args = [].concat(Array.prototype.slice.call(arguments, 1));
	
			if(this.Class[key] !== undefined && this.Class[key].length > 0) {
				for(let i in this.Class[key]) {
					this.Class[key][i].apply(null, args);
				}
			}
		})
	}
};
export default eventProxy;