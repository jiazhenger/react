/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ===================================================================== View
import Index from './index/index';
// ====================================== test
import Test from './test/test';
// ===================================================================== 二级路由
export default ({ match }) => (
	<Switch>
		<Route path={match.url} component={Index} exact />
		{/* test */}
		<Route path={`${match.url}`} render={ ({match}) => (
			<Switch>
				<Route path={`${match.url}/test`} component={Test} />
			</Switch>
		)} />
	</Switch>
)