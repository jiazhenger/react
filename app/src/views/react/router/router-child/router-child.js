import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import connect from '@redux/connect';
// =====================================================================
class RouterChild extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-child/router-child.js');
		this.props.history.push('/code')
	}
	goRouter(){
		this.props.$action.getCode('views/react/router.js');
		this.props.history.push('/code')
	}
	goRoute(){
		this.props.$action.getCode('views/react/main.js');
		this.props.history.push('/code')
	}
	render(){
		let { match } = this.props;
		return (
			<div>
				<div className="samebox mb10">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>子路由分散在当前组件中</button>
				</div>
				<div className="samebox mb10">
					<button className="btn-my-default mr20" onClick={this.goRouter.bind(this)}>子路由集中在外部路由组件中</button>
					<button className="btn-my-default" onClick={this.goRoute.bind(this)}>子路由出口组件</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
			        <dl className="mvvm-list samebox">
			        	<dt>Route  声明子路由的两种方式：</dt>
			        	<dd><b>&lt;Route render = ｛(｛match｝) = > &lt;Switch&gt;&lt;Route/&gt;&lt;Route/&gt;&lt;/Switch&gt;｝</b></dd>
			        	<dd><b>&lt;Route children = ｛(｛match｝) = > &lt;Switch&gt;&lt;Route/&gt;&lt;Route/&gt;&lt;/Switch&gt;｝</b></dd>
			        	<dd><b>&lt;Route/&gt;&lt;Route/&gt;</b>: 在组件内部的子路由可省略 render 或 children</dd>
			        	<dd>有子路由的路由不能设置 <b>exact</b>，否则找不到页面</dd>
			        </dl>
			         <dl className="mvvm-list samebox mt10">
			        	<dt>Route 路由出口，即：组件放置在何处展示, 组件可以是路由集合，也可是模板组件</dt>
			        	<dd><b>&lt;Route component=｛RouterComponent | TemplateComponent｝ /&gt;</b> 相当与 ng 的  outlet-router, vue 的 router-view</dd>
			        </dl>
		        </div>
				
				<div className="samebox mb10">
					<NavLink to={`${match.url}/a`} className="btn-my-o mr20" activeStyle={{color:'red'}}>子组件 A </NavLink>
					<NavLink to={`${match.url}/b`} className="btn-my-o mr20" activeStyle={{color:'red'}}>子组件 B </NavLink>
					<NavLink to={`${match.url}/c`} className="btn-my-o mr20" activeStyle={{color:'red'}}>子组件 C </NavLink>
					<NavLink to={`${match.url}/d`} className="btn-my-o mr20" activeStyle={{color:'red'}}>子组件 404 </NavLink>
				</div>
				{/* 子路由分散在当前组件中 */}
				{/* 默认为当前路由，可省略 path={`${match.url}`} */ }
				<Route children ={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/a`} render={ ()=> <div className="samebox">A 子组件</div> } exact />
						<Route path={`${match.url}/b`} render={ ()=> <div className="samebox">B 子组件</div> } exact />
						<Route path={`${match.url}/c`} render={ ()=> <div className="samebox">C 子组件</div> } exact />
						{/* 跳转到默认路由  */}
						<Redirect from={`${match.url}`} to={`${match.url}/a`} exact />
						{/* 404 路由  */}
						<Route render={()=>(<div className="samebox">路由不存在</div>)} />
					</Switch>
				) } />
			</div>
		)
	}
}
export default connect(RouterChild)
