/* ====================================== 基本路由配置  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class RouterBase extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-base.js');
		this.props.history.push('/code')
	}
	goApp(){
		this.props.$action.getCode('App.js');
		this.props.history.push('/code')
	}
	goChild(){
		this.props.$action.getCode('views/react/router.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>本组件</button>
					<button className="btn-my-default mr20" onClick={this.goApp.bind(this)}>顶级路由入口配置</button>
					<button className="btn-my-default" onClick={this.goChild.bind(this)}>二级子路由配置</button>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>基本路由配置: </dt>
			        	<dd><b>BrowserRouter、HashRouter、MemoryRouter</b>：只在顶级路由配置一次</dd>
			        	<dd><b>Switch</b>：每次只匹配一个路由</dd>
			        	<dd><b>Route</b>：路由配置项及路由出口处</dd>
			        	<dd><b>Redirect</b>：路由重定向</dd>
			        </dl>
		        </div>
		        
		        <div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>&lt;Switch /&gt;：每次只匹配一个路由</dt>
			        	<dd>只渲染出第一个与当前访问地址匹配的 <b>&lt;Route/&gt;</b> 或 <b>&lt;Redirect&gt;</b></dd>
			        	<dd>子节点只能是  <b>&lt;Route/&gt;</b> 或 <b>&lt;Redirect&gt;</b> 元素</dd>
			        	<dd>只有<b>重定向</b>或 <b>404页面</b>,才需要 &lt;Switch /&gt;</dd>
			        </dl>
		        </div>
		        
		        <div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>&lt;Route/&gt;: 路由配置</dt>
			        	<dt>属性说明：</dt>
			        	<dd><b>exact</b>：完全匹配路由 path === location.pathname</dd>
			        	<dd><b>strict</b>：严格匹配 path === location.pathname</dd>
			        	<dd><b>path = '/'</b>：访问链接，当一个 Route 没有 path 时，它会匹配一切路径，即：404。404不能 exact</dd>
			        	<dd><b>component = ｛ Home ｝</b>：路由对应的组件</dd>
			        	<dd><b>render = ｛() = > &lt;div&gt;&lt;/div&gt;｝</b>：路由对应的组件</dd>
			        	<dd><b>children = ｛(｛ match, ...rest｝)=>｛｝｝</b>：子路由</dd>
			        </dl>
			        <dl className="mvvm-list">
			        	<dt>引入组件的两种方式：</dt>
			        	<dd><b>&lt;Route component=｛Home｝ /&gt;</b></dd>
			        	<dd><b>&lt;Route render = ｛() = > &lt;div&gt;&lt;/div&gt;｝</b></dd>
			        </dl>
			        <dl className="mvvm-list">
			        	<dt>声明子路由的两种方式：</dt>
			        	<dd><b>&lt;Route render = ｛(｛match｝) = > &lt;Switch&gt;&lt;Route/&gt;&lt;Route/&gt;&lt;/Switch&gt;｝</b></dd>
			        	<dd><b>&lt;Route children = ｛(｛match｝) = > &lt;Switch&gt;&lt;Route/&gt;&lt;Route/&gt;&lt;/Switch&gt;｝</b></dd>
			        </dl>
			         <dl className="mvvm-list">
			        	<dt>Route 路由出口，即：组件放置在何处展示, 组件可以是路由集合，也可是模板组件</dt>
			        	<dd><b>&lt;Route component=｛RouterComponent | TemplateComponent｝ /&gt;</b> 相当与 ng 的  outlet-router, vue 的 router-view</dd>
			        </dl>
		        </div>
		        
		        <div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>&lt;Redirect/&gt;: 路由重定向</dt>
			        	<dt>属性说明：</dt>
			        	<dd><b>exact</b>：有404页面时，必须设置此项，否则与 404 相冲突</dd>
			        	<dd><b>strict</b></dd>
			        	<dd><b>from = '/'</b>： 由哪个路径进行重定向，包括动态段</dd>
			        	<dd><b>to = '/index'</b>：重定向到路径 /index</dd>
			        	<dd><b>to = ｛｛pathname:'',search:'',hash:'', state:｛｝｝｝</b>：重定向到带参数路径</dd>
			        	<dd><b>push</b>：相当于 replace 操作。加入历史记录，而不是取代，若为真，重定向操作将会把新地址加入到访问历史记录里面，并且无法回退到前面的页面</dd>
			        </dl>
			        <dl className="mvvm-list">
			        	<dt>特殊用法：</dt>
			        	<dd><b>&lt;Redirect to="/" /&gt;</b>：将所有路由重定向到 to 路由中去</dd>
			        </dl>
		        </div>
		        
		        <div className="lh30 mvvm-code samebox mt10">
		        	<dl className="mvvm-list">
			        	<dt>404 路由：</dt>
			        	<dd><b>&lt;Route component=｛ noFunoudPage ｝ /&gt;</b>：当一个 Route 没有 path 时，它会匹配一切路径</dd>
			        </dl>
		        </div>
			</div>
		)
	}
}

export default connect(RouterBase)
