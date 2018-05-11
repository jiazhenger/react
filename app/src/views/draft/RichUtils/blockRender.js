/* ======================================  blockRender 自定义渲染组件 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== draft
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';
import logo from '@images/logo.png';
// ====================================== 自定义渲染组件
const ImgComponent = (props) => (
	<img
        style={{height: '60px', width: 'auto'}}
        src={ logo }
        alt="图片" />
)
const myBlockRenderer = (contentBlock) => {
	//const text = contentBlock.getText();
	// 我们假定这里图片的文本格式为![图片名称](htt://....)
	return {
        component: ImgComponent,  	// 指定组件
        editable: false,  			// 这里设置自定义的组件可不可以编辑，因为是图片，这里选择不可编辑
        // 这里的props在自定义的组件中需要用this.props.blockProps来访问
        props: {
           // src: logo,
        }
    };
}
const rawContent = {
    blocks: [
        {
            text: '这里是文本内容，下面是一张图片',
            type: 'unstyled'
        },
        {
            text: {logo},
            type: 'unstyled'
        }
      
    ],
    entityMap: {}
}
const blocks = convertFromRaw(rawContent)
// =====================================================================
class BlockRender extends React.Component{
	state = { 
		editorState: EditorState.createWithContent(blocks),		// 默认生成一个有内容的编辑器
		content:''
	}
	onChange(editorState){
		this.setState({editorState});									// 改变编辑内容
		let content = convertToRaw(editorState.getCurrentContent());	// 获取数据内容
		this.setState({ content : JSON.stringify(content,null,'\t')});	// 输出 json 内容
	}
	// 设置 toggleBlockType 块级样式
	blockRendererClick(style) {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, style));
	}
	goSelf(){
		this.props.$action.getCode('views/draft/RichUtils/blockRender.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>blockRender 自定义渲染组件</button>
				</div>
				
				<div className="samebox mt10">
					<h3 className="h40">自定义渲染组件</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.blockRendererClick.bind(this,'blockquote')}>blockquote</a>
					</div>
					{/* 编辑器 */}
					<div style={{border:'1px solid #ccc'}} className="r5px p10">
						<Editor 
							editorState = { this.state.editorState } 		// 编辑的内容
							onChange = { this.onChange.bind(this) }			// 改变编辑内容，并获取内容
							
							blockRendererFn = { myBlockRenderer }				// 自定义渲染组件 
						/>
					</div>
				</div>
				
				<pre className="samebox mt10">{this.state.content}</pre>
				
				<style dangerouslySetInnerHTML={{__html:`
					.public-DraftEditor-content{min-height:100px}
				`}}/>
			</div>
		)
	}
}

export default connect(BlockRender)
