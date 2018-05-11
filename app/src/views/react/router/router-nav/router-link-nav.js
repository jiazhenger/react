/* ====================================== 链接式导航  ====================================== */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import connect from '@redux/connect';
// =====================================================================
class RouterLinkNav extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/router/router-nav/router-link-nav.js');
		this.props.history.push('/code');
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>链接式导航</button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
		        	<dl className="mvvm-list samebox">
			        	<dt>&lt;Link&gt;: 属性</dt>
			        	<dd><b>to="/"</b>：跳转到指定路径，href 的值，无参数跳转</dd>
			        	<dd><b>to=｛'/news/'+v.id｝</b>或<b>to=｛`/news/$｛v.id｝`｝</b>：动态添加参数</dd>
			        	<dd><b>to=｛｛｝｝</b>：带参数跳转</dd>
			        	<dd><b>replace</b>：无历史记录跳转</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>&lt;NavLink&gt;: 属性</dt>
			        	<dd><b>to="/"</b>：路由重定向</dd>
			        	<dd><b>to=｛｛｝｝</b>：带参数跳转</dd>
			        	<dd><b>exact</b>：为 true 时，路由完全匹配时，当前样式 class/style 才会生效</dd>
			        	<dd><b>strict</b>：对路径末尾斜杠的匹配，path 为 '/one/' 将不能匹配 '/one' 但可以匹配 '/one/two'</dd>
			        	<dd><b>activeClassName="active"</b>：导航选中激活时候应用的样式名，默认样式名为 active</dd>
			        	<dd><b>activeStyle=｛｛color:'red'｝｝</b>：当前 style 样式</dd>
			        	<dd><b>isActive=｛(match, location)=>｛ return !match ? false : true ｝｝	</b>：决定导航是否激活，返回结果为真时，当前样式 class/style 才会生效，否则失效</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>to=｛｛｝｝: 属性</dt>
			        	<dd><b>pathname='/'</b>：跳转到指定路径</dd>
			        	<dd><b>search=`id=$｛v.id｝&name=$｛v.name｝`</b>：可选参数</dd>
			        	<dd><b>hash: '#the-hash',</b>：锚点值</dd>
			        	<dd><b>state: ｛ fromDashboard: true ｝</b>：state 值</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>无参数模式：</dt>
			        	<dd><Link to="/react/router/router-query" className="btn-my-o">&lt;Link to="/router-query"&gt;&lt;/Link&gt;</Link></dd>
			        	<dd><NavLink to="/react/router/router-query" className="btn-my-o">&lt;NavLink to="/router-query"&gt;&lt;/NavLink&gt;</NavLink></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>必选参数模式：</dt>
			        	<dd><Link to="/react/router/router-param/100" className="btn-my-o">&lt;Link to="/router-param/100"&gt;&lt;/Link&gt;</Link></dd>
			        	<dd><NavLink to="/react/router/router-param/200" className="btn-my-o">&lt;NavLink to="/router-param/200"&gt;&lt;/NavLink&gt;</NavLink></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>可选参数模式：</dt>
			        	<dd>
			        		<Link to={{pathname:'/react/router/router-query',search:'id=10&name=reactjs', hash:'#myHash', state:{id:10,name:'reactjs'}}} className="btn-my-o">
			        			&lt;Link to=｛｛pathname:'/react/router/router-query',search:'id=10&name=reactjs', hash:'#myHash', state:｛id:10,name:'reactjs'｝｝｝&gt;&lt;/Link&gt;
			        		</Link>
			        	</dd>
			        	<dd>
			        		<NavLink to={{pathname:'/react/router/router-query',search:'id=10&name=reactjs', hash:'#myHash', state:{id:10,name:'reactjs'}}} className="btn-my-o">
			        			&lt;NavLink to=｛｛pathname:'/react/router/router-query',search:'id=10&name=reactjs', hash:'#myHash', state:｛id:10,name:'reactjs'｝｝｝&gt;&lt;/NavLink&gt;
			        		</NavLink>
			        	</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>必选参数带可选参数模式：</dt>
			        	<dd>
			        		<Link to={{pathname:'/react/router/router-param/800',search:'id=10&name=reactjs', hash:'#myHash', state:{id:10,name:'reactjs'}}} className="btn-my-o">
			        			&lt;Link to=｛｛pathname:'/react/router/router-param/800',search:'id=10&name=reactjs', hash:'#myHash', state:｛id:10,name:'reactjs'｝｝｝&gt;&lt;/Link&gt;
			        		</Link>
			        	</dd>
			        	<dd>
			        		<NavLink to={{pathname:'/react/router/router-param/800',search:'id=10&name=reactjs', hash:'#myHash', state:{id:10,name:'reactjs'}}} className="btn-my-o">
			        			&lt;NavLink to=｛｛pathname:'/react/router/router-param/800',search:'id=10&name=reactjs', hash:'#myHash', state:｛id:10,name:'reactjs'｝｝｝&gt;&lt;/NavLink&gt;
			        		</NavLink>
			        	</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
			        	<dt>无返回历史记录：</dt>
			        	<dd><Link to="/react/router/router-query" replace className="btn-my-o">&lt;Link to="/router-query" replace&gt;&lt;/Link&gt;</Link></dd>
			        	<dd><NavLink to="/react/router/router-query" replace className="btn-my-o">&lt;NavLink to="/router-query" replace&gt;&lt;/NavLink&gt;</NavLink></dd>
			        </dl>
		        </div>
			</div>
		)
	}
}

export default connect(RouterLinkNav)
