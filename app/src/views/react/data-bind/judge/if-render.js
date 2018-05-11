/* ======================================  render 内js条件判断  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class IfRender extends React.Component{
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
	render(){
		let htmlData;
		if(this.state.condition){
			htmlData = (<div>为真时显示</div>)
		}else{
			htmlData = (<div>为假显示</div>)
		}
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>render 内js条件判断</button>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.change.bind(this)}>显示模板</button>
				</div>
				<div className="samebox">{htmlData}</div>
			</div>
		)
	}
}

export default connect(IfRender)
