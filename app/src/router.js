/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
//import MediaQuery from 'react-responsive';	// 媒体选择器
// ===================================================================== 异步加载
import { Bundle } from '@common/async/bundle';
// ===================================================================== 监听路由进入时，执行一次
/*
const getConfirmation = (message, callback) => {
	//const allowTransition = window.confirm(message)
	//callback(allowTransition)
}
const dealSelect = (bool) =>{
	if(bool){
		console.log('您选择了一号')
	}else{
		console.log('您选择了二号')
	}
}*/
// ===================================================================== 同步路由
import Main from './views/main';
import Code from './views/code/code';
import NotFoundPage from './views/404';
// ===================================================================== 异步路由
/*
const ReactIndex 	= BundleImport('react/main');
const Draft 		= BundleImport('draft/main');
const Antd 			= BundleImport('antd/main');
const MaterialUi 	= BundleImport('material-ui/main');
const MyComponent 	= BundleImport('my-component/main');
 */

const ReactIndex 	= Bundle(() => import('@views/react/main'));
const Draft 		= Bundle(() => import('@views/draft/main'));
const Antd 			= Bundle(() => import('@views/antd/main'));
const MaterialUi 	= Bundle(() => import('@views/material-ui/main'));
const MyComponent 	= Bundle(() => import('@views/my-component/main'));
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	state = { loading: false }
	// 组件即将插入真实 DO
	componentWillMount(){
		// 路由监听
		//this.context.routerhistory.listen((location)=>{ console.log(location);})
		
		this.props.history.listen((location,action)=>{ 
			console.log(location)
			if(action !== 'POP'){
				const main = document.getElementById('main');
				if(main !== undefined && main !== null && main.scrollTop !== 0){ main.scrollTop = 0 }
			}
		})
	}
	// 组件已插入真实 DOM
	componentDidMount(){
		
	}
	// 组件即将被重新渲染
	componentWillUpdate(nextProps, nextState){
		//console.log(nextProps)
	}
	// 组件被重新渲染
	componentDidUpdate(nextProps, nextState){
		
	}
	// 已加载组件收到新的参数时调用
	componentWillReceiveProps(nextProps){
		//console.log('上一个路由',this.props.location.pathname);
	    //console.log('当前路由',nextProps.location.pathname);
	}
	// 组件判断是否重新渲染时调用
	shouldComponentUpdate(nextProps, nextState){
		return true
	}
	// 在组件被移出之前被调用
	componentWillUnmount(){
		
	}
	render(){
		return (
			/*
			 *  此方法会不停刷新主路由
			 	BrowserRouter：无 hash 路由，只能在顶级路由声明
			 	HashRouter: 带 hash 路由，只能在顶级路由声明 
			 	MemoryRouter: 只切换视图，地址栏 url 不变，适用于不是浏览器的路由，如 react native 
				<BrowserRouter getUserConfirmation={getConfirmation('你是否要选择一种状态?', (f)=>{ console.log(f) } )}>
			 */
			<Switch> {/* Switch 每次只匹配一个路由 */}
				{/* path 可以随意指定：如 /a/b/c，但为了有意义，最好模块包含关系来定义路由的层级	*/}
				{/* 入口路由, path不可省 */}
				<Route path='/' component={ Main } exact />
				
				{/* 源码 */}
				<Route path='/code' component={ Code } exact />
				
				{/* 惰性路由  */}
				
				{/* react 模块路由  */}
				<Route path='/react' component={ ReactIndex } />
				{/* draft */}
				<Route path="/draft" component={ Draft } />
				{/* antd */}
				<Route path="/antd" component={ Antd } />
				{/* material-ui */}
				<Route path="/material-ui" component={ MaterialUi } />
				{/* 我的组件 */}
				<Route path="/my-component" component={ MyComponent } />
				{/* 路由是有顺序的   */}
				<Redirect from="/index" to="/" exact />		{/* 重定向，放倒数第二，如果有404，必须设置 exact，否则可能与404冲突*/} 
				<Route component={NotFoundPage} />			{/* 404，放倒数第一 */} 
			</Switch>
		)
	}
}
export default withRouter(AppRouter)
