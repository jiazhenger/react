/*
 * connect：连接redux跟react
 * 
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { withRouter} from 'react-router-dom';
// ===================================================================== 公共方法
import Http from '@common/global/http';
import Methods from '@common/global/methods';
import LocalStorage from '@common/global/localStorage';
import SessionStorage from '@common/global/sessionStorage';
import Indexdb from '@common/global/indexdb';
import Config from '@common/config';
// ===================================================================== action
import * as Actions from './action';
// ===================================================================== 
export default (Component,option) => {
	// ======================================== 容器组件
	class App extends React.Component {
		/*
		constructor(props,context) {
		    super(props,context);
		}
		*/
		//static contextTypes = { router: PropTypes.object.isRequired }
	   	// 组件即将插入真实 DOM
		componentWillMount(){
			this.id = Component.toString().match(/function\s*([^(]*)\(/)[1];
			this.className = (this.id).toLowerCase() + '-wraper';
		}
		// 组件已插入真实 DOM
		componentDidMount(){
			//console.log(this.props)
		}
		// 组件即将被重新渲染
		componentWillUpdate(nextProps, nextState){
			
		}
		// 组件被重新渲染
		componentDidUpdate(nextProps, nextState){}
		// 已加载组件收到新的参数时调用
		componentWillReceiveProps(nextProps){
			//console.log(this.props)
	    	if(this.props.location){
	    		//console.log('上一个路由',this.props.location.pathname);
	    		//console.log('当前路由',nextProps.location.pathname);
	    	}
		}
		// 组件判断是否重新渲染时调用
		shouldComponentUpdate(nextProps, nextState){
			return true;
		}
		// 组件即将被移出真实 DOM
		componentWillUnmount(){}
		// html 模板
		render() {
			return <Component id={this.id} { ...this.props } />
		}
	}
	// ======================================== this.context.router 使用前提声明
	Component.contextTypes = {
		//router: PropTypes.object.isRequired	// 声明对象为必选，如果没有会报错
		router: PropTypes.object
	}
	// ========================================  connect：连接redux跟react
	
	// 输入逻辑
	// 负责将通过state获得的数据映射到展示组件的this.props
	// 通常会省略第二个参数
	const mapStateToProps = (state,props)=>{
		return {
			state: state,
			$config: Config
		}
	}
	// 输出逻辑
	// 负责将用户操作转化为 Action 的功能函数映射到展示组件的this.props
	// 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
	const mapDispatchToProps = (dispatch, props) => {
		return {
			// 将 action 创建函数绑定到 props 上
			// 调用：this.props.$action.getData()
			$action: bindActionCreators(Actions, dispatch),
			$http: Http,
			$fn: Methods,
			$ls: LocalStorage,
			$ss: SessionStorage,
			$db: Indexdb
			//addHandler: () => {}
			// action : bindActionCreators(Object.assign({}, Actions1, Actions2), dispatch)
		}
	}
	// 用于自定义merge流程
	// prop 包括stateProps、dispatchProps、parentProps,合并在一起得到 nextState，作为props传给真正的Component
	const mergeProps = (stateProps, dispatchProps, ownProps)=> {
		let props = {
			...ownProps,	// 组件自身的props
			...stateProps,
			...dispatchProps
		}
		
		return props
		/*
		return Object.assign({}, ownProps, {
			todos: stateProps.todos[ownProps.userId],
			addTodo: (text) => dispatchProps.addTodo(ownProps.userId, text)
		})
		*/
	}
	// options
	const connectOptions = {}
	
	return connect(mapStateToProps,mapDispatchToProps,mergeProps,connectOptions)(App)
	//return withRouter(connect(mapStateToProps,mapDispatchToProps,mergeProps,connectOptions)(App))
	/* 
	// 生产环境写法
	return connect(
		(state,props)=> ({state: state,$config: Config}),
		(dispatch, props) => (
			{
				$action: bindActionCreators(Actions, dispatch),
				$http: Http,
				$fn: Methods,
				$ls: LocalStorage,
				$ss: SessionStorage,
				$db: Indexdb
			}
		),
		(stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps, ...dispatchProps })
	)(App)
	*/
}
