/* ======================================  toggleLink 块级样式 ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== draft
import { Editor, EditorState, RichUtils, convertToRaw, CompositeDecorator } from 'draft-js';
// =====================================================================
const findLinkEntities = (contentBlock, callback, contentState) => {
		contentBlock.findEntityRanges(character => {
		    const entityKey = character.getEntity();
		    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
		},
		callback
	)
}
const Link = (props) => {
        const {url} = props.contentState.getEntity(props.entityKey).getData();
        return <a href={url} style={{color:'blue',textDecoration:'underline'}}>{props.children}</a>
}
const decorator = new CompositeDecorator([
    {
		strategy: findLinkEntities,
		component: Link,
	},
]);
// =====================================================================
class ToggleLink extends React.Component{
	state = { 
		editorState: EditorState.createEmpty(decorator),		// 生成一个没有内容的EditorState对象
		content:'',
		url: ''
	}
	onChange(editorState){
		this.setState({editorState});									// 改变编辑内容
		let content = convertToRaw(editorState.getCurrentContent());	// 获取数据内容
		this.setState({ content : JSON.stringify(content,null,'\t')});	// 输出 json 内容
	}
	// 设置 toggleLink 链接
	linkClick(link) {
		const { editorState } = this.state;
		// 获取contentState
		const contentState = editorState.getCurrentContent();
		// 在contentState上新建entity
		const contentStateWithEntity = contentState.createEntity(
            'LINK',
            // 'MUTABLE',
            // 'IMMUTABLE',
            'SEGMENTED',
            {url:'http://www.baidu.com'}
        )
		// 获取到刚才新建的entity
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        // 把带有entity的contentState设置到editorState上
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
		this.setState({
	            editorState: RichUtils.toggleLink(
					newEditorState,
					newEditorState.getSelection(),
					entityKey
	            ),
	            showURLInput: false,
	            urlValue: '',
			}, () => {
            	setTimeout(() => this.refs.editor.focus(), 0);
			});
	}
	goSelf(){
		this.props.$action.getCode('views/draft/RichUtils/toggleLink.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>toggleLink 块级样式</button>
				</div>
				
				<div className="samebox mt10">
					<h3 className="h40">自定义链接</h3>
					<div className="mb10 c-mr10">
						<a className="btn-my-o" onClick={this.linkClick.bind(this,'http://www.baidu.com')}>link</a>
					</div>
					{/* 编辑器 */}
					<div style={{border:'1px solid #ccc'}} className="r5px p10" onClick={()=>{this.refs.editor.focus()}}>
						<Editor 
							editorState = { this.state.editorState } 		// 编辑的内容
							onChange = { this.onChange.bind(this) }			// 改变编辑内容，并获取内容
							ref="editor"
							placeholder="请输入内容"
						/>
					</div>
				</div>
				
				<pre className="samebox mt10">{this.state.content}</pre>
				
				<style dangerouslySetInnerHTML={{__html:`.public-DraftEditor-content{min-height:100px}`}}/>
			</div>
		)
	}
}

export default connect(ToggleLink)
