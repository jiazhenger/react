/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ===================================================================== material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ===================================================================== View
import Index from './index/index';
// ====================================== 按钮
import FlatButtonPage from './button/FlatButton';
import RaisedButtonPage from './button/RaisedButton';
// ===================================================================== 二级路由
export default ({ match }) => (
	<MuiThemeProvider>
		<Switch>
			<Route path={match.url} component={Index} exact />
			{/* button */}
			<Route path={`${match.url}/button`} render={ ({match}) => (
				<Switch>
					<Route path={`${match.url}/FlatButton`} component={FlatButtonPage} />
					<Route path={`${match.url}/RaisedButton`} component={RaisedButtonPage} />
					{/* 404 */}
					<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
				</Switch>
			)} />
		</Switch>
	</MuiThemeProvider>
)