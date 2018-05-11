/* ====================================== 防止路由转换 ====================================== */
import React from 'react';
import { Route, Prompt, NavLink } from 'react-router-dom';
import connect from '@redux/connect';
// =====================================================================
class RouterPrompt extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-prompt.js');
		this.props.history.push('/code')
	}
	render(){
		const { match } = this.props;
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>防止路由转换</button>
				</div>
				
				<div className="lh30 mvvm-code samebox mt10">
					<dl className="mvvm-list">
						<dt>&lt;Prompt/&gt;: 防止路由转换</dt>
						<dd>通常是在表单输入时使用 </dd>
					</dl>
					<dl className="mvvm-list">
						<dt>&lt;Prompt/&gt;: 属性</dt>
						<dd><b>when=｛true｝ </b>：是否开启防止转换提示</dd>
						<dd><b>message=｛location=>(`msg`)｝ </b>：文字提示语</dd>
					</dl>
				</div>
				
				<div className="samebox">
					<NavLink to={`${match.url}/home`} activeStyle={{color:'red'}} className="btn-my-o mr20">Home</NavLink>
					<NavLink to={`${match.url}/about`} activeStyle={{color:'red'}} className="btn-my-o mr20">About</NavLink>
					<NavLink to={`${match.url}/news`} activeStyle={{color:'red'}} className="btn-my-o mr20">News</NavLink>
				</div>
				
				<Route path={`${match.url}/home`} render={()=><div className="samebox">首页</div>} />
				<Route path={`${match.url}/about`} render={()=><div className="samebox">关于我们</div>} />
				<Route path={`${match.url}/news`} render={()=><div className="samebox">最新资讯</div>} />
				{/* 开启防止转换 */} 
				<Prompt  
					when={true}				
					message={location => (
						`您现在想离开当前页面到: ${ location.pathname } 吗?`
					)}
	        	/>
			</div>
		)
	}
}

export default connect(RouterPrompt)
