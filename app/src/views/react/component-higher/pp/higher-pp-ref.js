/* ======================================  高阶组件-属性代理 - 通过 refs 获取组件实例 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Props Proxy （PP）属性代理
const pp = (WrappedComponent) => {
	return class PP extends React.Component {
		proc(a) {
			// 此处无法使用 this.setState()
			console.log(a)
		}
		render() {
			const refProps = { 
				ref: this.proc.bind(this,'默认执行函数') 	// this.props.n(), 
			}
			const methodProps = {
				m:()=>{alert('属性代理上的')}, 								// this.m()
				n: this.proc.bind(this,'添加到子组件上的方法') 	// this.props.n()
			}
			// 合并 props
			const contactProps = Object.assign({}, refProps, methodProps)
			
			return <WrappedComponent {...contactProps} />
		}
	}
}
// ===================================================================== WrappedComponent
class A extends React.Component{
	render(){
		return (
			<div className="samebox mt10">
				<button className="btn-my-o mr20" onClick={this.props.m.bind(this)}>获取属性代理上的方法</button>
				<button className="btn-my-o mr20" onClick={this.props.n}>调用添加到子组件上的方法</button>
			</div>
		)
	}
}
// ===================================================================== 返回高阶组件
const PComponent = pp(A);
// =====================================================================
class HigherPPRef extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/pp/higher-pp-ref.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-属性代理 - 通过 refs 获取组件实例</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>通过 refs 获取组件实例</dt>
			        </dl>
				</div>
				<PComponent/>
			</div>
		)
	}
}

export default connect(HigherPPRef)