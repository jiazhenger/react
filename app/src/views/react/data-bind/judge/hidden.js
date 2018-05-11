/* ======================================  hidden 判断显示隐藏模板  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class Hidden extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			condition : true
        }
	}
	change(){
		this.setState({condition: !this.state.condition})
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/judge/hidden.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>hidden 判断显示隐藏模板</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>hidden 属性判断显示隐藏模板(注: hidden 是 html5 属性, 不是指令):</dt>
		        		<dd>&lt;div <b>hidden=｛this.state.condition｝</b>&gt;</dd>
		        		<dd>&lt;div <b>hidden</b>&gt; 单独使用时,为 true</dd>
			        </dl>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.change.bind(this)}>显示模板</button>
				</div>
				
				<div hidden={this.state.condition} className="samebox">为真时显示</div>
				<div hidden={!this.state.condition} className="samebox">为假时显示</div>
			</div>
		)
	}
}

export default connect(Hidden)
