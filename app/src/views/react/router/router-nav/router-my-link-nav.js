/* ====================================== 自定义链接式导航  ====================================== */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import connect from '@redux/connect';
// ===================================================================== 自定义
const RouterLink = ({ to, text }) => (
	<Route path={to} exact={true} children={({ match }) => (
		<button className='btn-my-o'>
			<Link to={to} className={match ? 'active' : ''}>{text}</Link>
		</button>
	)}/>
)
// =====================================================================
class RouterMyLinkNav extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-nav/router-my-link-nav.js');
		this.props.history.push('/code');
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>自定义链接式导航</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
		        	<dl className="mvvm-list samebox">
			        	<dt>自定义链接式导航</dt>
			        	<dd>&lt;RouterLink <b>to</b>="" <b>text</b>="" /&gt; == RouterLink = (｛ <b>to</b>, <b>text</b> ｝) => ()</dd>
			        </dl>
			        <dl className="mvvm-list samebox">
			        	<dd><RouterLink to="/react/router/router-query" text="自定义链接式导航" className="btn-my-o" /></dd>
			        </dl>
			    </div>
			</div>
		)
	}
}

export default connect(RouterMyLinkNav)
