/* ====================================== 获取可选参数  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import F from '@common/global/methods';
// =====================================================================
class RouterQuery extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-nav/router-query.js');
		this.props.history.push('/code');
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>获取可选参数</button>
					<button className="btn-my-default mr20" onClick={()=>{this.context.router.history.goBack()}}>后退</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
		        	<dl className="mvvm-list samebox">
			        	<dt>this.props.location 获取可选参数: </dt>
			        	<dd><b>this.props.location.pathname</b> = <s>{this.props.location.pathname}</s></dd>
			        	<dd><b>this.props.location.search</b> = <s>{JSON.stringify(F.data(this.props.location.search))}</s></dd>
			        	<dd><b>this.props.location.hash</b> = <s>{this.props.location.hash}</s></dd>
			        	<dd><b>this.props.location.state</b> = <s>{JSON.stringify(this.props.location.state)}</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox">
			        	<dt>this.props.location 获取可选参数: </dt>
			        	<dd><b>this.props.history.location.pathname</b> = <s>{this.props.history.location.pathname}</s></dd>
			        	<dd><b>this.props.history.location.search</b> = <s>{JSON.stringify(F.data(this.props.history.location.search))}</s></dd>
			        	<dd><b>this.props.history.location.hash</b> = <s>{this.props.history.location.hash}</s></dd>
			        	<dd><b>this.props.history.location.state</b> = <s>{JSON.stringify(this.props.history.location.state)}</s></dd>
			        </dl>
        	        <dl className="mvvm-list samebox mt10">
			        	<dt>this.context.router.history.location 获取可选参数: </dt>
			        	<dd><b>this.context.router.history.location.pathname</b> = <s>{this.context.router.history.location.pathname}</s></dd>
			        	<dd><b>this.context.router.history.location.search</b> = <s>{JSON.stringify(F.data(this.context.router.history.location.search))}</s></dd>
			        	<dd><b>this.context.router.history.location.hash</b> = <s>{this.context.router.history.location.hash}</s></dd>
			        	<dd><b>this.context.router.history.location.state</b> = <s>{JSON.stringify(this.context.router.history.location.state)}</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>this.context.router.route.location 获取可选参数: </dt>
			        	<dd><b>this.context.router.route.location.pathname</b> = <s>{this.context.router.route.location.pathname}</s></dd>
			        	<dd><b>this.context.router.route.location.search</b> = <s>{JSON.stringify(F.data(this.context.router.route.location.search))}</s></dd>
			        	<dd><b>this.context.router.route.location.hash</b> = <s>{this.context.router.route.location.hash}</s></dd>
			        	<dd><b>this.context.router.route.location.state</b> = <s>{JSON.stringify(this.context.router.route.location.state)}</s></dd>
			        </dl>
		        </div>
			</div>
		)
	}
}

export default connect(RouterQuery)
