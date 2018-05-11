import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import connect from '@redux/connect';
import Nav from '@js/nav';
// ===================================================================== 路由组件
import Router from './router';
import logo from '@images/logo.png';
// =====================================================================
class ReactIndex extends React.Component {
	componentDidMount(){
		Nav()
	}
	render(){
		return (
			<div className="full-screen">
				<header className="header">
					<h1 className="logo"><Link to="/draft"><img src={logo} alt=""/></Link></h1>
					<i className="font-navicon small-nav" id="smallNav"></i>
				</header>
				<section className="container">
					<aside className="navigation oys" id="navigation">
						<ul>
							<li>
								<h3 className="js-tit"><span>基本编辑器</span><i className="font-angle-right"></i></h3>
								<menu>
									<li><NavLink to="/draft/base-editor" activeClassName="active">基本编辑器</NavLink></li>
								</menu>
							</li>
							<li>
								<h3 className="js-tit"><span>RichUtils 富文本样式</span><i className="font-angle-right"></i></h3>
								<menu>
									<li><NavLink to="/draft/RichUtils/toggleInlineStyle" activeClassName="active">toggleInlineStyle 行内样式</NavLink></li>
									<li><NavLink to="/draft/RichUtils/toggleBlockType" activeClassName="active">toggleBlockType 块级样式</NavLink></li>
									<li><NavLink to="/draft/RichUtils/toggleLink" activeClassName="active">toggleLink 添加链接</NavLink></li>
									<li><NavLink to="/draft/RichUtils/blockRender" activeClassName="active">blockRender 自定义渲染组件</NavLink></li>
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
