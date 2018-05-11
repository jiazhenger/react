/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ===================================================================== View
import Index from './index/index';
// ====================================== 路由
import RouterProps from './router/router-props';
import RouterMode from './router/router-mode';
import RouterBase from './router/router-base';
import RouterChild from './router/router-child/router-child';
import RouterAsync from './router/router-async';
import RouterMapConfig from './router/router-config/router-map-config';
import RouterComponentConfig from './router/router-config/router-component-config';
import RouterManyComponent from './router/router-many-component';
import RouterPrompt from './router/router-prompt';
import RouterLinkNav from './router/router-nav/router-link-nav';
import RouterMyLinkNav from './router/router-nav/router-my-link-nav';
import RouterOrderNav from './router/router-nav/router-order-nav';
import RouterParam from './router/router-nav/router-param';
import RouterQuery from './router/router-nav/router-query';
import RouterListen from './router/router-listen';
import RouterRefresh from './router/router-refresh';
import RouterMyRoute from './router/router-my-route';
import RouterStatic from './router/router-static';
// ====================================== state
import StateBase from './state/state-base';
// ====================================== 模板语法
import BindBase from './data-bind/base';
import BindHtml from './data-bind/html';
import BindPropery from './data-bind/property';
import BindStyle from './data-bind/style';
import BindForArray from './data-bind/for/array';
import BindForObject from './data-bind/for/object';
import IfHtml from './data-bind/judge/if-html';
import IfMethod from './data-bind/judge/if-method';
import IfRender from './data-bind/judge/if-render';
import Hidden from './data-bind/judge/hidden';
import BindEvent from './data-bind/event';
// ====================================== 组件
import ComponentProps from './component/component-props';
import Ref from './component/ref';
import Life from './component/life';
import Create from './component/create';
import ChildGetParent from './component/communication/child-get-parent';
import ParentGetChild from './component/communication/parent-get-child';
import Brother from './component/communication/brother';
import EventProxyBrother from './component/communication/eventProxy/brother';
import PropType from './component/prop-types';
import Context from './component/context';
// ====================================== 高阶组件
import HigherBase from './component-higher/higher-base';
import HigherPP from './component-higher/pp/higher-pp-base';
import HigherPPProps from './component-higher/pp/higher-pp-props';
import HigherPPRef from './component-higher/pp/higher-pp-ref';
import HigherPPState from './component-higher/pp/higher-pp-state';
import HigherPPSElement from './component-higher/pp/higher-pp-element';
import HigherII from './component-higher/ii/higher-ii-base';
import HigherIICondition from './component-higher/ii/higher-ii-condition';
import HigherIIChange from './component-higher/ii/higher-ii-change';
import HigherIIState from './component-higher/ii/higher-ii-state';
import HigherIILife from './component-higher/ii/higher-ii-life';
// ====================================== 表单
import FormBase from './form/form-base';
// ====================================== react-redux
import ReduxBase from './react-redux/redux-base';
// ====================================== 本地存储
import IndexDB from './database/indexdb';
import LocalStorage from './database/localStorage';
import SessionStorage from './database/sessionStorage';
// ===================================================================== 二级路由
class Router extends React.Component{
	componentDidMount(){
		//this.props.history.listen((location)=>{ console.log(location);})
		//this.context.router.history.listen((location)=>{ console.log(location);})
	}
	// 已加载组件收到新的参数时调用
	componentWillReceiveProps(nextProps){
		//console.log('上一个路由',this.props.location.pathname);
	    //console.log('当前路由',nextProps.location.pathname);
	}
	render(){
		const { match } = this.props;
		return (
			<Switch>
				<Route path={match.url} component={Index} exact />
				{/* 路由 */}
				{/* 有子组件的路由不能设置 严格匹配 exact，其它建议设成严格匹配 exact */}
				<Route path={`${match.url}/router`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/router-props/:id`} component={RouterProps} exact />
						<Route path={`${match.url}/router-mode`} component={RouterMode} exact />
						<Route path={`${match.url}/router-base`} component={RouterBase} exact />
						<Route path={`${match.url}/router-child`} component={RouterChild} />
						<Route path={`${match.url}/router-async`} component={RouterAsync} exact />
						<Route path={`${match.url}/router-map-config`} component={RouterMapConfig} />
						<Route path={`${match.url}/router-component-config`} component={RouterComponentConfig} />
						<Route path={`${match.url}/router-many-component`} component={RouterManyComponent} />
						<Route path={`${match.url}/router-prompt`} component={RouterPrompt} />
						<Route path={`${match.url}/router-link-nav`} component={RouterLinkNav} />
						<Route path={`${match.url}/router-my-link-nav`} component={RouterMyLinkNav} />
						<Route path={`${match.url}/router-order-nav`} component={RouterOrderNav} />
						<Route path={`${match.url}/router-param/:id`} component={RouterParam} />
						<Route path={`${match.url}/router-query`} component={RouterQuery} />
						<Route path={`${match.url}/router-listen`} component={RouterListen} />
						<Route path={`${match.url}/router-refresh`} component={RouterRefresh} />
						<Route path={`${match.url}/router-my-route`} component={RouterMyRoute} />
						<Route path={`${match.url}/router-static`} component={RouterStatic} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* state */}
				<Route path={`${match.url}/state`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/state-base`} component={StateBase} />
					</Switch>
				)} />
				{/* 模板语法 */}
				<Route path={`${match.url}/data-bind`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/data-bind-base`} component={BindBase} />
						<Route path={`${match.url}/data-bind-html`} component={BindHtml} />
						<Route path={`${match.url}/data-bind-property`} component={BindPropery} />
						<Route path={`${match.url}/data-bind-style`} component={BindStyle} />
						<Route path={`${match.url}/data-bind-for-array`} component={BindForArray} />
						<Route path={`${match.url}/data-bind-for-object`} component={BindForObject} />
						<Route path={`${match.url}/if-html`} component={IfHtml} />
						<Route path={`${match.url}/if-method`} component={IfMethod} />
						<Route path={`${match.url}/if-render`} component={IfRender} />
						<Route path={`${match.url}/hidden`} component={Hidden} />
						<Route path={`${match.url}/data-bind-event`} component={BindEvent} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* 组件 */}
				<Route path={`${match.url}/component`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/props`} component={ComponentProps} />
						<Route path={`${match.url}/ref`} component={Ref} />
						<Route path={`${match.url}/life`} component={Life} />
						<Route path={`${match.url}/create`} component={Create} />
						<Route path={`${match.url}/prop-types`} component={PropType} />
						<Route path={`${match.url}/child-get-parent`} component={ChildGetParent} />
						<Route path={`${match.url}/parent-get-child`} component={ParentGetChild} />
						<Route path={`${match.url}/brother`} component={Brother} />
						<Route path={`${match.url}/eventProxy-brother`} component={EventProxyBrother} />
						<Route path={`${match.url}/context`} component={Context} />
						<Route path={`${match.url}/higher-base`} component={HigherBase} />
						<Route path={`${match.url}/higher-pp`} component={HigherPP} />
						<Route path={`${match.url}/higher-ii`} component={HigherII} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* 高阶组件 */}
				<Route path={`${match.url}/component-higher`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/higher-base`} component={HigherBase} />
						<Route path={`${match.url}/higher-pp-base`} component={HigherPP} />
						<Route path={`${match.url}/higher-pp-props`} component={HigherPPProps} />
						<Route path={`${match.url}/higher-pp-ref`} component={HigherPPRef} />
						<Route path={`${match.url}/higher-pp-state`} component={HigherPPState} />
						<Route path={`${match.url}/higher-pp-element`} component={HigherPPSElement} />
						<Route path={`${match.url}/higher-ii-base`} component={HigherII} />
						<Route path={`${match.url}/higher-ii-condition`} component={HigherIICondition} />
						<Route path={`${match.url}/higher-ii-change`} component={HigherIIChange} />
						<Route path={`${match.url}/higher-ii-state`} component={HigherIIState} />
						<Route path={`${match.url}/higher-ii-life`} component={HigherIILife} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* 表单 */}
				<Route path={`${match.url}/form`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/form-base`} component={FormBase} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* react-redux */}
				<Route path={`${match.url}/react-redux`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/redux-base`} component={ReduxBase} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
				{/* html5 本地存储 */}
				<Route path={`${match.url}/database`} render={ ({match}) => (
					<Switch>
						<Route path={`${match.url}/localStorage`} component={LocalStorage} />
						<Route path={`${match.url}/sessionStorage`} component={SessionStorage} />
						<Route path={`${match.url}/indexdb`} component={IndexDB} />
						{/* 404 */}
						<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
					</Switch>
				)} />
			</Switch>
		)
	}
}
export default Router