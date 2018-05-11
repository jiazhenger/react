import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterAsync extends React.Component {
	goAsync(){
		this.props.$action.getCode('common/async/async.js');
		this.props.history.push('/code')
	}
	goApp(){
		this.props.$action.getCode('App.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goApp.bind(this)}>顶级路由异步加载</button>
					<button className="btn-my-default" onClick={this.goAsync.bind(this)}>异步加载配置</button>
				</div>
			</div>
		)
	}
}

export default connect(RouterAsync)
