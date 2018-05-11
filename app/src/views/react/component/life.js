/* ======================================  组件生命周期  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class Life extends React.Component{
	// 组件即将插入真实 DOM
	componentWillMount(){
		console.log('组件即将插入真实 DOM')
	}
	// 组件已插入真实 DOM
	componentDidMount(){
		console.log('组件已插入真实 DOM')
	}
	// 组件即将被移出真实 DOM
	componentWillUnmount(){
		console.log('组件即将被移出真实 DOM')
	}
	// 组件即将被重新渲染
	componentWillUpdate(nextProps, nextState){
		console.log('组件即将被重新渲染')
	}
	// 组件被重新渲染
	componentDidUpdate(nextProps, nextState){
		console.log('组件被重新渲染')
	}
	// 已加载组件收到新的参数时调用
	componentWillReceiveProps(nextProps){
		console.log('已加载组件收到新的参数时调用')
	}
	// 组件判断是否重新渲染时调用，默认返回true，用于优化：避免不必要的render
	// 表示需要重新执行render方法并使用其返回的结果作为新的Virtual DOM节点。
	// 通过实现这个方法，并在合适的时候返回false，告诉React可以不用重新执行render，而是使用原有的Virtual DOM 节点，这是最常用的避免render的手段，这一方式也常被很形象地称为“短路”（short circuit）
	shouldComponentUpdate(nextProps, nextState){
		console.log('组件判断是否重新渲染时调用')
		return true
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/life.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>组件生命周期</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt><b>componentWillMount()</b>: 组件即将插入真实 DOM</dt>
		        		<dd>此方法会在完成首次渲染之前被调用。这也是在render方法调用前可以修改组件state的最后一次机会</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>componentDidMount()</b>: 组件已插入真实 DOM</dt>
		        		<dd>该方法发生在render方法成功调用并且真实的DOM已经被渲染之后</dd>
		        		<dd>在该函数内部可以通过 <b>this.getDOMNode()</b> 来获取当前组件的节点。然后就可以像Web开发中的那样操作里面的DOM元素了</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>componentWillUpdate(nextProps, nextState)</b>: 组件即将被重新渲染</dt>
		        		<dd>与componentWillMount方法类似，组件上会接收到新的props或者state渲染之前，调用该方法。但是不可以在该方法中更新state和props</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>componentDidUpdate(nextProps, nextState)</b>: 组组件被重新渲染</dt>
		        		<dd>与componentDidMount类似，更新已经渲染好的DOM</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>componentWillReceiveProps(nextProps)</b>: 已加载组件收到新的参数时调用</dt>
		        		<dd>在任意时刻，组件的props都可以通过父辈组件来更改</dd>
		        		<dd>当组件接收到新的props(这里不同于state）时，会触发该函数，我们同时也获得更改props对象及更新state的机会</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>shouldComponentUpdate(nextProps, nextState)</b>: 组件判断是否重新渲染时调用</dt>
		        		<dd>该方法用来拦截新的props和state，然后开发者可以根据自己设定逻辑，做出要不要更新render的决定，让它更快</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt><b>componentWillUnmount()</b>: 在组件被移出之前被调用</dt>
		        		<dd>在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如说创建的定时器或者添加的事件监听等</dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox">
		        		<dt><b>render()</b>:</dt>
		        		<dd>生成页面需要的虚拟DOM结构，用来表示组件的输出。render方法需要满足：</dd>
		        		<dd>（1）只能通过 <b>this.props</b> 和 <b>this.state</b> 访问数据</dd>
		        		<dd>（2）可以返回 <b>null</b>、<b>false</b>或者<b>任何React组件</b></dd>
		        		<dd>（3）只能出现一个顶级组件</dd>
		        		<dd>（4）必需纯净，意味着不能改变组件的状态或者修改DOM的输出</dd>
			        </dl>
				</div>
			</div>
			
		)
	}
}

export default connect(Life)
