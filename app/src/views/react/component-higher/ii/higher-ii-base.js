/* ======================================  高阶组件-反向继承  ====================================== */
import React from 'react';
//import { withRouter } from 'react-router-dom';
import connect from '@redux/connect';
// ===================================================================== 反向继承（Inheritance Inversion II）基本格式
/*
	const ii = (WrappedComponent) => {
		return class II extends WrappedComponent {
			render() {
				return super.render()
			}
		}
	}
*/
// =====================================================================
class HigherII extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/ii/higher-ii-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-反向继承</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>反向继承（Inheritance Inversion II）：</dt>
		        		<dd>与属性代理相反, <b>II</b> 继承了 <b>WrappedComponent</b></dd>
		        		<dd>反向继承允许高阶组件通过 this 关键词获取 WrappedComponent，意味着它可以获取到 state，props，组件生命周期（component lifecycle）钩子，以及渲染方法（render）</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>反向继承用处：</dt>
		        		<dd>渲染劫持（Render Highjacking）</dd>
		        		<dd>操作 state</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>渲染劫持（Render Highjacking）：</dt>
		        		<dt>渲染指的是  <b>WrappedComponent.render()</b> 方法</dt>
		        		<dt>高阶组件控制了 WrappedComponent 生成的渲染结果，并且可以做各种操作, 可以：</dt>
		        		<dd>读取、添加、修改、删除任何一个将被渲染的  React Element 的  props</dd>
		        		<dd>在渲染方法中读取或更改 React Elements tree，也就是 WrappedComponent 的 children</dd>
		        		<dd>根据条件不同，选择性的渲染子树</dd>
		        		<dd>给子树里的元素变更样式</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>注意：</dt>
		        		<dd>无法更改或创建 props 给 WrappedComponent 实例，因为 React 不允许变更一个组件收到的 props，但是你可以在 render 方法里更改子元素/子组件们的 props</dd>
		        		<dd>通过反向继承，只能劫持 WrappedComponent 渲染的元素，这意味着如果 WrappedComponent 的子元素里有 Function 类型的 React Element，你不能劫持这个元素里面的子元素树的渲染</dd>
			        	<dd>不能通过 Props Proxy 来做渲染劫持</dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(HigherII)