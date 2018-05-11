/* ====================================== 自定义 Route  ====================================== */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import connect from '@redux/connect';
// =====================================================================自定义 Route
const MyRoute = ({cpt:Component, path})=>(
	<Route path={path} render={ props => (
		<Component {...props} />
	)} />
)
const MyComponent = () => (<div className="samebox" style={{'fontSize':'30px'}}>自定义 Route 路由</div>)
// =====================================================================
class RouterMyRoute extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-my-route.js');
		this.props.history.push('/code')
	}
	render(){
		let { match } = this.props;
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>自定义 Route</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>自定义 Route: </dt>
		        		<dd><b>｛cpt:Component｝</b>：声明组件变量</dd>
		        		<dd><b>&lt;Component ｛...props｝ /&gt;</b>：用 Component 来表示组件 cpt，不能直接调用 cpt。props 可省略</dd>
			        </dl>
				</div>
				<div className="samebox">
					<Link to={`${match.url}/my-route`} className="btn-my-o mr20">到自定义 Route</Link>
				</div>
				<MyRoute path={`${match.url}/my-route`} cpt={MyComponent} />
			</div>
		)
	}
}

export default connect(RouterMyRoute)
