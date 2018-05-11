/* ======================================  创建组件的方式  ====================================== */
import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import connect from '@redux/connect';
// ===================================================================== 类式创建组件
class A extends React.Component{
	render(){
		return <div className="samebox mt10">类式创建组件1</div>
	}
}
class A1 extends Component{
	// 组件判断是否重新渲染时调用
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		return <div className="samebox mt10">类式创建组件2</div>
	}
}
// ===================================================================== 函数式创建组件
const B = (props,context)=> <div className="samebox mt10 lh26">函数式创建组件1</div>
const B2 = (props,context)=> {
	return (
		<div className="samebox mt10 lh26">函数式创建组件2</div>
	)
}
// ===================================================================== 添加 props 创建方式
const C = withRouter(({ match,location },context)=> (
	<div className="samebox mt10 lh26">
		<h5>函数式 withRouter() 创建组件</h5>
		<div style={{color:'blue'}}>{JSON.stringify(match)}</div>
	</div>
))
// ===================================================================== 对外创建方式
const MyComponent = {
	A(){
		return <div>对象创建组件A</div>
	},
	B(){
		return <div>对象创建组件B</div>
	}
}
// =====================================================================
class Create extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/component/create.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>创建组件的方式</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>一、类式组件(为有状态组件):</dt>
		        		<dd><b>class A extends React.Component｛｝</b>：类式创建组件1</dd>
		        		<dd><b>class A extends Component｛｝</b>：类式创建组件2</dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>二、函数式组件(为无状态组件): </dt>
		        		<dd><b>const B = (props,context)=> &lt;div&gt;</b>：函数式创建组件, props 为一个空对象</dd>
		        		<dd><b>const B = (props,context)=> ｛alert(0);return ( &lt;div&gt; )｝</b>：函数式创建组件2, props 为一个空对象</dd>
		        		<dd><b>const B = withRouter((｛match,location｝,context)=> ( &lt;div&gt; ))</b>：函数式 withRouter() 创建组件，让组件有 props</dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>三、对象式组件: </dt>
		        		<dd><b>const M = ｛A()｛return &lt;div&gt;｝,B()｛return &lt;div&gt;｝｝</b>：对象式创建组件</dd>
		        		<dd><b>&lt;M.A /&gt; &lt;M.B /&gt;</b>：使用组件</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>无状态组件(函数式组件)：</dt>
		        		<dd>无生命周期，无state，组件是一个纯jsx类或者对象</dd>
		        		<dd>无法使用：<b>findDOMNode</b> 和 <b>ref/refs</b> ，无状态组件挂载时只是方法调用，没有新建实例</dd>
		        		<dd>当无状态组件需要使用到生命周期时，可使用高阶组件包装</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>一、单一返回组件内容:</dt>
		        		<dd><b>( ) => (&lt;div&gt;)</b></dd>
		        		<dd><b>( ) => &lt;div&gt;</b></dd>
		        		<dd><b>( ) => return &lt;div&gt;</b></dd>
		        		<dd><b>( ) => return (&lt;div&gt;)</b></dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>二、数组并列返回组件内容:</dt>
		        		<dd><b>( ) => [&lt;div&gt;,(&lt;div&gt;),&lt;div&gt;]</b></dd>
			        </dl>
			         <dl className="mvvm-list samebox mt10">
		        		<dt>组件使用:</dt>
		        		<dd><b>&lt;A /&gt;</b>：一般使用</dd>
		        		<dd><b>&lt;M.A /&gt;</b>：对象组件使用</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>创建组件注意事项:</dt>
		        		<dd>必须以大写字母开头的类型</dd>
			        </dl>
				</div>
				{/* 类式组件 */}
				<A ref="A"/>
				<A1 ref="A1"/>
				{/* 函数组件 */}
				<B/>
				<B2/>
				<C/>
				{/* 对象组件 */}
				<div className="samebox mt10">
					<MyComponent.A />
					<MyComponent.B />
				</div>
			</div>
		)
	}
}

export default connect(Create)
