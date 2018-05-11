/* ======================================  高阶组件-反向继承-操作 state ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Inheritance Inversion（II）属性代理
const II = (WrappedComponent) => {
	return class II extends WrappedComponent {
		componentDidMount(){
			this.setState({a:'改变了 state 的值'})
		}
		render() {
			return(
				<div>
					<h2>调试组件</h2>
					<p>Props</p><pre style={{color:'blue','fontSize':'14px'}}>{JSON.stringify(this.props, null, '\t')}</pre>
					<p>State</p><pre style={{color:'blue','fontSize':'14px'}}>{JSON.stringify(this.state, null, '\t')}</pre>
					{super.render()}
				</div>
			)
		}
	}
}
// ===================================================================== WrappedComponent
class A extends React.Component{
	state = {a:0,b:10}
	render(){
		return <div className="samebox mt10">操作 state</div>
	}
}

const IComponent = II(A);
// =====================================================================
class HigherIIState extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/ii/higher-ii-life.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-反向继承-操作 state</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>操作 state：</dt>
		        		<dd>高阶组件可以 『读取、修改、删除』WrappedComponent 实例的 state，如果需要也可以添加新的 state</dd>
		        		<dd>你在弄乱 WrappedComponent 的 state，可能会导致破坏一些东西</dd>
		        		<dd>通常不建议使用高阶组件来读取或添加 state，添加 state 需要使用命名空间来防止与 WrappedComponent 的 state 冲突</dd>
			        </dl>
				</div>
				
				<IComponent {...this.props} />
			</div>
		)
	}
}

export default connect(HigherIIState)