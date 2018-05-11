import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import connect from '@redux/connect';
import Nav from '@js/nav';
// ===================================================================== 路由组件
import Router from './router';
import logo from '@images/logo.png';
// ===================================================================== ant
// 定制主题时，无需导入任何 antd 中的 css， 非自定义时，需导入
//import 'antd/dist/antd.css';
// =====================================================================
class ReactIndex extends React.Component {
	componentDidMount(){
		Nav()
	}
	render(){
		return (
			<div className="full-screen">
				<header className="header">
					<h1 className="logo"><Link to="/antd"><img src={logo} alt=""/></Link></h1>
					<i className="font-navicon small-nav" id="smallNav"></i>
				</header>
				<section className="container">
					<aside className="navigation oys" id="navigation">
						<ul>
							<li>
								<h3 className="js-tit"><span>按钮 Button</span><i className="font-angle-right"></i></h3>
								<menu>
									<li><NavLink to="/antd/button/button-base" activeClassName="active">按钮</NavLink></li>
								</menu>
							</li>
							<li>
								<h3 className="js-tit"><span>图标 Icon</span><i className="font-angle-right"></i></h3>
								<menu>
									<li><NavLink to="/antd/icon/icon-base" activeClassName="active">图标</NavLink></li>
									<li><NavLink to="/antd/icon/icon-all" activeClassName="active">图标集合</NavLink></li>
								</menu>
							</li>
						</ul>
					</aside>
					<main className="oxys">
						<section className="content">
							{/* 子组件路由出口，相当于ng的 router-outlet，vue的 router-view */}
							<Route component={Router} /> 
						</section>
					</main>
				</section>
			</div>
		)
	}
}

export default connect(ReactIndex)
