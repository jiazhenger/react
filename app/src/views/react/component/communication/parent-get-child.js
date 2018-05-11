/* ======================================  父取子  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 
class A extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			child : '这是子组件的默认值'
		}
	}
	componentDidMount(){
		// 将子组件变量传到父函数中去处理
		this.props.change(this.state.child);
	}
	play(){
		alert('这是子组件的方法')
	}
	changeState(){
		this.setState({ child : '通过子组件方法来改变子组件 state' });
	}
	render(){
		return(
			<div className="samebox mt10">
				<h3 className="f16 mb10" style={{color:'green'}}>这是子组件</h3>
				<div style={{color:'blue'}}>{this.state.child}</div>
			</div>
		)
	}
}
// =====================================================================
class ParentGetChild extends React.Component{
	constructor(props){
		super(props);
		this.state = { }
	}
	componentDidMount(){
		this.getChildState()
	}
	getChildState(){
		setTimeout(()=>{
			this.setState({ child : this.refs.A.state.child })
		})
	}
	// 子组件调用此函数来传递变量
	callHanndle(v){
		this.setState({
			my : v
		})
		
		return v;
	}
	
	changeChildState(){
		this.refs.A.setState({
			child: '父组件调用方法改变 state 值'
		});
		this.getChildState();
	}
	
	goSelf(){
		this.props.$action.getCode('views/react/component/communication/parent-get-child.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>子取父</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>呼叫函数父取子值: </dt>
		        		<dd><b>&lt;A change=｛(v)=>｛this.callHanndle(v)｝｝ /&gt;</b> 父组件函数获取子组件变量</dd>
		        		<dd><b>this.props.change(this.state.child);</b>：将子组件的变量传递给父组件函数</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox">
						<h3>ref 获取子组件:</h3>
						<dd><b>&lt;A ref="A" /&gt;</b> 标记子组件名称</dd>
						<dd><b>this.child = this.refs.A.state.child；｛ this.child ｝</b> ：调用子组件属性, 不能直接使用 <b>｛this.refs.A.state.child｝</b>，state 不存在</dd>
						<dd><b>onClick=｛( )=>｛this.refs.A.play( )｝｝</b> ：调用子组件方法</dd>
					</dl>
					<dl className="mvvm-list samebox">
						<h3>ref 修改子组件 state:</h3>
						<dd><b>&lt;A ref="A" /&gt;</b> 标记子组件名称</dd>
						<dd><b>onClick=｛( )=>｛this.changeChildState.bind(this)｝｝</b> ：父组件调用方法(<b>changeChildState()｛this.refs.A.setState(｛｝)｝</b>)改变 state 值 </dd>
						<dd><b>onClick=｛( )=>｛( ) => ｛this.refs.A.setState(｛｝)｝｝｝</b> ：父组件直接改变子组件 state 值</dd>
						<dd><b>onClick=｛( )=>｛( ) => ｛this.refs.A.changeState()｝｝｝</b> ：父组件调用子组件方法(<b>changeState()｛this.setState(｛｝)｝</b>)改变 state 值</dd>
					</dl>
				</div>
			
				<div className="samebox mt10">
					<h3 className="f16 mb10" style={{color:'green'}}>这是父组件取子组件的值：</h3>
					<div style={{color:'blue'}}>{this.state.my}</div>
					<div style={{color:'blue'}}>{this.state.child}</div>
				</div>
				
				<A change={(v)=>{this.callHanndle(v)}} ref="A" {...this} />
				
				<div className="samebox mt10">
					<button className="btn-my-o mt20 mr20" onClick={()=>{this.refs.A.play()}}>获取子取件方法</button>
					<button className="btn-my-o mt20 mr20" onClick={this.changeChildState.bind(this)}>父组件调用方法改变 state 值</button>
					<button className="btn-my-o mt20 mr20" onClick={()=>{
							this.refs.A.setState({child: '父组件直接改变子组件 state 值'});
							this.getChildState();
					}}>父组件直接改变 state 值</button>
					<button className="btn-my-o mt20 mr20" onClick={()=>{this.refs.A.changeState()}}>父组件调用子组件方法改变 state 值</button>
				</div>
			</div>
			
		)
	}
}

export default connect(ParentGetChild)
