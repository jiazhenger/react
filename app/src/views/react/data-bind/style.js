/* ======================================  绑定样式  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class BindStyle extends React.Component{
	state = {flag:true}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/style.js');
		this.props.history.push('/code')
	}
	render(){
		const styleObject = {color:'blue'}
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}> 绑定样式</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>style 行内样式:</dt>
		        		<dd><b>style=｛｛color:'blue'｝｝</b><span style={{color:'blue'}}>行内样式</span></dd>
		        		<dd><b>style=｛ styleObject=｛color:'blue'｝ ｝</b><span style={styleObject}>行内样式</span></dd>
			        </dl>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>class:</dt>
		        		<dd><b>className="active"</b><span className="my-active">className</span></dd>
		        		<dd><b>className=｛flag ? 'active' : ''｝</b><span className={this.state.flag ? 'my-active' : 'my-current'}>className</span></dd>
			        </dl>
			        <div className="samebox">
						<button className="btn-my-o" onClick={()=>{ this.setState({flag:!this.state.flag})}}>改变样式{this.flag}</button>
					</div>
			        
			        <dl className="mvvm-list samebox mt10">
		        		<dt>内嵌样式:</dt>
		        		<dd><b>&lt;style dangerouslySetInnerHTML=｛｛ __html: '.my-active｛color:blue｝' ｝｝ /&gt;</b></dd>
			        </dl>
			        <style dangerouslySetInnerHTML={{__html:'.my-active{color:blue;text-decoration:underline}'}}/>
			        <style dangerouslySetInnerHTML={{__html:`
			        	.my-current{color:green;text-decoration:none}
			        `}}/>
				</div>
			</div>
			
		)
	}
}

export default connect(BindStyle)
