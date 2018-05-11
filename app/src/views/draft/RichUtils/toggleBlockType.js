/* ======================================  toggleBlockType 块级样式 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== draft
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
// ====================================== 自定义块级样式
const getBlockStyle = (contentBlock) => {
	switch (contentBlock.getType()) {	// 获取到当前 contentBlock 对应的类型
        case 'blockquote': 
        	return 'RichEditor-blockquote';
        case 'center': 
        	return 'RichEditor-center';
        case 'bgcolor': 
        	return 'RichEditor-bgcolor';
        default: 
        	return null;
    }
}
// =====================================================================
class ToggleBlockType extends React.Component{
	state = { 
		editorState: EditorState.createEmpty(),		// 生成一个没有内容的EditorState对象
		content:''
	}
	onChange(editorState){
		this.setState({editorState});									// 改变编辑内容
		let content = convertToRaw(editorState.getCurrentContent());	// 获取数据内容
		this.setState({ content : JSON.stringify(content,null,'\t')});	// 输出 json 内容
	}
	// 设置 toggleBlockType 块级样式
	blockClick(style) {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, style));
	}
	goSelf(){
		this.props.$action.getCode('views/draft/RichUtils/toggleBlockType.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>toggleBlockType 块级样式</button>
				</div>
				
				<div className="samebox mt10">
					<h3 className="h40">默认块级样式</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-one')}>h1</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-two')}>h2</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-three')}>h3</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-four')}>h4</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-five')}>h5</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'header-six')}>h6</a>
					</div>
					<h3 className="h40">自定义块级样式</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'blockquote')}>blockquote</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'center')}>center</a>
						<a className="btn-my-o" onClick={this.blockClick.bind(this,'bgcolor')}>bgcolor</a>
					</div>
					{/* 编辑器 */}
					<div style={{border:'1px solid #ccc'}} className="r5px p10">
						<Editor 
							editorState = { this.state.editorState } 		// 编辑的内容
							onChange = { this.onChange.bind(this) }			// 改变编辑内容，并获取内容
							
							blockStyleFn={ getBlockStyle }					// 自定义块级样式 
						/>
					</div>
				</div>
				
				<pre className="samebox mt10">{this.state.content}</pre>
				
				<style dangerouslySetInnerHTML={{__html:`
					.public-DraftEditor-content{min-height:100px}
					.RichEditor-blockquote {
						border-left: 5px solid #eee;
    					color: red;
					    font-family: 'Hoefler Text', 'Georgia', serif;
					    font-style: italic;
					    margin: 16px 0;
					    padding: 10px 20px;
					}
					.RichEditor-center{text-align:center}
					.RichEditor-bgcolor{background-color:#ccc}
				`}}/>
			</div>
		)
	}
}

export default connect(ToggleBlockType)
