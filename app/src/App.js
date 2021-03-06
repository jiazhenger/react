﻿/* ====================================== App 入口文件  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import { HashRouter } from 'react-router-dom';
// ===================================================================== router
import AppRouter from './router';
import LoadingComponent from './component/loading.component';
// ===================================================================== 二级路由
class App extends React.Component{
	componentDidMount(){
		//document.body.ontouchmove = event => event.preventDefault();
	}
	render(){
		return [
			<HashRouter key="HashRouter">
				{/* <Route component={AppRouter} {...this.props} exact /> */}
				{/* <AppRouter {...this.props} /> AppRouter 必须有  withRouter 包裹*/}
				<AppRouter { ...this.props } />
			</HashRouter>,
			<div key="loading">
				{ this.props.state.prompt.bool ? 
					<LoadingComponent />
			        : ''
				}
			</div>
		]
	}
}
//export default App7
export default connect(App)