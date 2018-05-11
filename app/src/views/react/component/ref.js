/* ====================================== 组件中的 ref  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== 子组件
class A extends React.Component{
	state = { a: 1, b:2 }
	reset = () => {
		alert('ref 调用子组件方法')
	}
	render(){
		return <div className="samebox mt10">子组件</div>
	}
}
// =====================================================================
class Ref extends React.Component {
	state = { value:'默认值', value1:'默认值' }
	componentDidMount(){
		console.log(this.refs)
		
		this.refs.my.style.cssText = 'text-decoration:underline;cursor:pointer';
		this.refs.my.style.color = 'blue';
		
		this.refs.my.onmouseenter = function(){
			this.style.color = 'red';
		}
		this.refs.my.onmouseleave = function(){
			this.style.color = 'blue';
		}
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/ref.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>组件中的 ref</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>&lt;A ref="A" /&gt;:</dt>
		        		<dd><b>this.refs.A.state</b>： <button className="btn-my-o ml10" onClick={()=>{this.setState({msg:this.refs.A.state})}}>访问子组件 state</button> <s>{JSON.stringify(this.state.msg)}</s></dd>
		        		<dd><b>this.refs.A.state</b>：访问子组件 props</dd>
		        		<dd><b>this.refs.A.state</b>： <button className="btn-my-o ml10" onClick={()=>{this.refs.A.reset()}}>访问子组件方法</button></dd>
		        		<dd>无状态组件无法设置 ref</dd>
		        		<dd>此处 ref 不能获取 dom</dd>
			        </dl>
			        <A ref="A"/>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>&lt;div ref="A"&gt;: 操作 dom</dt>
		        		<dt>&lt;div ref=｛(id) => this.id = id｝&gt;: 操作 dom</dt>
		        		<dd><b>this.refs.A.style.color='red'</b> == <b>this.id.style.color='red'</b>：访问 dom，相当于 document.getElementById(id)</dd>
		        		<dd><b>this.refs.my.style.cssText='color:red;background:blue'</b> == <b>this.id.style.cssText='color:red;background:blue'</b></dd>
		        		<dd><b>this.refs.my.onclick = function()｛｝</b> == <b>this.id.onclick = function()｛｝</b>: 绑定整件, 注意：绑定的事件全为小写</dd>
			        </dl>
			        <div ref="my" className="samebox mt10">ref 操作 dom</div>
			        
			         <dl className="mvvm-list samebox mt10">
		        		<dt>非受控组件: 即用 ref 来操作 dom</dt>
		        		<dd><b>value=｛this.state.value｝ onChange=｛()=>this.setState(｛ value:this.input.value ｝)｝ ref=｛(input) => this.input = input｝</b>：dom 绑定数据</dd>
		        		<dd><b>value=｛this.state.value1｝ onChange=｛()=>this.setState(｛ value1:this.refs.a.value ｝)｝ ref='a'</b>：dom 绑定数据</dd>
			        </dl>
			        
			        <div><input type="text" onChange={(event) => { this.setState({ value:this.input.value }); console.log(this.input.value) } } ref={(input) => this.input = input } /> {this.state.value}</div>
					<div className="mt10"><input type="text" onChange={(event) => { this.setState({ value1:this.refs.a.value }); console.log(this.refs.a.value) } } ref='a' /> {this.state.value1}</div>
				</div>
			</div>
		)
	}
}

export default connect(Ref)
