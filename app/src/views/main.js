import React from 'react';
import { Route, Link } from 'react-router-dom';
import connect from '@redux/connect';
import Index from './index/index';
import Nav from '@js/nav';
import logo from '@images/logo.png';
// =====================================================================
class Main extends React.Component {
	componentDidMount(){
		Nav();
	}
	render(){
		return [
			<header className="header" key={1}>
					<h1 className="logo"><Link to="/"><img src={logo} alt=""/></Link></h1>
					<i className="font-navicon small-nav" id="smallNav"></i>
			</header>,
			<section className="container" key={2}>
				<aside className="navigation oys" id="navigation">
					<ul>
						<li><h3><Link to="/react"><span>ReactJs 教程</span><i className="font-angle-right"></i></Link></h3></li>
						<li><h3><Link to="/draft"><span>draft.js</span><i className="font-angle-right"></i></Link></h3></li>
						<li><h3><Link to="/antd"><span>蚂蚁金服 Antd</span><i className="font-angle-right"></i></Link></h3></li>
						<li><h3><Link to="/material-ui"><span>material-ui</span><i className="font-angle-right"></i></Link></h3></li>
						<li><h3><Link to="/my-component"><span>我的组件</span><i className="font-angle-right"></i></Link></h3></li>
						{/*
						<li><h3><span>reactstrap</span><i className="font-angle-right"></i></h3></li>
						*/}
					</ul>
				</aside>
				<main className="oxys">
					<section className="content">
						{/* 顶级默认路由出口 */}
						{/* <Route path='/' component={Index}/> */}
						<Route component={Index}/>
					</section>
				</main>
			</section>
		]
	}
}

export default connect(Main)
