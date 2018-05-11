/* ======================================  高阶组件  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 反向继承（Inheritance Inversion II）基本格式
/*
	const II = (WrappedComponent) => {
		return class II extends WrappedComponent {
			render() {
				return super.render()
			}
		}
	}
*/
// =====================================================================
class HigherBase extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/higher-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件基本格式</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>什么是高阶组件:</dt>
		        		<dd>高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件</dd>
		        		<dd>高阶组件就是一个没有副作用的纯函数</dd>
			        </dl>
					<dl className="mvvm-list samebox">
		        		<dt>高阶组件用处:</dt>
		        		<dd>代码复用，逻辑抽象，抽离底层准备（bootstrap）代码</dd>
		        		<dd>渲染劫持</dd>
		        		<dd>State 抽象和更改</dd>
		        		<dd>Props 更改</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>W: React.Component => E: React.Component:</dt>
		        		<dd><b>W ==  return &lt;WrappedComponent ｛...this.props｝/&gt;</b> 被包装的 React.Component</dd>
		        		<dd><b>E ==  class PP extends React.Component｛｝</b> 返回的新的高阶 React 组件</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>高阶组件工厂的实现两种主流方法:</dt>
		        		<dd>属性代理（Props Proxy PP）：高阶组件操控传递给 WrappedComponent 的 props</dd>
		        		<dd>反向继承（Inheritance Inversion II）：高阶组件继承（extends）WrappedComponent</dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(HigherBase)