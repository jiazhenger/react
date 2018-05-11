/* ====================================== 同一个路由使用多个组件  ====================================== */
import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'; 
import connect from '@redux/connect';
// ===================================================================== 路由数组
const routes = [
	{
		path : '/home',
		sidebar : () => <div className="samebox">home! B</div>,
		main: () => <h2 className="samebox">Home A</h2>,
		exact : true
	},
	{
		path : '/about',
		sidebar : () => <div className="samebox">about! B</div>,
		main: () => <h2 className="samebox">About A</h2>
	},
	{
		path : '/news',
		main: () => <h2 className="samebox">News A</h2>
	},
	{
		path : '/contact',
		sidebar: () => <h2 className="samebox">contact B</h2>
	}
]
// =====================================================================
class RouterMapConfig extends React.Component {
	goComponent(){
		this.props.$action.getCode('views/react/router/router-many-component.js');
		this.props.history.push('/code')
	}
	render(){
		let { match } = this.props;
		return (
			<div>
				<div className="samebox mb10">
					<button className="btn-my-default mr20" onClick={this.goComponent.bind(this)}>同一个路由使用多个组件 </button>
				</div>
				
				<div className="samebox">
					{
						routes.map((route,index)=>
							<NavLink key={index} to={`${match.url}${route.path}`} activeStyle={{color:'red'}} replace className="btn-my-o mr20">{route.path}</NavLink>
						)
					}
					<NavLink to={`${match.url}/nofound`} activeStyle={{color:'red'}} className="btn-my-o mr20" replace>nofound</NavLink>
				</div>
				{/* 使用组件一 */}
				<Route render={ ({match}) =>(
					<Switch>
						{
							routes.map((route,index)=>
								<Route
									key={index}
									path={`${match.url}${route.path}`} 
									component={route.main} 
									exact={route.exact}
								/>
							)
						}
						<Redirect from={match.url} to={`${match.url}/home`} exact />
						<Route render={()=><div className="samebox">404</div>} />
					</Switch>
				) } />
				{/* 使用组件二 */}
				<Route render={ ({match}) =>(
					<Switch>
						{
							routes.map((route,index)=>
								<Route
									key={index}
									path={`${match.url}${route.path}`} 
									component={route.sidebar} 
									exact={route.exact}
								/>
							)
						}
					</Switch>
				) } />
			</div>
		)
	}
}
export default connect(RouterMapConfig)
