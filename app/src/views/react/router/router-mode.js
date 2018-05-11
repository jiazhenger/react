/* ====================================== 路由模式  ====================================== */
import React from 'react';
import connect from '@redux/connect';
const myLink = {
	href: 'https://reacttraining.com/react-router/web',
	target: '_blank'
}
// =====================================================================
class RouterMode extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-mode.js');
		this.props.history.push('/code')
	}
	goApp(){
		this.props.$action.getCode('App.js');
		this.props.history.push('/code')
	}
	goMain(){
		this.props.$action.getCode('views/main.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>本组件</button>
					<button className="btn-my-default mr20" onClick={this.goApp.bind(this)}>顶级路由入口配置</button>
					<button className="btn-my-default mr20" onClick={this.goMain.bind(this)}>顶级路由出口配置</button>
					<a className="btn-my-default mr20" {...myLink}>react-router官网教程</a>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
					<dl className="mvvm-list">
						<dt>路由模式指令说明: </dt>
						<dd><b>BrowserRouter、HashRouter、MemoryRouter</b>：只在顶级路由配置一次</dd>
					</dl>
				</div>
				
				<div className="lh30 mvvm-code samebox">
					<dl className="mvvm-list mt10">
						<dt>&lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;: 无 hash 路由模式</dt>
						<dd><b>basename = '/basename'</b>：为所有位置添加一个基准URL，所有的基URL位置，有前斜杠，但没有末尾斜杠</dd>
						<dd><b>forceRefresh = ｛true/false｝</b>：当浏览器不支持 html5 的 history API 时强制刷新页面</dd>
						<dd><b>getUserConfirmation =  ｛optionalFunc｝ </b>：导航到此页面前执行的函数，默认使用 window.confirm</dd>
						<dd><b>keyLength = 6</b>：设置它里面路由的 location.key 的长度。默认是6； key的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面</dd>
						<dd><b>children = ｛node｝ </b>：渲染唯一子元素</dd>
					</dl>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
					<dl className="mvvm-list">
						<dt>&lt;HashRouter&gt;&lt;/HashRouter&gt;: hash 路由模式</dt>
						<dd><b>hashType = "slash|noslash|hashbang"</b>：hash 路由类型</dd>
						<dd>其它属性同 BrowserRouter</dd>
					</dl>
					<dl className="mvvm-list">
						<dt>hashType: </dt>
						<dd><b>slash</b>：/#/index</dd>
						<dd><b>noslash</b>：/#/index</dd>
						<dd><b>hashbang</b>：/#!/index</dd>
					</dl>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
					<dl className="mvvm-list">
						<dt>&lt;MemoryRouter&gt;&lt;/MemoryRouter&gt;: 只切换视图，地址栏 url 不变，适用于不是浏览器的路由，如 react native</dt>
						<dd><b>initialEntries = ｛['/one', '/two', ｛ pathname: '/courses',search: `id=1&name=2,hash: '#the-hash',state: ｛ fromDashboard: true ｝｝ ]｝</b>：历史堆栈中路由位置</dd>
						<dd><b>initialIndex = {1}</b>：</dd>
						<dd><b>getUserConfirmation = ｛()=>{}｝</b>：用来确认导航的函数，与 &lt;Prompt&gt; 配合使用</dd>
						<dd><b>keyLength = 6</b>：设置它里面路由的 location.key 的长度。默认是6； key的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面</dd>
						<dd><b>children = ｛node｝ </b>：渲染唯一子元素</dd>
					</dl>
				</div>
			</div>
		)
	}
}

export default connect(RouterMode)
