import React from 'react';
// =====================================================================
const link = {
	href:'https://reactjs.org/docs/installation.html',
	target:'_blank'
}
const link2 = {
	href:'https://doc.react-china.org/docs/hello-world.html',
	target:'_blank'
}
const link3 = {
	href:'http://www.runoob.com/js/js-tutorial.html',
	target:'_blank'
}
const Index = () => (
	<div>
		<div className="samebox">
			<a className="btn-my-default mr20" {...link}>react 官网</a>
			<a className="btn-my-default mr20" {...link2}>react 中文官网</a>
			<a className="btn-my-default mr20" {...link3}>js/html 基础查询文档</a>
		</div>
		<dl className="mvvm-list samebox mt10">
			<dt>环境配置一：</dt>
			<dd><b>npm install -g create-react-app</b> # 安装脚手架</dd>
			<dd><b>create-react-app my-app</b> # 新建项目文件夹</dd>
			<dd><b>cd my-app</b> # 到项目文件夹</dd>
			<dd><b>npm start</b> # 启动 react</dd>
			<dd><b>npm run build</b> # 打包</dd>
			<dd><b>npm run eject</b> # 将所有内建的配置暴露出来</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>环境配置二：</dt>
			<dd><b>npm install -g create-react-app yarn</b> # 安装脚手架</dd>
			<dd><b>create-react-app my-app</b> # 新建项目文件夹</dd>
			<dd><b>cd my-app</b> # 到项目文件夹</dd>
			<dd><b>yarn start</b> # 启动 react</dd>
			<dd><b>yarn build</b> # 打包</dd>
			<dd><b>yarn eject</b> # 将所有内建的配置暴露出来</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>自定义配置：</dt>
			<dd><b>yarn add react-app-rewired --only=dev</b> # 一个对 create-react-app 进行自定义配置的社区解决方案</dd>
			<dd>将 package.json 中的 scripts 中的  <b>react-scripts</b> 替换为<b>react-app-rewired</b> # react-scripts</dd>
			<dd>在项目根目录创建一个 <b>config-overrides.js</b> # 用于修改默认配置</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>按需加载样式配置：</dt>
			<dd><b>yarn add babel-plugin-import --only=dev</b> # 用于按需加载组件代码和样式的 babel 插件</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>使用 antd less 样式：</dt>
			<dd><b>yarn add react-app-rewire-less --only=dev</b> # 使用 less</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>去掉antd 公共样式：</dt>
			<dd><b>antd/lib/style/core/base.less</b> # 全部清空</dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>配置打包无 sourceMap：</dt>
			<dd><b>react-scripts/config/webpack.config.prod.js</b> # 配置 <b>shouldUseSourceMap = false</b></dd>
		</dl>
		<dl className="mvvm-list samebox mt10">
			<dt>非目录打包配置：</dt>
			<dd><b>"homepage":"./"</b> # 在当前项目的 package.json 中添加 homepage</dd>
			<dd><b>"theme": ｛"primary-color": "#6699cc"｝</b> # 在当前项目的 package.json 设置主题颜色</dd>
		</dl>
	</div>
)

export default Index
