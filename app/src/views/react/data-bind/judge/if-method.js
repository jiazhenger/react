/* ====================================== 拆分成小函数判断  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class IfMethod extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			condition : true
        }
	}
	change(){
		this.setState({condition: !this.state.condition})
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/judge/if-render.js');
		this.props.history.push('/code')
	}
	htmlData(){
		if(this.state.condition){
			return <div>为真时显示</div>
		}else{
			return <div>为假显示</div>
		}
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>拆分成小函数判断</button>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.change.bind(this)}>显示模板</button>
				</div>
				<div className="samebox">{ this.htmlData() }</div>
			</div>
		)
	}
}

export default connect(IfMethod)
