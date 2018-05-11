/* ====================================== key 刷新页面  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterRefresh extends React.Component {
	refresh(){
		// 调用任一 redux 中的函数，都会用刷新效果
		// 不知为什么
		this.props.$action.doType('do_refresh');
	}
	goSelf(){
		this.props.$action.getCode('views/react/router/router-refresh.js');
		this.props.history.push('/code')
	}
	goMain(){
		this.props.$action.getCode('views/react/main.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>本组件</button>
					<button className="btn-my-default mr20" onClick={this.goMain.bind(this)}>main.js 配置刷新</button>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>刷新页面: </dt>
			        	<dd><b>&lt;Route component=｛Router｝ key=｛this.props.state.My.key｝ /&gt;</b>：刷新在入口路由配置</dd>
			        	<dd><b>this.props.$action.doType('do_refresh')</b>：改变 redux 值</dd>
			        </dl>
		        </div>
		        
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.refresh.bind(this)}>刷新页面</button>
					{this.props.state.key}
				</div>
			</div>
		)
	}
}

export default connect(RouterRefresh)
