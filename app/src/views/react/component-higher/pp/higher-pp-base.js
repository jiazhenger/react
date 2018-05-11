/* ======================================  高阶组件-属性代理  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 属性代理（Props Proxy PP）基本格式
/*
	const PP = (WrappedComponent) => {
		return class PP extends React.Component {
			render() {
				return <WrappedComponent {...this.props}/>
			}
		}
	}
*/
// =====================================================================
class HigherPP extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/pp/higher-pp-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-属性代理</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>属性代理（Props Proxy PP）：高阶组件操控传递给 WrappedComponent 的 props:</dt>
		        		<dd>更改 props</dd>
		        		<dd>通过 refs 获取组件实例</dd>
		        		<dd>抽象 state</dd>
		        		<dd>把 WrappedComponent 与其它 elements 包装在一起</dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(HigherPP)