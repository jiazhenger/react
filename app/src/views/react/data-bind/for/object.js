/* ======================================  循环绑定对象  ====================================== */
import React from 'react';
import connect from '@redux/connect';

// =====================================================================
class BindForObject extends React.Component{
	state = {
		obj:{
			a: 'reactjs',
			b: 'vuejs',
			c: 'angularjs'
		}
	}
	// 动态删除对象数据
	del(index){
		delete this.state.obj[index];
		this.setState({
			obj: this.state.obj
		})
	}
	// 动态添加一条数据
	add(val){
		this.setState({
			obj: Object.assign(this.state.obj,{m:'新增数据'})
		})
		this.setState({
			obj: this.state.obj
		})
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/for/object.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>循环绑定对象</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>循环绑定对象:</dt>
		        		<dd><b> key = ｛index｝</b>：不能省略，否则报错</dd>
			        </dl>
			        <ul className="samebox lh26">
						{
							Object.keys(this.state.obj).map((v,i)=>
								<li key={i} onClick={this.del.bind(this,v)}>{v} == {this.state.obj[v]}</li>
							)
						}
					</ul>
				</div>
				
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.add.bind(this,'一条新数据')}>动态添加一条数据</button>
				</div>
			</div>
			
		)
	}
}

export default connect(BindForObject)
