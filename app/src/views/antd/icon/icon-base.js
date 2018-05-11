/* ====================================== 图标 Icon  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== antd
import { Button, Icon } from 'antd';
// =====================================================================
class IconBase extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/antd/icon/icon-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<Button type="primary" onClick={this.goSelf.bind(this)}>图标 Icon</Button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>Icon 组件格式:</dt>
		        		<dd>
		        			<b className="mr20">&lt;Icon type="link" style=｛｛ fontSize: 24, color: '#08c' ｝｝ /&gt;</b>
		        			<Icon type="apple" style={{ fontSize: 24, color: '#08c' }} />
		        		</dd>
		        		<dd>
		        			<b className="mr20">&lt;Icon type="chrome" spin=｛true｝ style=｛｛ fontSize: 24, color: 'red' ｝｝ /&gt;</b>
		        			<Icon type="chrome" spin={true} style={{ fontSize: 24, color: 'red' }} />
		        		</dd>
			        </dl>
				</div>
			</div>
		)
	}
}

export default connect(IconBase)
