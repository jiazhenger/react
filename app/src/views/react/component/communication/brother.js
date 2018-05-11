/* ======================================  兄弟组件通信  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 
class A extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			A : '这是组件 A 的值'
		}
	}
	componentDidMount(){
		// 将子组件变量传到父函数中去处理
		this.props.getVal(this.state.A);
	}
	render(){
		return(
			<div className="samebox mt10">
				<h3 className="f16 mb10" style={{color:'green'}}>这是子组件A</h3>
				<div style={{color:'blue'}}>{this.props.a}</div>
			</div>
		)
	}
}
class B extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			B : '这是组件 B 的值'
		}
	}
	render(){
		return(
			<div className="samebox mt10">
				<h3 className="f16 mb10" style={{color:'green'}}>这是子组件B</h3>
				<div style={{color:'blue'}}>{this.props.b}</div>
			</div>
		)
	}
}
// =====================================================================
class Brother extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	componentDidMount(){
		this.getChildState()
	}
	getChildState(){
		this.setState({ b : this.refs.B.state.B })
	}
	handle(v){
		this.setState({
			a : v
		})
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/communication/brother.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>兄弟组件通信</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>兄弟组件通信: </dt>
		        		<dd>首先：兄弟组件向父组件通信</dd>
		        		<dd>然后：父组件再向子组件通信</dd>
			        </dl>
				</div>
				
				<div className="samebox mt10">
					<h3 className="f16 mb10" style={{color:'green'}}>父组件取子组件的值：</h3>
					<div style={{color:'blue'}}>{this.state.a}</div>
					<div style={{color:'blue'}}>{this.state.b}</div>
				</div>
				
				<A getVal={(v)=>this.handle(v)} a={this.state.b} />
				<B b={this.state.a} ref="B" />
			</div>
		)
	}
}

export default connect(Brother)
