/* ====================================== 基本表单  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// =====================================================================
class FormBase extends React.Component{
	state = {
		f0:'默认值',
		f01:'默认值',
		f1: '默认值',
		f2: true,
		f3:{
			b:'angular'
		},
		f4:'woman',
		f5:'react',
		f6:'默认值'
	}
	checkbox = this.state.f3;
	// input 文本框
	F1(event){ this.setState({ f1: event.target.value })}
	// checkbox 是否框
	F2(event){ this.setState({ f2: event.target.checked })}
	// checkbox 多选框
	F3(event){
		if(event.target.checked){
			this.checkbox[event.target.name] = event.target.value;
		}else{
			delete this.checkbox[event.target.name];
		}
		
		this.setState({ f3: this.checkbox })
	}
	// radio 单选框
	F4(event){this.setState({[event.target.name]: event.target.value})}
	// select 下拉框
	F5(event){ this.setState({ f5: event.target.value })}
	// textarea 多行文本框
	F6(event){ this.setState({ f6: event.target.value })}
	// 提交表单
	onSubmit(event){
		console.log(this.state)
		event.preventDefault(); // 阻止默认动作
	}
	goSelf(){
		this.props.$action.getCode('views/react/form/form-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<button className="btn-my-default mr20" onClick={this.goSelf.bind(this)}>基本表单</button>
				</div>
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>基本表单:</dt>
		        		<dd><b>value=｛this.state.value｝ onChange=｛this.onChange.bind(this)｝</b>：一般表单数据绑定</dd>
		        		<dd><b>value=｛this.state.f0｝ onChange=｛()=>this.setState(｛ f0:this.input.value ｝)｝ ref=｛(input) => this.input = input｝</b>：dom 绑定数据</dd>
		        		<dd><b>value=｛this.state.f01｝ onChange=｛()=>this.setState(｛ f01:this.refs.a.value ｝)｝ ref='a'</b>：dom 绑定数据</dd>
			        </dl>
			        <dl className="mvvm-list samebox mt10">
		        		<dt>表单默认值:</dt>
		        		<dd><b>defaultValue= ''</b>：默认值</dd>
		        		<dd><b>defaultChecked=｛true/false｝</b>：默认选中</dd>
			        </dl>
				</div>
				
				<form className="samebox mt10" onSubmit={this.onSubmit.bind(this)}>
					<ul className="res-tr-tl clearfox _lh32">
						<li>
							<h6 className="col-sm-20">非受控操作f0：</h6>
							<div className="col-sm-80 _fl">
								<input value={this.state.f0} onChange={()=>this.setState({ f0:this.input.value })} ref={(input) => this.input = input } type="text" className="_w200" placeholder="请输入文字"/>
							</div>
						</li>
						<li className="mt10">
							<h6 className="col-sm-20">非受控操作f01：</h6>
							<div className="col-sm-80 _fl">
								<input value={this.state.f01} onChange={()=>this.setState({ f01:this.refs.a.value })} ref='a' type="text" className="_w200" placeholder="请输入文字"/>
							</div>
						</li>
						<li className="mt10">
							<h6 className="col-sm-20">单行文本框f1：</h6>
							<div className="col-sm-80 _fl">
								<input value={this.state.f1} onChange={this.F1.bind(this)} type="text" name="username" className="_w200" placeholder="请输入文字"/>
							</div>
						</li>
						<li>
							<h6 className="col-sm-20">是否选框f2：</h6>
							<div className="col-sm-80">
								<label><span><input checked={this.state.f2} onChange={this.F2.bind(this)} className="checkbox" type="checkbox"/></span></label>
							</div>
						</li>
						<li>
							<h6 className="col-sm-20">多选框f3：</h6>
							<div className="col-sm-80">
								<label><span><input value='react' onChange={this.F3.bind(this)} checked={this.state.f3.a === 'react'} className="checkbox" type="checkbox" name='a' /></span></label>
								<label><span><input value='angular' onChange={this.F3.bind(this)} checked={this.state.f3.b === 'angular'} className="checkbox" type="checkbox" name="b" /></span></label>
								<label><span><input value='vue' onChange={this.F3.bind(this)} checked={this.state.f3.c === 'vue'} className="checkbox" type="checkbox" name="c" /></span></label>
							</div>
						</li>
						<li>
							<h6 className="col-sm-20">单选框f4：</h6>
							<div className="col-sm-80">
								<label className="radio mr10"><span><input type="radio" name="f4" value='man' checked={this.state.f4 === 'man'} onChange={this.F4.bind(this)}/></span></label>
								<label className="radio"><span><input type="radio" name="f4" value="woman" checked={this.state.f4 === 'woman'} onChange={this.F4.bind(this)}/></span></label>
							</div>
						</li>
						<li>
							<h6 className="col-sm-20">下拉框f5：</h6>
							<div className="col-sm-80">
								<select name="code" value={this.state.f5} onChange={this.F5.bind(this)}>
									<option>angular</option>
									<option>react</option>
									<option>vue</option>
								</select>
							</div>
						</li>
						<li className="mt10">
							<h6 className="col-sm-20">换行文本框f6：</h6>
							<div className="col-sm-80 _fl"><textarea value={this.state.f6} onChange={this.F6.bind(this)} className="_w200" name="txt" placeholder="请输入文字"></textarea></div>
						</li>
						<li className="mt20 res-btn">
							<h6 className="col-sm-20">&nbsp;</h6>
							<div className="col-sm-80"><button className="btn-my-default">确认</button></div>
						</li>
					</ul>
				</form>
				<pre style={{color:'blue',fontSize:'14px'}}>{JSON.stringify(this.state,null,'\t')}</pre>
			</div>
		)
	}
}

export default connect(FormBase)
