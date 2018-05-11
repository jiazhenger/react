/*
 * reducer 纯函数
 * 
 * 	1、函数的参数只能是 state(== case : return {}) 与  action(==dispatch({type:'A',text:''}))
 	2、函数名自定义
 	3、传递一个旧的state通过加工后产出一个新的state
 	4、export const X 将进入 this.props.state 中
 * 
 * 
 * */
// 导入全部方法
//import * as Actions from './action';	
//const init = Actions.Init

import { Init } from './action';		// 导入指定方法
const init = Init;

export const Test = (state=init, action) => {
	if(state.num === undefined){
		state.num = 0;
	}
	switch(action.type){
		case 'do_add':
			return {
				num: state.num + 1,
		    }
		case 'do_minus':
			return {
				num:state.num - 1,
		    }
		default:
			return {
				...state,
				show : action.show || false
			}
	}
}
// ===================================================================== 刷新页面
export const key = (key=0,action)=>{
	switch(action.type){
		case 'do_refresh':
			return key+1
		default:
			return key
	}
}
// ===================================================================== 提示
export const prompt = (bool=false, action) => {
	switch(action.type){
		case 'Do_Prompt_Show':
			return { bool:true, msg:action.msg }
		case 'Do_Prompt_Hide':
			return { bool:false }
		default:
			return { bool:false }
	}
}
// =====================================================================
export const My = (state='', action) => {
	switch(action.type){
		case 'do_code':
			return {
				path: action.text || ''
			}
		default:
			return state
	}
}
