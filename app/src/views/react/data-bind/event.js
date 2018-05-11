/* ====================================== 事件绑定  ====================================== */
import React from 'react';
import connect from '@redux/connect';

// =====================================================================
class BindEvent extends React.Component{
	constructor(props){
		super(props);
		this.txt = '只读属性';
		this.state = {
			txt : 'state 属性',
			msg : '默认执行函数',
			fun : '不用绑定this调用的方法'
		}
		this.start = this.start.bind(this,'A参数','B参数');
	}
	go = () => { this.setState({ txt : '更改 state 属性的属性值' }) }
	change(v){
		alert(v);
		console.log(this.props)
	}
	play(){
		this.setState({ txt : '更改 state 属性的属性值' })
	}
	params(x,y){
		this.setState({ txt : x+y })
	}
	start(x,y){
		this.setState({ txt : x+y })
	}
	// 默认执行函数
	run(){
		console.log(this.state.msg);
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/event.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>事件绑定</button>
					{this.state.txt}
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
						<dt>无  bind(this) 事件绑定:</dt>
						<dd><b>onClick=｛()=>｛alert(this.txt)｝｝</b><button className="btn-my-o ml10" onClick={()=>{alert(this.txt)}}>函数表达式</button></dd>
						<dd><b>onClick=｛()=>｛this.play()｝｝</b><button className="btn-my-o ml10" onClick={()=>{this.play()}}>调用内有 this 的方法</button></dd>
						<dd><b>onClick=｛()=>｛this.change(1)｝｝</b><button className="btn-my-o ml10" onClick={()=>{this.change('方法内无 this')}}>调用内无 this 的方法</button></dd>
						<dd><b>go = () => ｛｝; onClick=｛this.go｝｝; onClick=｛this.go.bind(this,param)｝｝</b><button className="btn-my-o ml10" onClick={this.go}>直接调内有 this 的方法</button></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>带  bind(this) 事件绑定:</dt>
						<dd><b>onClick=｛this.play.bind(this)｝</b><button className="btn-my-o ml10" onClick={this.play.bind(this)}>无参数绑定</button></dd>
						<dd><b>onClick=｛this.params.bind(this,'参数一','参数二')｝</b><button className="btn-my-o ml10" onClick={this.params.bind(this,'参数一','参数二')}>带参数绑定</button></dd>
						<dd><b>onClick=｛this.start｝</b><button className="btn-my-o mlr10" onClick={this.start}>在构造函数中添加 bind(this)</button><b>this.start = this.start.bind(this,'A参数','B参数');</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>默认执行函数:</dt>
						<dd><b>onClick=｛this.run( )｝</b> <button className="btn-my-o mlr10" onClick={this.run()}>默认执行函数,点击无效</button></dd>
						<dd>会默认执行这个函数，但无法再点击触发，并且无法使用 <b>this.setState()</b>，会报错；</dd>
						<dd>但是只要触发有 <b>this.setState()</b> 的方法,都会调用这个默认执行函数一次</dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>鼠标事件:</dt>
						<dd><b>onClick</b></dd>
						<dd><b>onContextMenu</b></dd>
						<dd><b>onDoubleClick</b></dd>
						<dd><b>onMouseDown</b></dd>
						<dd><b>onMouseEnter</b></dd>
						<dd><b>onMouseLeave</b></dd>
						<dd><b>onMouseMove</b></dd>
						<dd><b>onMouseOut</b></dd>
						<dd><b>onMouseOver</b></dd>
						<dd><b>onMouseUp</b></dd>
						<dd><b>onDrop</b></dd>
						<dd><b>onDrag</b></dd>
						<dd><b>onDragEnd</b></dd>
						<dd><b>onDragEnter</b></dd>
						<dd><b>onDragExit</b></dd>
						<dd><b>onDragLeave</b></dd>
						<dd><b>onDragOver</b></dd>
						<dd><b>onDragStart</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>触摸事件:</dt>
						<dd><b>onTouchCancel</b></dd>
						<dd><b>onTouchEnd</b></dd>
						<dd><b>onTouchMove</b></dd>
						<dd><b>onTouchStart</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>键盘事件:</dt>
						<dd><b>onKeyDown</b></dd>
						<dd><b>onKeyUp</b></dd>
						<dd><b>onKeyPress</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>剪切事件:</dt>
						<dd><b>onCopy</b></dd>
						<dd><b>onCut</b></dd>
						<dd><b>onPaste</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>表单事件:</dt>
						<dd><b>onChange</b></dd>
						<dd><b>onInput</b></dd>
						<dd><b>onSubmit</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>焦点事件:</dt>
						<dd><b>onFocus</b></dd>
						<dd><b>onBlur</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>UI事件:</dt>
						<dd><b>onScroll</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>滚动事件:</dt>
						<dd><b>onWheel</b></dd>
					</dl>
				</div>
			</div>
		)
	}
}

export default connect(BindEvent)
