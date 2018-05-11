/* ====================================== 获取必选参数  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import F from '@common/global/methods';
// =====================================================================
class RouterParam extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-nav/router-param.js');
		this.props.history.push('/code');
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>获取必选参数</button>
					<button className="btn-my-default mr20" onClick={()=>{this.props.history.goBack()}}>后退</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
		        	<dl className="mvvm-list samebox">
			        	<dt>获取必选参数: </dt>
			        	<dd><b>this.props.match.params.id</b> = <s>{this.props.match.params.id}</s></dd>
			        	<dd><b>this.context.router.match.params.id</b> = <s>{this.props.match.params.id}</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>获取可选参数 location 对象: </dt>
			        	<dd><b>this.props.location</b> = <s>{JSON.stringify(this.props.location)}</s></dd>
			        	<dd><b>this.props.history.location</b> = <s>{JSON.stringify(this.props.history.location)}</s></dd>
			        	<dd><b>this.context.router.history.location</b> = <s>{JSON.stringify(this.context.router.history.location)}</s></dd>
			        	<dd><b>this.context.router.route.location</b> = <s>{JSON.stringify(this.context.router.route.location)}</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox">
			        	<dt>单独获取 location 属性: </dt>
			        	<dd><b>this.props.location.pathname</b> = <s>{this.props.location.pathname}</s></dd>
			        	<dd><b>this.props.location.search</b> = <s>{JSON.stringify(F.data(this.props.location.search))}</s></dd>
			        	<dd><b>this.props.location.hash</b> = <s>{this.props.location.hash}</s></dd>
			        	<dd><b>this.props.location.state</b> = <s>{JSON.stringify(this.props.location.state)}</s></dd>
			        </dl>
		        </div>
			</div>
		)
	}
}

export default connect(RouterParam)
