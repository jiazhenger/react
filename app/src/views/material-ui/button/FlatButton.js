/* ====================================== FlatButton按钮  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== material-ui
import FlatButton  from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
// ===================================================================== styles
const styles = {
	uploadInput: {cursor: 'pointer',position: 'absolute',top: 0,bottom: 0,right: 0,left: 0,width: '100%',opacity: 0}
}
const mr10 = {marginRight:'10px'}
// =====================================================================
class FlatButtonPage extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/material-ui/button/FlatButton.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<FlatButton label="基本按钮" primary={true} onClick={this.goSelf.bind(this)} />
				</div>
				
				<h2 className="h40">4种按钮类型</h2>
				<div className="samebox c-mr10">
					<FlatButton label="default" style={mr10} />
    				<FlatButton label="primary" primary={true} style={mr10} />
    				<FlatButton label="secondary" secondary={true} style={mr10} />
    				<FlatButton label="disabled" disabled={true} style={mr10} />
				</div>
				
				<h2 className="h40">全屏按钮</h2>
				<div className="samebox">
					<FlatButton label="全屏按钮" primary={true} fullWidth={true} />
				</div>
				
				<h2 className="h40">上传按钮</h2>
				<div className="samebox">
					<FlatButton label="上传按钮" secondary={true} labelPosition="before" containerElement="label">
						<input type="file" style={styles.uploadInput}/>
					</FlatButton>
				</div>
				
				<h2 className="h40">图标按钮</h2>
				<div className="samebox">
					<FlatButton label="Label before" labelPosition="before" primary={true} icon={<ActionAndroid />} style={mr10} />
					<FlatButton
						href="https://github.com/callemall/material-ui"
						target="_blank"
						label="自定义图标按钮"
						secondary={true}
						icon={<FontIcon className="font-close" style={mr10} />}
						style={mr10}
					/>
					<FlatButton icon={<ActionAndroid />} style={mr10} />
					<FlatButton
      					backgroundColor="#a4c639"
      					hoverColor="#8AA62F"
      					icon={<ActionAndroid color={fullWhite} />}
      				/>
				</div>
			</div>
		)
	}
}

export default connect(FlatButtonPage)
