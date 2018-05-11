/* ====================================== 图标 Icon 集合  ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== antd
import { Button, Icon } from 'antd';
import Data from './icon-data';
// =====================================================================
class IconAll extends React.Component{
	goSelf(){
		this.props.$action.getCode('views/antd/icon/icon-all.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<Button type="primary" onClick={this.goSelf.bind(this)}>图标 Icon 集合 </Button>
				</div>
				{
					Data.map((value,index)=>(
						<div key={index} className="icon-data-list">
							<h3>{value.title}</h3>
							<ul className="clearfix">
								{
									value.data.map((v,i)=>
										<li key={i} className="col-sm-33 col-md-25 fxm"><Icon type={v}/> <span style={{cursor:'text'}}>{v}</span></li>
									)
								}
							</ul>
						</div>
					))
				}
			</div>
		)
	}
}

export default connect(IconAll)
