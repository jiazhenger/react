import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import connect from '@redux/connect';
import Nav from  '@js/nav';
// ===================================================================== 路由组件
import Router from './router';
import logo from '@images/logo.png';
// =====================================================================
class ReactIndex extends React.Component {
	state = { top:0 }
	// 组件即将插入真实 DO
	componentWillMount(){
		// 路由监听
		//this.props.history.listen((location)=>{ console.log(location);})
		//this.context.router.history.listen((location)=>{ console.log(location) })
	}
	// 组件已插入真实 DOM
	componentDidMount(){
		Nav();
	}
	// 组件即将被重新渲染
	componentWillUpdate(nextProps, nextState){
		
	}
	// 组件被重新渲染
	componentDidUpdate(nextProps, nextState){
		
	}
	// 已加载组件收到新的参数时调用
	componentWillReceiveProps(nextProps){
		//console.log('上一个路由',this.props.location.pathname);
	    //console.log('当前路由',nextProps.location.pathname);
	}
	// 组件判断是否重新渲染时调用
	shouldComponentUpdate(nextProps, nextState){
		return true
	}
	// 在组件被移出之前被调用
	componentWillUnmount(){
		//this.setState = (state,callback)=>{ return;}
	}
	render(){
		return [
			<header className="header" key="header">
				<h1 className="logo"><Link to="/react"><img src={logo} alt=""/></Link></h1>
				<i className="font-navicon small-nav" id="smallNav"></i>
			</header>,
			<section className="container" key="container">
				<aside className="navigation oys" id="navigation">
					<ul>
						<li>
							<h3 className="js-tit"><span>路由{this.top}</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to={{pathname:'/react/router/router-props/200',search:'id=100',hash:'#myHash',state:{name:'react'}}} activeClassName="active">props</NavLink></li>
								<li><NavLink to="/react/router/router-mode" activeClassName="active">路由模式</NavLink></li>
								<li><NavLink to="/react/router/router-base" activeClassName="active">基本路由</NavLink></li>
								<li><NavLink to="/react/router/router-child" activeClassName="active">子路由</NavLink></li>
								<li><NavLink to="/react/router/router-async" activeClassName="active">异步路由</NavLink></li>
								<li>
									<h5 className="js-tit"><span>路由配置方式</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/router/router-map-config" activeClassName="active">map 循环配置路由</NavLink>
										<NavLink to="/react/router/router-component-config" activeClassName="active">路由组件化配置路由</NavLink>
									</nav>
								</li>
								<li><NavLink to="/react/router/router-many-component" activeClassName="active">同一个路由使用多个组件</NavLink></li>
								<li><NavLink to="/react/router/router-prompt" activeClassName="active">Prompt 防止路由转换</NavLink></li>
								<li>
									<h5 className="js-tit"><span>路由导航</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/router/router-link-nav" activeClassName="active">链接式导航</NavLink>
										<NavLink to="/react/router/router-order-nav" activeClassName="active">命令式导航</NavLink>
										<NavLink to="/react/router/router-my-link-nav" activeClassName="active">自定义链接式导航</NavLink>
									</nav>
								</li>
								<li><NavLink to="/react/router/router-listen" activeClassName="active">路由监听</NavLink></li>
								<li><NavLink to="/react/router/router-refresh" activeClassName="active">key 刷新页面</NavLink></li>
								<li><NavLink to="/react/router/router-my-route" activeClassName="active">自定义 Route</NavLink></li>
								<li><NavLink to="/react/router/router-static" activeClassName="active">静态路由</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>state 状态</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/state/state-base" activeClassName="active">state</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>模板语法</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/data-bind/data-bind-base" activeClassName="active">基本插值绑定</NavLink></li>
								<li><NavLink to="/react/data-bind/data-bind-html" activeClassName="active">html插值绑定</NavLink></li>
								<li><NavLink to="/react/data-bind/data-bind-property" activeClassName="active">属性绑定</NavLink></li>
								<li><NavLink to="/react/data-bind/data-bind-style" activeClassName="active">样式绑定</NavLink></li>
								<li>
									<h5 className="js-tit"><span>循环绑定数据</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/data-bind/data-bind-for-array" activeClassName="active">绑定数组</NavLink>
										<NavLink to="/react/data-bind/data-bind-for-object" activeClassName="active">绑定对象</NavLink>
									</nav>
								</li>
								<li>
									<h5 className="js-tit"><span>模板判断方式</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/data-bind/if-html" activeClassName="active">模板内判断</NavLink>
										<NavLink to="/react/data-bind/if-method" activeClassName="active">拆分成小函数判断</NavLink>
										<NavLink to="/react/data-bind/if-render" activeClassName="active">render内判断</NavLink>
										<NavLink to="/react/data-bind/hidden" activeClassName="active">hidden判断</NavLink>
									</nav>
								</li>
								<li><NavLink to="/react/data-bind/data-bind-event" activeClassName="active">事件绑定</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>组件</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/component/props" activeClassName="active">props</NavLink></li>
								<li><NavLink to="/react/component/ref" activeClassName="active">ref</NavLink></li>
								<li><NavLink to="/react/component/life" activeClassName="active">组件生命周期</NavLink></li>
								<li><NavLink to="/react/component/create" activeClassName="active">创建组件方式</NavLink></li>
								<li><NavLink to="/react/component/prop-types" activeClassName="active">检测数据类型</NavLink></li>
								<li>
									<h5 className="js-tit"><span>组件通信</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/component/child-get-parent" activeClassName="active">子取父</NavLink>
										<NavLink to="/react/component/parent-get-child" activeClassName="active">父取子</NavLink>
										<NavLink to="/react/component/brother" activeClassName="active">兄弟组件通信</NavLink>
										<NavLink to="/react/component/eventProxy-brother" activeClassName="active">观察者模式兄弟组件通信</NavLink>
									</nav>
								</li>
								<li><NavLink to="/react/component/context" activeClassName="active">context 上下文</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>高阶组件</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/component-higher/higher-base" activeClassName="active">基本概念</NavLink></li>
								<li>
									<h5 className="js-tit"><span>属性代理</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/component-higher/higher-pp-base" activeClassName="active">基本概念</NavLink>
										<NavLink to="/react/component-higher/higher-pp-props" activeClassName="active">更改 props</NavLink>
										<NavLink to="/react/component-higher/higher-pp-ref" activeClassName="active">通过 refs 获取组件实例</NavLink>
										<NavLink to="/react/component-higher/higher-pp-state" activeClassName="active">抽象 state</NavLink>
										<NavLink to="/react/component-higher/higher-pp-element" activeClassName="active">与其它 elements 包装在一起</NavLink>
									</nav>
								</li>
								<li>
									<h5 className="js-tit"><span>反向继承</span><i className="font-angle-right"></i></h5>
									<nav>
										<NavLink to="/react/component-higher/higher-ii-base" activeClassName="active">基本概念</NavLink>
										<NavLink to="/react/component-higher/higher-ii-condition" activeClassName="active">渲染劫持-条件渲染</NavLink>
										<NavLink to="/react/component-higher/higher-ii-change" activeClassName="active">渲染劫持-改变 element tree</NavLink>
										<NavLink to="/react/component-higher/higher-ii-state" activeClassName="active">操作state</NavLink>
										<NavLink to="/react/component-higher/higher-ii-life" activeClassName="active">获取生命同期</NavLink>
									</nav>
								</li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>表单</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/form/form-base" activeClassName="active">基本表单</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>react-redux</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/react-redux/redux-base" activeClassName="active">redux 基础</NavLink></li>
							</menu>
						</li>
						<li>
							<h3 className="js-tit"><span>html5 本地存储</span><i className="font-angle-right"></i></h3>
							<menu>
								<li><NavLink to="/react/database/localStorage" activeClassName="active">localStorage</NavLink></li>
								<li><NavLink to="/react/database/sessionStorage" activeClassName="active">sessionStorage</NavLink></li>
								<li><NavLink to="/react/database/indexdb" activeClassName="active">indexdb</NavLink></li>
							</menu>
						</li>
					</ul>
				</aside>
				<main className="oxys" id="main">
					<section className="content">
						{/* 子组件路由出口，相当于ng的 router-outlet，vue的 router-view */}
						{/* <Router {...this.props} key={this.props.state.My.key} /> */}
						{/* <Route component={Router} {...this.props} key={this.props.state.My.key} /> */}
						<Route component={Router} {...this.props} key={this.props.state.key} />
					</section>
				</main>
			</section>
		]
	}
}

export default connect(ReactIndex)
