/* ======================================  基本编辑器  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== draft
import { Editor, EditorState, convertToRaw } from 'draft-js';
// =====================================================================
class BaseEditor extends React.Component{
	state = { 
		editorState: EditorState.createEmpty(),		// 设置为空
		content:''
	}
	
	onChange(editorState){
		this.setState({editorState});									// 改变编辑内容
		let content = convertToRaw(editorState.getCurrentContent());	// 获取数据内容
		this.setState({ content : JSON.stringify(content,null,'\t')});	// 输出 json 内容
	}
	
	goSelf(){
		this.props.$action.getCode('views/draft/base/base-editor.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>基本编辑器</button>
				</div>
				
				<div className="samebox mt10">
					{/* 编辑器 */}
					<div style={{border:'1px solid #ccc'}} className="r5px p10">
						<Editor
							editorState={ this.state.editorState } 
							onChange={ this.onChange.bind(this) }
							placeholder="请输入内容..."
						/>
					</div>
				</div>
				
				<pre className="samebox mt10">{this.state.content}</pre>
				
				<style dangerouslySetInnerHTML={{__html:`.public-DraftEditor-content{min-height:100px}`}}/>
			</div>
		)
	}
}

export default connect(BaseEditor)
