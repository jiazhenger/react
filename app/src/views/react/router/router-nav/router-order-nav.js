/* ====================================== 命令式导航  ====================================== */
import React from 'react';
//import PropTypes from 'prop-types'
import connect from '@redux/connect';
// =====================================================================
class RouterOrder extends React.Component {
	// 声明 this.context.router
	//static contextTypes = { router: PropTypes.object.isRequired }

	goSelf(){
		this.props.$action.getCode('views/react/router/router-nav/router-order-nav.js');
		this.props.history.push('/code');
	}
	goConnect(){
		this.props.action.getCode('redux/connect.js');
		this.props.history.push('/code');
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>命令式导航</button>
					<button className="btn-my-default mr20" onClick={this.goConnect.bind(this)}>context.router 在 connect 声明处</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
			        	<dt>this.context.router.history.push 命令式导航声明的三种方式: </dt>
			        	<dt>import PropTypes from 'prop-types';</dt>
			        	<dd><b>static contextTypes = ｛ router: PropTypes.object.isRequired ｝</b>：在组件内部声明</dd>
			        	<dd><b>MyComponent.contextTypes = ｛ router: PropTypes.object.isRequired ｝</b>：在组件外部声明</dd>
			        	<dd><b>Component.contextTypes = ｛ router: PropTypes.object.isRequired ｝</b>：在 connect 连接处声明</dd>
			        </dl>
		        	<dl className="mvvm-list samebox mt10">
			        	<dt>无参数命令式导航: </dt>
			        	<dd><b>this.context.router.history.push('/path',｛id:1,name:'reactjs'｝)</b> == <b>this.props.history.push('/path',｛id:1,name:'reactjs'｝)</b>：一般跳转</dd>
			        	<dd><b>this.context.router.history.push(｛pathname:'',search:'',hash:'',state:｛id:1,name:'reactjs'｝｝)</b> == <b>this.props.history.push(｛pathname:'',search:'',hash:'',state:｛id:1,name:'reactjs'｝｝)</b>：多配置跳转</dd>
			        	<dd><b>this.context.router.history.replace('/path',｛id:1,name:'reactjs'｝)</b> == <b>this.props.history.replace('/path',｛id:1,name:'reactjs'｝)</b>：无历史跳转</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>前进后退导航: </dt>
			        	<dd><b>this.context.router.history.go(n)</b> == <b>this.props.history.go(n)</b> == <b>window.history.go(n)</b>：前进</dd>
			        	<dd><b>this.context.router.history.goBack()</b> == <b>this.props.history.goBack()</b> == <b>window.history.back()</b>：后退，等同于 go(-1)</dd>
			        	<dd><b>this.context.router.history.goForward()</b> == <b>this.props.history.goForward() == <b>window.history.forward()</b></b>：前进，等同于 go(1)</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>无参数模式：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.push('/react/router/router-query')}}>this.props.history.push('/router-query')</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.context.router.history.push('/react/router/router-query')}}>this.context.router.history.push('/router-query')</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>必选参数模式：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.push('/react/router/router-param/800')}}>this.props.history.push('/router-param/800')</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.context.router.history.push('/react/router/router-param/600')}}>this.context.router.history.push('/router-param/600')</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>state 模式：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.push('/react/router/router-param/800',{id:100,name:'reactjs'})}}>this.props.history.push('/router-param/800',｛id:100,name:'reactjs'｝)</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.context.router.history.push('/react/router/router-query',{id:100,name:'reactjs'})}}>this.context.router.history.push('/router-query',｛id:100,name:'reactjs'｝)</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>可选参数模式：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.push('/react/router/router-param/500?id=100&name=reactjs#myHash',{name:'reactjs'})}}>this.props.history.push('/react/router/router-param/500?id=100&name=reactjs#myHash',｛name:'reactjs'｝)</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.context.router.history.push('/react/router/router-query?id=100&name=reactjs#myHash',{name:'react native'})}}>this.context.router.history.push('/react/router/router-query?id=100&name=reactjs#myHash',｛name:'react native'｝)</button></dd>
			        	<dd>
			        		<button className="btn-my-o" onClick={()=>{
			        			this.props.history.push(
			        				{pathname:'/react/router/router-query',search:'?id=600&name=reactjs',hash:'#yourHash',state:{id:500,name:'react'}}
			        			)
			        		}}>
			        		this.props.history.push(｛ pathname:'/react/router/router-query',search:'?id=600&name=reactjs',hash:'#yourHash',state:｛id:500,name:'react'｝｝)
			        		</button>
			        	</dd>
			        	<dd>
			        		<button className="btn-my-o" onClick={()=>{
			        			this.context.router.history.push(
			        				{pathname:'/react/router/router-query',search:'?id=600&name=reactjs',hash:'#yourHash',state:{id:500,name:'react'}}
			        			)
			        		}}>
			        		this.context.router.history.push(｛ pathname:'/react/router/router-query',search:'?id=600&name=reactjs',hash:'#yourHash',state:｛id:500,name:'react'｝｝)
			        		</button>
			        	</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>无历史记录跳转：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.replace('/react/router/router-query')}}>this.props.history.replace('/router-query')</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.context.router.history.replace('/react/router/router-query')}}>this.context.router.history.replace('/router-query')</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>前进跳转：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.goForward()}}>this.props.history.goForward()</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.go(1)}}>this.props.history.go(1)</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{window.history.forward()}}>window.history.forward()</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{window.history.go(1)}}>window.history.go(1)</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>后退跳转：</dt>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.goBack()}}>this.props.history.goBack()</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{this.props.history.go(-1)}}>this.props.history.go(-1)</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{window.history.back()}}>window.history.back()</button></dd>
			        	<dd><button className="btn-my-o" onClick={()=>{window.history.go(-1)}}>window.history.go(-1)</button></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>历史堆栈中的页数：</dt>
			        	<dd><b>window.history.length</b><s>{window.history.length}</s></dd>
			        	<dd><b>this.props.history.length</b><s>{this.props.history.length}</s></dd>
			        	<dd><b>this.context.router.history.length</b><s>{this.context.router.history.length}</s></dd>
			        </dl>
		        </div>
			</div>
		)
	}
}
/* 
 	// 声明 this.context.router
	RouterOrder.contextTypes = { router: PropTypes.object.isRequired }
*/
export default connect(RouterOrder)
