/*
 * action 是一个对象，只是含有type的key的对象
 * this.props.action.ajax() 进入直接调用
 * 	
 * action 中的函数返回的变量，通能会绑定到 action 对象上，那么，reducer 中可以取任何 action 函数返回的值
 * 
 */

export const A = 'A'
export const B = 'B'
export const C = 'C'

export const Init = {
	api: 'http:/www/api.com',
	version: '1.0.0',
	author: 'j+2',
	date: '2017-07-25'
}

// 标准 action
export const changeText = (text)=>{
	return {
		type: 'default',
		payload: text
	}
}
/*
 * action创建函数：创建一个action的函数，函数返回一个对象
 * 
 	1、使用的时候直接 store.dispatch(add()) 就可以
 	2、action创建函数表面是返回一个对象
 	3、真正的意义在于逻辑的封装
 * 
 */
export const getCode = text => {
	return {
        type: 'do_code',
        text: text
    }
}

/*
export const dispatch = (type)=>{
	return (dispatch, getState) => {
        //let currentValue = getState();
        //console.log(currentValue)
        //if (currentValue % 2 == 0) { return false; }
        dispatch({ type: type})
    }
}
*/
// 改变 reduder
export const doType = (type,param) => ({ type: type, ...param })
export const dispatch = (type,param) => dispatch => { dispatch({ type: type,  ...param}) }
// 提示
export const prompt = ( text, delay ) => {
	return dispatch => {
		dispatch({ type: 'Do_Prompt_Show', msg: text });
		setTimeout(()=>{
			dispatch({ type: 'Do_Prompt_Hide', msg:'' });
		},delay || 1000)
	}
}
