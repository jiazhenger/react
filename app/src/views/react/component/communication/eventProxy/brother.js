/* ======================================  观察者模式兄弟组件通信  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import eventProxy from './eventProxy';
// ===================================================================== 
class A extends React.Component{
	state = {
		A : '这是组件 A 的值'
	}
	componentDidMount(){
		// 发布 myEvent 事件
		eventProxy.publish('myEvent', this.state.A)
		// 监听/订阅  bEvent 事件
		eventProxy.on('bEvent', (v) => {this.setState({ x: v });});
		
		eventProxy.on('sEvent', (v1,v2) => {
			this.setState({ m: v1, n: v2 })
		});
	}
	render(){
		return(
			<div className="samebox mt10">
				<h3 className="f16 mb10" style={{color:'green'}}>这是子组件A</h3>
				<div style={{color:'blue'}}>{this.state.x}</div>
				<div style={{color:'pink'}}>{this.state.m}</div>
				<div style={{color:'pink'}}>{this.state.n}</div>
			</div>
		)
	}
}
class B extends React.Component{
	state = {
		B : '这是组件 B 的值'
	}
	componentDidMount(){
		// 监听/订阅 myEvent 事件
		eventProxy.on('myEvent', (v) => {this.setState({ x: v });});
		// 发布 bEvent 事件
		eventProxy.publish('bEvent', 'B组件发布的对象1', 'B组件发布的对象2')
	}
	render(){
		return(
			<div className="samebox mt10">
				<h3 className="f16 mb10" style={{color:'green'}}>这是子组件B</h3>
				<div style={{color:'blue'}}>{this.state.x}</div>
				<button className="btn-my-default mr20" onClick={()=>{
					eventProxy.publish('bEvent', 'B组件发布的对象1改变', 'B组件发布的对象2改变')
				}}>改变子组件的值</button>
			</div>
		)
	}
}
// =====================================================================
class EventProxyBrother extends React.Component{
	state={
		m:'父组件的值'
	}
	componentDidMount(){
		// 监听/订阅 myEvent 事件
		eventProxy.on('myEvent', (v) => {this.setState({ a: v });});
		// 监听/订阅  bEvent 事件
		eventProxy.on('bEvent', (v1,v2) => {
			this.setState({ x: v1, y: v2 })
		});
		// 发布事件
		eventProxy.publish('sEvent', '父组件发布的对象1', '父组件发布的对象2')
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/communication/eventProxy/brother.js');
		this.props.history.push('/code')
	}
	goEventProxy(){
		this.props.$action.getCode('views/react/component/communication/eventProxy/eventProxy.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>观察者模式兄弟组件通信</button>
					<button className="btn-my-default mr20" onClick={this.goEventProxy.bind(this)}>观察者模式 eventProxy.js</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>观察者模式兄弟组件通信: (监听发布的参数,再带入到监听函数中处理)</dt>
		        		<dt>eventProxy 把设置的通信值全部绑定到 eventProxy.Class 对象上,然后统一处理</dt>
		        		<dd><b>eventProxy.publish('myEvent', a,b,c)</b>: 后发布一个事件</dd>
		        		<dd><b>eventProxy.on('myEvent', (a,b,c) => ｛this.setState(｛ x: a,y:b, z:c ｝)｝)</b>: 先监听/订阅一个事件</dd>
			        </dl>
				</div>
				
				<div className="samebox mt10">
					<h3 className="f16 mb10" style={{color:'green'}}>父组件取子组件的值：</h3>
					<div style={{color:'blue'}}>{this.state.a}</div>
					<div style={{color:'brown'}}>{this.state.x}</div>
					<div style={{color:'brown'}}>{this.state.y}</div>
					<button className="btn-my-default mr20" onClick={()=>{
						eventProxy.publish('sEvent', '父组件发布的对象1改变', '父组件发布的对象2改变')
					}}>改变父组件的值</button>
				</div>
				
				<A/>
				<B/>
				
				
			</div>
		)
	}
}

export default connect(EventProxyBrother)
