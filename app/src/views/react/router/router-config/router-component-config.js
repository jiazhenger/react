/* ====================================== 路由组件化配置全局路由  ====================================== */
import React from 'react';
import { Route, NavLink } from 'react-router-dom'; 
import connect from '@redux/connect';
// ===================================================================== 路由数组
const routes = [
	{
		path : '/react/router/router-component-config/home',
		component: ()=>(<h2 className="samebox">一心一意</h2>),
		name: 'Home'
	},
	{
		path : '/react/router/router-component-config/about',
		component: () => <h2 className="samebox">仁义之师</h2>,
		name: 'About'
	},
	{
		path : '/react/router/router-component-config/news/:id',
		component: ({childRoutes}) => (
			<div className="samebox">
				<h2 className="samebox">两小无猜</h2>
				<NavLink to="/react/router/router-component-config/news/1" activeStyle={{color:'red'}} className="btn-my-o mr20">News1</NavLink>
				<NavLink to="/react/router/router-component-config/news/2" activeStyle={{color:'red'}} className="btn-my-o mr20">News2</NavLink>
				{/* 配置子路由 */}
				{
					childRoutes.map((route,index)=> <RouteWithSubRoutes key={index} {...route} />)
				}
			</div>
		),
		name: 'News',
		routes:[
			{ path:'/react/router/router-component-config/news/1', component:()=><div className="samebox">新闻一</div> },
			{ path:'/react/router/router-component-config/news/2', component:()=><div className="samebox">新闻二</div> },
		]
	}
]
// ===================================================================== 核心转换路由组件 
const RouteWithSubRoutes = (route) => (
	<Route path={route.path} exact render={props => (
		<route.component {...props} childRoutes={route.routes} />	// 处理子路由
	)}/>
)
// =====================================================================
class RouterManyComponent extends React.Component {
	goComponent(){
		this.props.$action.getCode('views/react/router/router-config/router-component-config.js');
		this.props.history.push('/code')
	}
	render(){
		const { match } = this.props;
		return (
			<div>
				<div className="samebox mb10">
					<button className="btn-my-default mr20" onClick={this.goComponent.bind(this)}>路由组件化配置全局路由</button>
				</div>
				
				<div className="samebox">
					<NavLink to={`${match.url}/home`} activeStyle={{color:'red'}} className="btn-my-o mr20">Home</NavLink>
					<NavLink to={`${match.url}/about`} activeStyle={{color:'red'}} className="btn-my-o mr20">About</NavLink>
					<NavLink to={`${match.url}/news/all`} activeStyle={{color:'red'}} className="btn-my-o mr20">News1</NavLink>
					<NavLink to={`${match.url}/nofound`} activeStyle={{color:'red'}} className="btn-my-o mr20">nofound</NavLink>
				</div>
				
				{/* 配置一级路由 */}
				{/* 不能有 Switch */}
				{
					routes.map((route,index)=> <RouteWithSubRoutes key={index} {...route} />)
				}
			</div>
		)
	}
}

export default connect(RouterManyComponent)
