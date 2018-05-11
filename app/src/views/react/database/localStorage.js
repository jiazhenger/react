/* ======================================  redux 基础  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class LocalStorage extends React.Component{
	state = { api: '获取 indexdb 中的 key' }
	componentDidMount(){
		console.log(this.props)
	}
	goSelf(){
		this.props.$action.getCode('views/react/database/localStorage.js');
		this.props.history.push('/code')
	}
	goDB(){
		this.props.$action.getCode('common/global/localStorage.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>本组件</button>
					<button className="btn-my-default mr20" onClick={this.goDB.bind(this)}>localStorage</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>localStorage: 本地永久存储</dt>
		        		<dd><b>this.props.$ls.set('index.do',｛a:0,b:1｝)</b> 保存数据</dd>
		        		<dd><b>this.props.$ls.get('index.do')</b> 获取数据</dd>
		        	</dl>
				</div>
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={()=>{this.props.$ls.set('index.do',{a:0,b:{a:0,x:Math.ceil(Math.random()*100)}})}}>添加 localStorage</button>
					<button className="btn-my-o mr20" onClick={()=>{this.setState({api:this.props.$ls.get('index.do')})}}>获取 localStorage</button>
					<s style={{color:'blue'}}>{ this.state.api ? JSON.stringify(this.state.api) : 'key 不存在，请先添加'}</s>
				</div>
			</div>
		)
	}
}

export default connect(LocalStorage)
