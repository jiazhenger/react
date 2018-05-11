/* ======================================  toggleInlineStyle 行内样式 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== draft
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
// ====================================== 自定义行内样式
const styleMap = {
	'RED': {color: 'red'},
	'DELETE': {textDecoration:'line-through'}
}
// =====================================================================
class ToggleInlineStyle extends React.Component{
	state = { 
		editorState: EditorState.createEmpty(),		// 生成一个没有内容的EditorState对象
		content:''
	}
	onChange(editorState){
		this.setState({editorState});									// 改变编辑内容
		let content = convertToRaw(editorState.getCurrentContent());	// 获取数据内容
		this.setState({ content : JSON.stringify(content,null,'\t')});	// 输出 json 内容
	}
	// 设置 toggleInlineStyle 行内样式
	inlineClick(style) {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
	}
	goSelf(){
		this.props.$action.getCode('views/draft/RichUtils/toggleInlineStyle.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>toggleInlineStyle 行内样式</button>
				</div>
				
				<div className="samebox mt10">
					<h3 className="h40">默认行内样式</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'BOLD')}>BOLD</a>
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'ITALIC')}>ITALIC</a>
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'UNDERLINE')}>UNDERLINE</a>
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'CODE')}>CODE</a>
					</div>
					<h3 className="h40">自定义行内样式</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'RED')}>RED</a>
						<a className="btn-my-o" onClick={this.inlineClick.bind(this,'DELETE')}>DELETE</a>
					</div>
					{/* 编辑器 */}
					<div style={{border:'1px solid #ccc'}} className="r5px p10">
						<Editor 
							editorState = { this.state.editorState } 		// 编辑的内容
							onChange = { this.onChange.bind(this) }			// 改变编辑内容，并获取内容
							
							customStyleMap = { styleMap }					// 自定义行内样式 
						/>
					</div>
				</div>
				
				<pre className="samebox mt10">{this.state.content}</pre>
				
				<style dangerouslySetInnerHTML={{__html:`.public-DraftEditor-content{min-height:100px}`}}/>
			</div>
		)
	}
}

export default connect(ToggleInlineStyle)
