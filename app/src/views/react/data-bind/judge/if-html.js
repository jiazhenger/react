/* ======================================  模板内三元运算判断显示模块  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== html 内三元运算符条件判断
class IfHtml extends React.Component{
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
		this.props.$action.getCode('views/react/data-bind/judge/if-html.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>模板内三元运算判断显示模块</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>模板内三元运算判断显示模块:</dt>
		        		<dd><b>｛ this.state.condition ? &lt;div&gt;为真时显示&lt;/div&gt; : &lt;div&gt;为假显示&lt;/div&gt; ｝</b></dd>
		        		<dd><b>｛ this.state.condition ? (&lt;div&gt;为真时显示&lt;/div&gt;) : (&lt;div&gt;为假显示&lt;/div&gt;) ｝</b></dd>
			        </dl>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.change.bind(this)}>显示模板</button>
				</div>
				
				<div className="samebox">{ this.state.condition ? <div>为真时显示</div> : <div>为假显示</div> }</div>
				
				<div className="samebox">{ this.state.condition ? (<div>为真时显示</div>) : (<div>为假显示</div>) }</div>
			</div>
		)
	}
}

export default connect(IfHtml)
