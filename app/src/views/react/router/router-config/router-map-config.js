/* ====================================== map 循环配置路由  ====================================== */
import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'; 
import connect from '@redux/connect';
// ===================================================================== 路由数组
const routes = [
	{
		path : '/home',
		cpt: () => <h2 className="samebox mb10">一心一意</h2>,
		name: 'Home'
	},
	{
		path : '/about',
		cpt: () => <h2 className="samebox mb10">仁义之师</h2>,
		name: 'About'
	},
	{
		path : '/news',
		cpt: () => <h2 className="samebox mb10">两小无猜</h2>,
		name: 'News'
	}
]
// =====================================================================
class RouterManyComponent extends React.Component {
	goComponent(){
		this.props.$action.getCode('views/react/router/router-config/router-map-config.js');
		this.props.history.push('/code')
	}
	render(){
		let { match } = this.props;
		return (
			<div>
				<div className="samebox mb10">
					<button className="btn-my-default mr20" onClick={this.goComponent.bind(this)}>map 循环配置路由</button>
				</div>
				
				<div className="samebox">
					{
						routes.map((route,index)=>
							<NavLink key={index} to={`${match.url}${route.path}`} activeStyle={{color:'red'}} className="btn-my-o mr20">{route.name}</NavLink>
						)
					}
					<NavLink to={`${match.url}/nofound`} activeStyle={{color:'red'}} className="btn-my-o mr20">nofound</NavLink>
				</div>
				{/* 使用组件一 */}
				<Route render={ ({match}) =>(
					<Switch>
						{
							routes.map((route,index)=>
								<Route
									key={index}
									path={`${match.url}${route.path}`}
									component={route.cpt} 
									exact={true}
								/>
							)
						}
						<Redirect from={match.url} to={`${match.url}/home`} exact />
						<Route render={()=><div className="samebox">404</div>} />
					</Switch>
				) } />
			</div>
		)
	}
}

export default connect(RouterManyComponent)
