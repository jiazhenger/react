/* ======================================  html插值绑定  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class BindHtml extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/html.js');
		this.props.history.push('/code')
	}
	// 间接绑定插入 html
	insertHtml(){
		 return {__html: '<b style="color:blue">间接绑定插入 html 数据</b>'};
	}
	render(){
		const innerHtml = {__html:'<b style="color:blue">绑定插入 html 数据</b>'}
		const htmlArr = [
			<h1 key="h1">插入数组</h1>,
			<h2 key="h2">数组会自动展开所有成员！</h2>,
			<h2 key="h3">必须添加 key="" ,否则报错</h2>
		]
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}> html插值绑定</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>dangerouslySetInnerHTML = ｛｝间接绑定插入:</dt>
		        		<dd><b>insertHtml()｛return ｛__html:'&lt;b&gt;html&lt;/b&gt;'｝｝</b>：首先声明要插入的值，此为固定格式</dd>
			        	<dd><b>&lt;div dangerouslySetInnerHTML=｛this.insertHtml()｝&gt;</b>：绑定插入 html</dd>
			        </dl>
			        <div className="samebox" dangerouslySetInnerHTML={this.insertHtml()}></div>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>dangerouslySetInnerHTML = ｛ innerHtml ｝直接绑定插入:</dt>
		        		<dd><b>const innerHtml = ｛__html:'&lt;b&gt;html&lt;/b&gt;'｝</b>：绑定插入的  html 对象</dd>
			        	<dd><b>&lt;div dangerouslySetInnerHTML=｛ innerHtml ｝&gt;</b>：绑定插入 html</dd>
			        </dl>
			        <div className="samebox" dangerouslySetInnerHTML={innerHtml}></div>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>dangerouslySetInnerHTML = ｛｛__html:''｝｝直接绑定插入:</dt>
			        	<dd><b>&lt;div dangerouslySetInnerHTML=｛｛__html:'&lt;b&gt;直接绑定插入&lt;/b&gt;'｝｝&gt;</b>：绑定插入 html</dd>
			        </dl>
			        <div className="samebox" dangerouslySetInnerHTML={{__html:'<b style="color:blue">直接绑定插入 html 数据</b>'}}></div>
				
					<dl className="mvvm-list samebox mt10">
		        		<dt>绑定 jsx 的 html</dt>
			        	<dd><b>｛&lt;div&gt; html &lt;/div&gt;｝</b>	{<s>绑定 jsx 的 html</s>}</dd>
			        	<dd><b>｛(&lt;div&gt; html &lt;/div&gt;)｝</b>{(<s>绑定 jsx 的 html</s>)}</dd>
			        	<dd><b>｛ htmlArr ｝</b> htmlArr=[&lt;div key="mykey"&gt; html &lt;/div&gt;,&lt;div key="mykey"&gt; html &lt;/div&gt;]</dd>
			        </dl>
			        <div className="samebox">{ htmlArr }</div>
				</div>
			</div>
			
		)
	}
}

export default connect(BindHtml)
