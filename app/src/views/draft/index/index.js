import React from 'react';

const link = {
	href:"https://draftjs.org/",
	target:"_blank"
}
// =====================================================================
const Index = () => (
	<div>
		<div className="samebox">
			<a className="btn-my-default" {...link}>draft 官方文档</a>
		</div>
		
		<div className="lh30 mvvm-code mt10">
			<dl className="mvvm-list samebox">
	    		<dt>环境:</dt>
	    		<dd><b>npm install --save draft-js</b></dd>
	        </dl>
	        <dl className="mvvm-list samebox mt10">
	    		<dt>富文本:</dt>
	    		<dd>Draft.js 是 Facebook 开源的用于构建富文本编辑器的 JavaScript 框架</dd>
	    		<dd>提问/回答/写文章这类带格式、段落的文本</dd>
	    		<dd>支持 @、超链接的评论</dd>
	    		<dd>支持换行的个人简介、私信</dd>
	        </dl>
		</div>
	</div>
)

export default Index
