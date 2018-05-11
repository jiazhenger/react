/* ====================================== 模块子路由配置  ====================================== */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// ===================================================================== material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ===================================================================== View
import Index from './index/index';

import BaseEditor from './base/base-editor';
// 富文本样式 RichUtils 模块
import ToggleInlineStyle from './RichUtils/toggleInlineStyle';
import ToggleBlockType from './RichUtils/toggleBlockType';
import ToggleLink from './RichUtils/toggleLink';
import BlockRender from './RichUtils/blockRender';
// ===================================================================== 二级路由
export default ({ match }) => (
	<MuiThemeProvider>
		<Switch>
			<Route path={match.url} component={Index} exact />
			<Route path={`${match.url}/base-editor`} component={BaseEditor} exact />
			{/* 富文本样式 RichUtils 模块 */}
			<Route path={`${match.url}/RichUtils`} render={ ({match}) => (
				<Switch>
					<Route path={`${match.url}/toggleInlineStyle`} component={ToggleInlineStyle} exact />
					<Route path={`${match.url}/toggleBlockType`} component={ToggleBlockType} exact />
					<Route path={`${match.url}/toggleLink`} component={ToggleLink} exact />
					<Route path={`${match.url}/blockRender`} component={BlockRender} exact />
					{/* 404 */}
					<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
				</Switch>
			)} />
			{/* 404 */}
			<Route render={()=>(<div className="samebox">未找到相应页面</div>)} exact />
		</Switch>
	</MuiThemeProvider>
)