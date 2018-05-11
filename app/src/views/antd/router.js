/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ===================================================================== View
import Index from './index/index';
// ====================================== 按钮 Button
import ButtonBase from './button/button-base';
// ====================================== 图标 Icon
import IconBase from './icon/icon-base';
import IconAll from './icon/icon-all';
// ===================================================================== 二级路由
export default ({ match }) => (
	<Switch>
		<Route path={match.url} component={Index} exact />
		{/* 按钮 Button */}
		<Route path={`${match.url}/button`} render={ ({match}) => (
			<Switch>
				<Route path={`${match.url}/button-base`} component={ButtonBase} />
			</Switch>
		)} />
		{/* 图标 Icon */}
		<Route path={`${match.url}/icon`} render={ ({match}) => (
			<Switch>
				<Route path={`${match.url}/icon-base`} component={IconBase} />
				<Route path={`${match.url}/icon-all`} component={IconAll} />
			</Switch>
		)} />
	</Switch>
)