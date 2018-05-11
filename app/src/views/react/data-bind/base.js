/* ======================================  基本插值  ====================================== */
import React from 'react';
import connect from '@redux/connect';

const outerVal = '外部声明变量'
// =====================================================================
class BindBase extends React.Component{
	state = {
		value: 'state 声明变量'
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>基本插值</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>基本插值:</dt>
		        		<dd><b>｛value｝</b>：<s>{outerVal}</s></dd>
		        		<dd><b>｛this.state.value｝</b>：<s>{this.state.value}</s></dd>
		        		<dd><b>｛true ? '真' : '假'｝</b>：<s>{true ? '真' : '假'}</s></dd>
		        		<dd><b>｛true ? &lt;b&gt;html&lt;/b&gt; : &lt;b&gt;html&lt;/b&gt;｝</b>：<s>{true ? <b>真</b> : <b>假</b>}</s></dd>
		        		<dd><b>｛1+1｝</b>：<s>{1+1}</s></dd>
		        		<dd><b>｛JSON.stringify(this.props.location)｝</b>：<s>{JSON.stringify(this.props.location)}</s></dd>
			        </dl>
				</div>
			</div>
			
		)
	}
}

export default connect(BindBase)
