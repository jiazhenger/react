/* ======================================  redux 基础  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class BindBase extends React.Component{
	componentDidMount(){
		console.log(this.props)
	}
	goSelf(){
		this.props.$action.getCode('views/react/react-redux/redux-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>redux 基础</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>redux 基础:</dt>
		        		<dd></dd>
		        	</dl>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={()=>{this.props.$action.prompt('正在加载中...')}}>提示效果</button>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={()=>{this.props.$action.dispatch('do_add')}}>加</button>
					<button className="btn-my-o mr20" onClick={()=>{this.props.$action.doType('do_minus')}}>减</button>
					{this.props.state.Test.num}
				</div>
			</div>
		)
	}
}

export default connect(BindBase)
