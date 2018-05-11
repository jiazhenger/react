/* ======================================  state 状态  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class StateBase extends React.Component{
	static defaultProps = {
		a:'添加到 props 上的静态属性'
	}
	// 构造函数中声明 state
	constructor(props){
		super(props);
		this.state = { id:0, name:'' }
		this.staticVar = '静态变量'
		this.staticFn = ()=>{ return '静态方法'; }
	}
	//state = { id:0 }	// 直接声明 state
	componentWillMount(){
		//this.state.id = '直接改变';
	}
	componentDidMount(){
		this.setState({name:'this.setState() 设置值'});
	}
	goSelf(){
		this.props.$action.getCode('views/react/state/state-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>state 状态</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>state(状态):只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）</dt>
		        		<dd><b>this.setState(｛id:1｝)</b>：更改 state 状态</dd>
		        		<dd><b>this.state.id = 1 </b>：在 <b>componentWillMount</b> 中可直接用此方法改变 state 状态，此法有警告</dd>
		        	</dl>
		        	<dl className="mvvm-list samebox">
		        		<dt>props:传递属性(可读不可改)</dt>
		        		<dd><b>static defaultProps = ｛a:0, b:1｝</b>：给 props 添加静态属性</dd>
		        		<dd><b>｛this.props.a｝</b>：props 静态属性使用</dd>
		        	</dl>
				</div>
				
				<div className="samebox mt10 lh30" style={{color:'blue'}}>
					<div>{this.state.name}</div>
					<div>{this.staticVar}</div>
					<div>{this.staticFn()}</div>
				</div>
				
				<div className="samebox mt10" style={{color:'blue'}}>{this.props.a}</div>
			</div>
		)
	}
}

export default connect(StateBase)
