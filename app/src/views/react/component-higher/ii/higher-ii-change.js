/* ======================================  高阶组件-反向继承-渲染劫持-通过 render 来变成 React Elements tree 的结果 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Inheritance Inversion（II）属性代理
const ii = (WrappedComponent) => {
	return class II extends WrappedComponent {
		state = { value: ''}
		render() {
			// 通过 render 来变成 React Elements tree 的结果
			const elementsTree = super.render();
			let newProps = {};
			if (elementsTree && elementsTree.type === 'input') {
				newProps = {
					value: this.state.value,
					placeholder: '请输入值',
					onChange: (event)=>{ this.setState({ value: event.target.value}) }
				}
			}
			const props = Object.assign({}, elementsTree.props, newProps)
			const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)
			return newElementsTree
		}
	}
}
// ===================================================================== WrappedComponent
class C extends React.Component{
	render(){
		return <input />
	}
}

const IComponent = ii(C);
// =====================================================================
class HigherIIChange extends React.Component{
	state = { }
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/ii/higher-ii-change.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-反向继承-渲染劫持-通过 render 来变成 React Elements tree 的结果</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>渲染劫持-通过 render 来变成 React Elements tree 的结果：</dt>
		        		<dd><b>const elementsTree = super.render()</b>：返回 elementsTree 对象</dd>
		        		<dd><b>elementsTree.type</b>：返回组件外层元素的 html 标签</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>React.cloneElement(ReactElement,props(object),children(ReactElement))：</dt>
		        		<dd>克隆并返回一个新的 ReactElement （内部子元素也会跟着克隆），新返回的元素会保留有旧元素的 props、ref、key，也会集成新的 props</dd>
		        		<dd><b>ReactElement</b> 只能是  <b>const elementsTree = super.render()</b></dd>
		        		<dd><b>newProps</b>：新的 props, 一个对象 ｛｝</dd>
		        		<dd><b>children</b>：为 <b>elementsTree.props.children</b> 或  <b>&lt;div&gt;</b> html 模板字符串</dd>
		        		<dt>React.cloneElement(elementsTree=super.render(), props={}, elementsTree.props.children)</dt>
		        		<dt>React.cloneElement(elementsTree=super.render(), props={}, &lt;div&gt;html&lt;/div&gt;)</dt>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>注意：</dt>
		        		<dd>input 元素必须设置  value 与 onChange 两个属性, 不然报错</dd>
			        </dl>
				</div>
				
				<IComponent/>
			</div>
		)
	}
}

export default connect(HigherIIChange)