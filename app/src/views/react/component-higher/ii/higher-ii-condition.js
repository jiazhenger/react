/* ======================================  高阶组件-反向继承-渲染劫持-条件渲染 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Inheritance Inversion（II）属性代理
const ii = (WrappedComponent) => {
	return class II extends WrappedComponent {
		render() {
			// 条件渲染
			if(this.props.loggedIn){
				return super.render()
			}else{
				return <div className="samebox mt10" style={{color:'blue'}}>未登录</div>
			}
		}
	}
}
// ===================================================================== WrappedComponent
class A extends React.Component{
	state = { a:0, b:1 }
	render(){
		return <div className="samebox mt10">登录</div>
	}
}

const IComponent = ii(A);
// =====================================================================
class HigherIICondition extends React.Component{
	constructor(props){
		super(props);
		this.state = { }
	}
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/ii/higher-ii-condition.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-反向继承-渲染劫持-条件渲染</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>渲染劫持-条件渲染：</dt>
			        </dl>
				</div>
				
				<IComponent loggedIn={this.state.login} ref="C" />
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={()=>{this.setState({login:!this.state.login})}}>渲染劫持</button>
				</div>
			</div>
		)
	}
}

export default connect(HigherIICondition)