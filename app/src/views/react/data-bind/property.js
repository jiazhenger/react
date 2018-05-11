/* ====================================== 绑定属性  ====================================== */
import React from 'react';
import connect from '@redux/connect';

// =====================================================================
class BindProperty extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/property.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>绑定属性</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>HTML 属性:</dt>
		        		<dd><b>const property = ｛href:'',target:'',title:''｝</b></dd>
		        		<dd><b>&lt;div ｛...property｝&gt;</b></dd>
			        </dl>
					<dl className="mvvm-list samebox mt10">
		        		<dt>自定义 HTML 属性:</dt>
		        		<dd><b>&lt;div x='123'&gt;</b>：<s x='123'>非动态绑定变量只能是字符串</s></dd>
		        		<dd><b>&lt;div data-x=｛false｝&gt;</b>：<s data-x={false}>data- 开头，才能动态绑定变量</s></dd>
		        		<dd><b>&lt;div aria-hidden=｛false｝&gt;</b>：<s aria-hidden={true}>aria-hidden 绑定自定义属性</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>data-：如果往原生 HTML 元素里传入 HTML 规范里不存在的属性，React 不会显示它们。如果需要使用自定义属性，要加 data- 前缀:</dt>
		        		<dd><b>&lt;div data-xx=｛false｝&gt;</b>：<s data-xx={false}>data- 开头，才能动态绑定变量</s></dd>
		        		<dd><b>&lt;div data-custom-attribute="foo"｝&gt;</b>：<s data-custom-attribute="foo">data- 开头，绑定字符串</s></dd>
			        </dl>
			        <dl className="mvvm-list samebox">
		        		<dt>aria-hidden=｛true｝</dt>
		        		<dd>用于屏幕阅读器的，帮助残障人士更好的访问网站</dd>
		        		<dd>图标的可访问性, 残障人士使用识读设备（自动读取内容并自动播放出来），播放到带此属性的内容时会自动跳过，以免残障人士混淆</dd>
		        		<dd><b>&lt;div aria-hidden=｛true｝&gt;</b>：<s aria-hidden={true}>残障人士忽略此处</s></dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(BindProperty)
