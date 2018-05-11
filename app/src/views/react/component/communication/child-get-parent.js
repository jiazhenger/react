/* ======================================  子取父  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 
class A extends React.Component{
	render(){
		return(
			<div className="samebox mt10 lh26">
				<h3 className="f16 mb10" style={{color:'green'}}>子组件：</h3>
				<h5 style={{color:'blue'}}>{this.props.name}</h5>
				<h5 style={{color:'blue'}}>{this.props.state.msg}</h5>
				<button className="btn-my-o mt20 mr20" onClick={this.props.run1}>子取父无参数方法</button>
				<button className="btn-my-o mt20 mr20" onClick={this.props.run2.bind(this,'子取父带参数方法')}>子取父有参数方法</button>
				<button className="btn-my-o mt20 mr20" onClick={this.props.change.bind(this,'子组件改变了父组件的 state')}>子组件改变父组件的 state 中某个属性</button>
				<button className="btn-my-o mt20 mr20" onClick={this.props.change2.bind(this,{msg:'子组件改变父组件的所有 state'})}>子组件改变父组件的所有 state</button>
			</div>
		)
	}
}
// =====================================================================
class ChildGetParent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			msg : '这是父组件的默认值'
		}
	}
	play1(){
		alert('这是父组件的事件')
	}
	play2(v){
		alert(v)
	}
	changeState(v){
		this.setState({
			msg: v
		})
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/communication/child-get-parent.js');
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
		        		<dt>传递变量</dt>
		        		<dd><b>&lt;A name=｛this.state.msg｝ state=｛this.state｝parent=｛this｝｛...props｝｛...this｝/&gt;</b>：父组件赋值, 只能将父组件对象属性全部传过去, 不能将方法传递过去</dd>
		        		<dd><b>｛props.name｝｛parent.state.name｝｛props.state.name｝</b>：子组件取值</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>传递无参数方法</dt>
		        		<dd><b>&lt;A run=｛this.play｝/&gt;</b>：父组件赋方法，此方式不能改变父组件的 state</dd>
		        		<dd><b>onClick=｛props.run｝;</b>：子组件调用父组件无参数方法</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>传递有参数方法</dt>
		        		<dd><b>&lt;A run=｛this.play｝/&gt;</b>：父组件赋方法，此方式不能改变父组件的 state</dd>
		        		<dd><b>onClick=｛props.run.bind(this,'a','b')｝</b>：子组件调用父组件带参数方法</dd>
			        </dl>
				
					<dl className="mvvm-list samebox mt10">
		        		<dt>调用父组件的方法改变父组件 state 中某个属性</dt>
		        		<dd><b>&lt;A change=｛v => ｛this.changeState(v)｝｝/&gt;</b> === <b>&lt;A change=｛v => ｛this.setState(｛msg:v｝)｝｝/&gt;</b>： 必须采用此方式，子组件才能改变父组件的 state</dd>
		        		<dd><b>onClick=｛props.change.bind(this,'')｝</b>： 修改 state 对象中某个属性</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>调用父组件的方法改变父组件 state 整个对象</dt>
		        		<dd><b>&lt;A change=｛state => ｛this.setState(state)｝｝/&gt;</b>： 修改整个 state 对象</dd>
		        		<dd><b>onClick=｛props.change.bind(this,｛msg:'',name:''｝)｝</b>： 修改整个 state 对象</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>注意: </dt>
		        		<dd><b>&lt;A name=｛｝run=｛｝｛...props｝｛...this｝/&gt;</b>：子组件上绑定的属性，都会绑定到子组件的 <b>props=｛｝</b> 对象上</dd>
		        		<dd>子组件的 props 会自动继承父组件 props 中的 ｛ history, location, match｝对象, 其它则不继承, 需要手动传递</dd>
			        </dl>
				</div>
				
				<div className="samebox mt10">
					<h3 className="f16 mb10" style={{color:'green'}}>这是父组件的默认值：</h3>
					<div style={{color:'blue'}}>{this.state.msg}</div>
				</div>
				
				<A 
					name={this.state.msg} parent={this} {...this}
					run1={this.play1} 
					run2={this.play2}
					change={ v => { this.changeState(v) }}
					change2={ state => { this.setState(state) }}
				/>
				
			</div>
			
		)
	}
}

export default connect(ChildGetParent)
