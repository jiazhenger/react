/* ====================================== 路由监听  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterListen extends React.Component {
	componentDidMount(){
		// 监听路由变化
		//this.context.router.history.listen((location)=>{ console.log(location) })
		//this.props.history.listen((location)=>{ console.log(location) })
	}
	goSelf(){
		this.props.$action.getCode('views/react/router/router-listen.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>路由监听</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>路由监听:</dt>
		        		<dd><b>this.props.history.history.listen((location,action)=>｛ console.log(location) ｝)</b></dd>
		        		<dd><b>this.context.router.history.listen((location,action)=>｛ console.log(location) ｝)</b></dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(RouterListen)
