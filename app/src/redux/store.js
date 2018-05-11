/*
 *	Store 是一个全局对象，将action和reducer以及state联系在一起，主要职责: 
 * 
	1、维护应用的state
	2、提供getState()方法获取state
	3、提供dispatch(action)方法更新state
	4、通过subscribe(方法)注册监听器
 * 
 */
import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
/*
 *	redux-thunk:
 * 
 *  可以让 action 创建函数先不返回一个action对象，而是返回一个函数，
 	函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装
 	
 	export const actionFunction = ()=>{
		return (dispatch, getState) => {
	        const currentValue = getState();
	        dispatch({type:'A'}})
	    }
	}
 	
 * 
 */
import thunk from 'redux-thunk'

import * as reducer from './reducer'

// 创建一个 Store
/*
const Store = createStore(
	combineReducers(reducer),
	applyMiddleware(thunk)	// 激活redux-thunk中间件
)
*/
let Store = '';
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){ // 如果没有安装插件
    Store = createStore(
        combineReducers(reducer),
        applyMiddleware(thunk)
    );
}else{ // 如果安装有插件
    Store = createStore(
        combineReducers(reducer),
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

// 获取当前 state
// 注册监听器
const previosValue = Store.getState();
Store.subscribe(()=>{
    const currentValue = Store.getState();
	console.log('初始值:', previosValue, '当前值:', currentValue)
});
/*
// 获取state




// 分发任务，更新state
Store.dispatch({type:'A'});
Store.dispatch({type:'B'});
Store.dispatch({type:'C'});
Store.dispatch(addIfOdd())
*/
export default Store;
