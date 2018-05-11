/* ======================================  高阶组件 - 属性代理 - 抽象 state ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== Props Proxy （PP）属性代理
const pp = (WrappedComponent) => {
	return class PP extends React.Component {
		state = { value: '默认值' }
		onNameChange(event){
			this.setState({
        		value: event.target.value
      		})
		}
		render() {
			const stateProps = {
				name:{
					value: this.state.value,
          			onChange: this.onNameChange.bind(this)
				}
			}
			return <WrappedComponent {...stateProps} />
		}
	}
}
// ===================================================================== WrappedComponent
const A = props => (
	<div>
		<input {...props.name}/>
	</div>
)

const PComponent = pp(A);
// =====================================================================
class HigherPPState extends React.Component{
	componentDidMount(){
		//console.log(this.refs.C)
	}
	goSelf(){
		this.props.$action.getCode('views/react/component-higher/pp/higher-pp-state.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>高阶组件-属性代理-抽象 state </button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>抽象 state</dt>
		        		<dd><b>&lt;input ｛...props.name｝/&gt;</b> input 上如果有 ｛...props.name｝, 就无法输入内容</dd>
		        		<dd><b>&lt;input ｛...props.name｝/&gt;</b> === <b>&lt;input value=｛props.name.value｝onChange=｛props.name.onChange｝/&gt;</b></dd>
			        </dl>
				</div>
				
				<PComponent/>
			</div>
		)
	}
}

export default connect(HigherPPState)