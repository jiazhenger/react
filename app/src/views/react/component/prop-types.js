/* ====================================== 数据类型检测  ====================================== */
import React from 'react';
import connect from '@redux/connect';
import PropTypes from 'prop-types';
// =====================================================================
class PropType extends React.Component{
	// ES7下类型检测的新写法
	static contextTypes = { 
		a : PropTypes.array,
		b : PropTypes.bool,	
		c : PropTypes.func,
		d : PropTypes.number,
		e :	PropTypes.object,
		f : PropTypes.symbol,
		g : PropTypes.string,
		h : PropTypes.string.isRequired,	// 必须是字符串且不能为空
	}
	goSelf(){
		this.props.$action.getCode('views/react/component/prop-types.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>数据类型检测</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
	        			<dt>利用 prop-types 对组件的 props 中的变量进行类型检测:</dt>
	        			<dd><b>&lt;Component number =｛1｝ array =｛[1,2,3]｝ boolean =｛true｝ object=｛｛a:0｝｝/&gt;</b></dd>
	        			<dd><b>static propTypes = ｛ number: PropTypes.number ｝</b>: 声明接收变量的数据类型</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
	        			<dt>利用 prop-types 对组件的 context 中的变量进行类型检测:</dt>
	        			<dd><b>static childContextTypes = ｛ test: PropTypes.string ｝</b>: 在父组件声明要传递到子组件的变量的数据类型</dd>
	        			<dd><b>static contextTypes = ｛ test: PropTypes.string ｝</b>: 在子组件声明要接收变量的数据类型</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>两种书写位置:</dt>
		        		<dd><b>C.propTypes = ｛number:PropTypes.array｝</b> # es6写法，挂在组件上</dd>
		        		<dd><b>static contextTypes = ｛object:ropTypes.object｝</b> # es7写法，写在组件内</dd>
			        </dl>
					<dl className="mvvm-list samebox mt10">
		        		<dt>检测的数据类型(无法检测 undefined 和 null 值):</dt>
		        		<dd><b>PropTypes.array</b> # 数组</dd>
		        		<dd><b>PropTypes.bool</b> # 布尔值</dd>
		        		<dd><b>PropTypes.func</b> # 函数</dd>
		        		<dd><b>PropTypes.number</b> # 数字</dd>
		        		<dd><b>PropTypes.object</b> # 对象</dd>
		        		<dd><b>PropTypes.symbol</b> # ES6新增的symbol类型</dd>
		        		<dd><b>PropTypes.string</b> # 字符串</dd>
		        		<dd><b>PropTypes.string.isRequired</b> # 必须是字符串且不能为空</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>利通过 oneOfType 实现多选择检测——可规定多个检测通过的数据类型:</dt>
		        		<dd><b>C.propTypes = ｛number:PropTypes.oneOfType([PropTypes.string,PropTypes.number])｝</b> number 为字符串或是数字</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>通过 oneOf 实现多选择检测——可规定多个检测通过的变量的值:</dt>
		        		<dd><b>C.propTypes = ｛number:PropTypes.oneOf([12,13])｝</b> # number 必须是12或13</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>通 arrayOf, objectOf 实现多重嵌套检测:</dt>
		        		<dd><b>C.propTypes = ｛array:PropTypes.arrayOf(PropTypes.number)｝</b> # array 为数组且数组元素为 number</dd>
		        		<dd><b>C.propTypes = ｛object:PropTypes.objectOf(PropTypes.func)｝</b> # object 为对象且对象元素为 function</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>通过 shape 方法检测目标对象不同属性的不同数据类型:</dt>
		        		<dd><b>C.propTypes = ｛ object:PropTypes.shap(｛name:PropTypes.string,age:PropTypes.number｝)｝</b> # 检测对象属性的数据类型</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>通过 isRequired 检测props中某个必要的属性（如果该属性不存在就报错）:</dt>
		        		<dd><b>C.propTypes = ｛str: PropTypes.string.isRequired｝</b></dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>应对更复杂的类型检测——将PropTypes的属性值写成函数:</dt>
		        		<dd><b>C.propTypes = ｛prop: (props,propName,componentName)=>｛if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(props[propName]))｛ return new Error()｝｝｝</b></dd>
			        </dl>
				</div>
			</div>
		)
	}
}
// es6 写法，在外面
PropType.propTypes = {
	number:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

export default connect(PropType)
