/* ====================================== 静态路由  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterStatic extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-static.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>静态路由</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>&lt;StaticRouter&gt;&lt;/StaticRouter&gt;静态路由: </dt>
		        		<dd><b></b>：<s></s></dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(RouterStatic)
