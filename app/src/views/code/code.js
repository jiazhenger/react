import React from 'react';
import connect from '@redux/connect';
//const props = { contentEditable : true, spellCheck : false }
// =====================================================================
class Code extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data : []
        }
	}
	componentDidMount(){
		if(!this.props.state.My.path){
			this.close();
			return;
		}
		this.props.$http.getTxt(this.props.state.My.path).then((data)=>{
			this.setState({ data : data.split('\n') })
		})
	}
	
	close(){
		this.props.history.go(-1);
	}
	
	render(){
		// 返回主要模板内容
		return (
			<section className="pop-my-wraper db">
	            <div>
	                <div>
	                    <div className="pop-my-container">
	                        {/* content start */}
	                        <header className="pop-my-header">
	                            <h3><i className="font-file-code-o"></i> 源码</h3>
	                            <a className="font-close" onClick={this.close.bind(this)}>&nbsp;</a>
	                        </header>
	                        <section className="pop-my-content">
	                        	{
	                        		this.state.data.length > 0 ? (
	                        			<div className="code-list-container">
						            		<dl className="code-number">
						            			{
						            				this.state.data.map((v,i)=>{
						            					return (
						            						<dt key={i}>{i+1}</dt>
						            					)
						            				})
						            			}
						            		</dl>
						            		<dl className="code-content">
						            			{
						            				this.state.data.map((v,i)=>{
						            					return (<dd key={i}>{v}</dd>)
						            				})
						            			}
						            		</dl>
						            	</div>
	                        		) : (
	                        			<div className="p20">正在加载中......</div>
	                        		)
	                        	}
	                        </section>
	                        {/* content end */}
	                    </div>
	                    <q onClick={this.close.bind(this)}></q>
	                </div>
	            </div>
	        </section>
		)
	}
}

export default connect(Code)
