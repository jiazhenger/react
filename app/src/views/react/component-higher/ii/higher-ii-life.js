/* ======================================  高阶组件-反向继承-获取生命周期 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Inheritance Inversion（II）属性代理
const ii = (WrappedComponent) => {
	return class II extends WrappedComponent {
		componentDidMount(){
			super.componentWillMount(); // 防止破坏 WrappedComponent
		}
		render() {
			return super.render()
		}
	}
}
// ===================================================================== WrappedComponent
class A extends React.Component{
	componentWillMount(){
		console.log('生命周期')
	}
	render(){
		return <div className="samebox mt10">获取生命周期</div>
	}
}

const IComponent = ii(A);
// =====================================================================
class HigherIILife extends React.Component{
	constructor(props){
		super(props);
		this.state = { }
	}
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/ii/higher-ii-life.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-反向继承-获取生命周期</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>获取生命周期：</dt>
			        </dl>
				</div>
				
				<IComponent />
			</div>
		)
	}
}

export default connect(HigherIILife)