import React from 'react';
import ReactDOM from 'react-dom';
// ======================================================== 注册服务器
import registerServiceWorker from './registerServiceWorker';
// ======================================================== 全局 css 样式
import '@css/main.css';
import '@css/frame.css';
import './App.css';
// ======================================================== redux
import { Provider } from 'react-redux';
import Store from '@redux/store';
// ======================================================== 入口文件
import App from './App';
// ======================================================== 启动方式一
/*
 * 	App 组件格式：
	const App = () => (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Index} exact />
				<Route path="/react" component={ReactIndex} />
				<Redirect from="/index" to="/" exact />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	)
 */
//ReactDOM.render((<App/>),document.getElementById('root'));	// 默认启动
ReactDOM.render((<Provider store={Store}><App/></Provider>),document.getElementById('root'));	// redux 启动
// ======================================================== 启动方式二
/*
 * 	App 组件格式：
	const App = () => (
		<Switch>
			<Route path="/" component={Index} exact />
			<Route path="/react" component={ReactIndex} />
			<Redirect from="/index" to="/" exact />
			<Route component={NotFoundPage} />
		</Switch>
	)
 */
//import { BrowserRouter, Route } from 'react-router-dom';
//ReactDOM.render((<Provider store={Store}><BrowserRouter><Route component={ App }/></BrowserRouter></Provider>),document.getElementById('root'))
// ======================================================== 启动方式三
/*
// 无  App 入口文件
ReactDOM.render(
	(
		<Provider store={Store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Index} exact />
					<Route path="/react" component={ReactIndex} />
					<Redirect from="/index" to="/" exact />
					<Route component={NotFoundPage} />
				</Switch>
			</BrowserRouter>
		</Provider>
	),
	document.getElementById('root')
)*/
// ======================================================== 启动服务
registerServiceWorker();

// react-router 官网案例：https://reacttraining.com/react-router/web