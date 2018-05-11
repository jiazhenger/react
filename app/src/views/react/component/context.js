/* ====================================== context 数据传递  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import PropTypes from 'prop-types';
// ===================================================================== 子组件
class A extends React.Component {
	static contextTypes = { test: PropTypes.string }	// 定义 context 接收变量的数据类型
	static propTypes = { text: PropTypes.string }		// 定义 props 接收变量的数据类型
	render(){
		return (
			<div className="samebox mt10 lh30">
				<h3>子组件</h3>
				<div style={{color:'blue'}}>{this.context.test}</div>
				<div style={{color:'brown'}}>{this.props.text}</div>
				<B/>
			</div>
		)
	}
}
//A.contextTypes = { test:PropTypes.string }

class B extends React.Component {
	//static contextTypes = { test: PropTypes.string }
	render(){
		return (
			<div>
				<h3>孙组件</h3>
				<div style={{color:'purple'}}>{this.context.test}</div>
			</div>
		)
	}
}
B.contextTypes = { test:PropTypes.string }
// =====================================================================
class Context extends React.Component {
	static childContextTypes = { test: PropTypes.string }	// context
	
	getChildContext() {
		return { test: "context 在父组件的数据" };
	}
	
	goSelf(){
		this.props.$action.getCode('views/react/component/context.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>context 数据传递</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>context 数据传递</dt>
		        		<dd>可以实现跨级传递数据</dd>
		        		<dd>不要更新 Context</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>父组件:</dt>
		        		<dd><b>static childContextTypes = ｛ test: PropTypes.string ｝</b>: 在父组件声明要传递到子组件的变量的数据类型</dd>
		        		<dd><b>getChildContext()｛ return ｛ test:'' ｝｝</b>: 定义要传递到子组件的的数据</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>子组件与孙组件:</dt>
		        		<dd><b>static contextTypes = ｛ test: PropTypes.string ｝</b>: 在子组件声明要接收变量的数据类型</dd>
		        		<dd><b>｛ this.context.test ｝</b>: 插值绑定</dd>
			        </dl>
				</div>
				
				<A text="定义 props 接收变量的数据类型"/>
			</div>
		)
	}
}

//Context.childContextTypes = { test: PropTypes.string }

export default connect(Context)
