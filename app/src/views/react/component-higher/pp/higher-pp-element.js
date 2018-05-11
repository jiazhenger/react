/* ======================================  高阶组件 - 属性代理 - 与其它 elements 包装在一起 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Props Proxy （PP）属性代理
const pp = (WrappedComponent) => {
	return class PP extends React.Component {
		render() {
			return (
				<div className="samebox mt10" style={{color:'blue'}}>
					<div>Props Proxy</div>
					<WrappedComponent/>
				</div>
			)
		}
	}
}
// ===================================================================== WrappedComponent
const A = props => <div>与其它 elements 包装在一起</div>
const PComponent = pp(A);
// =====================================================================
class HigherPPSElement extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/pp/higher-pp-element.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-属性代理-与其它 elements 包装在一起 </button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>与其它 elements 包装在一起</dt>
			        </dl>
				</div>
				
				<PComponent/>
			</div>
		)
	}
}

export default connect(HigherPPSElement)