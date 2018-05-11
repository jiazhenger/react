/* ======================================  循环绑定数组  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class BindForArray extends React.Component{
	constructor(props,context){
		super(...arguments)
		this.state = {
			arr: [
				<h1 key="h1">插入数组</h1>,
				<h2 key="h2">数组会自动展开所有成员！</h2>,
				<h2 key="h3">必须添加 key="" ,否则报错</h2>
			]
		}
	}
	// 动态删除数组数据
	del(index){
		this.state.arr.splice(index,1);
		this.setState({
			arr:this.state.arr
		})
	}
	// 动态添加一条数据
	add(val){
		this.state.arr.push(val)
		this.setState({
			arr:this.state.arr
		})
	}
	goSelf(){
		this.props.$action.getCode('views/react/data-bind/for/array.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>循环绑定数组</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>直接输出数组:</dt>
		        		<dd><b>｛arr｝</b>：<s></s></dd>
		        		<dd><b> key = 'myKey'</b>：不能省略，否则报错</dd>
			        </dl>
			        <ul className="samebox lh26">
						<li>{this.state.arr}</li>
					</ul>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>map循环绑定数组:</dt>
		        		<dd><b>｛arr.map((v,i)=> &lt;li key=｛i｝&gt;｛v｝&lt;/li&gt;)｝</b>：<s></s></dd>
		        		<dd><b> key = ｛index｝</b>：不能省略，否则报错</dd>
			        </dl>
			        <ul className="samebox lh26">
						{
							this.state.arr.map((v,i)=>
								<li className="_fl" onClick={this.del.bind(this,i)} key={i}><span>{i}==</span>{v}</li>	// 此处值必须有 html 元素包裹 
							)
						}
					</ul>
				</div>
				
				<div className="samebox mt10">
					<button className="btn-my-o mr20" onClick={this.add.bind(this,<div key="new">一条新数据</div>)}>动态添加一条数据</button>
				</div>
			</div>
			
		)
	}
}

export default connect(BindForArray)
