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
					<h1 className="logo"><Link to="/material-ui"><img src={logo} alt=""/></Link></h1>
					<i className="font-navicon small-nav" id="smallNav"></i>
				</header>
				<section className="container">
					<aside className="navigation oys" id="navigation">
						<ul>
							<li>
								<h3 className="js-tit"><span>按钮</span><i className="font-angle-right"></i></h3>
								<menu>
									<li><NavLink to="/material-ui/button/FlatButton" activeClassName="active">FlatButton</NavLink></li>
									<li><NavLink to="/material-ui/button/RaisedButton" activeClassName="active">RaisedButton</NavLink></li>
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
