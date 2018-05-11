/* ====================================== props 中的路由参数  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterProps extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-props.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>props 中的路由参数</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>props 中的路由参数: </dt>
		        		<dd><b>this.props.history</b> = <s>{JSON.stringify(this.props.history)}</s></dd>
		        		<dd><b>this.props.history.location</b> = <s>{JSON.stringify(this.props.history.location)}</s></dd>
			        	<dd><b>this.props.location</b> = <s>{JSON.stringify(this.props.location)}</s></dd>
			        	<dd><b>this.props.match</b> = <s>{JSON.stringify(this.props.match)}</s> path 为 Route 上的 path，url 为浏览器地址的一部分</dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>context.router 中的路由参数: </dt>
		        		<dd><b>this.context.router.history</b> = <s>{JSON.stringify(this.context.router.history)}</s></dd>
			        	<dd><b>this.context.router.history.location</b> = <s>{JSON.stringify(this.context.router.history.location)}</s></dd>
			        	<dd><b>this.context.router.route.location</b> = <s>{JSON.stringify(this.props.location)}</s></dd>
			        	<dd><b>this.context.router.route.match</b> = <s>{JSON.stringify(this.props.match)}</s> path 为 Route 上的 path，url 为浏览器地址的一部分</dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>this.context.router.history.action: </dt>
		        		<dd><b>POP</b>：刷新进入</dd>
		        		<dd><b>PUSH</b>：链接式导航或命令式导航 push 方法进入</dd>
		        		<dd><b>REPLACE</b>：无历史记录导航 replace 进入 </dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(RouterProps)
