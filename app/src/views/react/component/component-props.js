/* ====================================== 组件中的 props  ====================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@redux/connect';
// ===================================================================== 获取 id

// ===================================================================== 子组件
class A extends React.Component{
	render(){
		return (
			<div className="samebox mt10 lh26" >
				<h3 style={{color:'green'}}>这是子组件</h3>
				<ul style={{color:'blue'}}>
					{
						this.props.children.map((v,i)=>
							<li key={i}>{v}</li>
						)
					}
				</ul>
			</div>
		)
	}
}
class B extends React.Component{
	constructor(...arg){
		super(...arg);
		this.el = document.createElement('ul');
		this.el.setAttribute('class','my-box');
	}
	componentDidMount(){
		this.box = document.getElementById('mybox');
		this.box.appendChild(this.el);
	}
	componentWillUnmount(){
		this.box.removeChild(this.el);
		this.el= null;
		this.box = null;
	}
	render(){
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		);
	}
}
// =====================================================================
class ComponentProps extends React.Component {
	goSelf(){
		this.props.$action.getCode('views/react/component/component-props.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>组件中的 props</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
						<dt>this.props.x：获取组件上绑定的值</dt>
						<dd><b>&lt;A x=｛｝ y="" z=｛｛a:0｝｝｛this.props...｝ /&gt;</b></dd>
					</dl>
					<dl className="mvvm-list samebox mt10">
						<dt>this.props.children: 获取组件所包含的所有子节点</dt>
						<dd>如果当前组件没有子节点，它就是 <b>undefined</b></dd>
						<dd>如果有一个子节点，数据类型是 <b>object</b></dd>
						<dd>如果有多个子节点，数据类型就是 <b>array</b></dd>
					</dl>
					{/* 组件的所有子节点 */}
					<A>
						<span>组件中的节点一</span>
						<span>组件中的节点二</span>
						<span>组件中的节点三</span>
					</A>
					
					<dl className="mvvm-list samebox mt10">
						<dt>将 this.props.children 放到指定 id 位置</dt>
						<dd><b>return ReactDOM.createPortal(this.props.children, id )</b></dd>
					</dl>
					
					<B>
						<li>将 this.props.children 放到指定 id 位置</li>
						<li>将 this.props.children 放到指定 id 位置</li>
						<li>将 this.props.children 放到指定 id 位置</li>
					</B>
					
					<div className="samebox" style={{color:'blue'}} id="mybox"></div>
				</div>
			</div>
		)
	}
}

export default connect(ComponentProps)
