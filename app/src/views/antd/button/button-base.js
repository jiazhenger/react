/* ====================================== 按钮 Button ====================================== */
import React from 'react';
import connect from '@redux/connect';
// ===================================================================== antd
import { Button, Radio, Icon, Menu, Dropdown } from 'antd';
const ButtonGroup = Button.Group;
// ===================================================================== Menu
const menu = (
	<Menu onClick={(e)=>{ console.log('click', e) }}>
	    <Menu.Item key="1">1st item</Menu.Item>
	    <Menu.Item key="2">2nd item</Menu.Item>
	    <Menu.Item key="3">3rd item</Menu.Item>
	</Menu>
);
// =====================================================================
class buttonBase extends React.Component{
	state={
		size:'large',
		loading: false,
    	iconLoading: false
	}
	goSelf(){
		this.props.$action.getCode('views/antd/button/button-base.js');
		this.props.history.push('/code')
	}
	render(){
		return (
			<div>
				<div className="samebox">
					<Button type="primary" onClick={this.goSelf.bind(this)}>按钮 Button</Button>
				</div>
				
				<div className="lh30 mvvm-code mt10">
					<dl className="mvvm-list samebox">
		        		<dt>Button 组件格式:</dt>
		        		<dd><b>&lt;Button type="dashed"&gt;button&lt;/Button&gt;</b></dd>
			        </dl>
				</div>
				
				<h2 className="h40">4种按钮类型</h2>
				<div className="samebox c-mr10">
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">Danger</Button>
				</div>
				
				<h2 className="h40">禁用按钮</h2>
				<div className="samebox c-mr10">
					<Button type="primary" disabled>Primary(disabled)</Button>
					<Button disabled>Default(disabled)</Button>
					<Button type="dashed" disabled>Dashed(disabled)</Button>
					<Button type="danger" disabled>Danger(disabled)</Button>
				</div>
				
				<h2 className="h40">按钮尺寸</h2>
				<div className="samebox">
					<div className="c-mr10">
						<Button type="primary" size="small">small</Button>
        				<Button type="primary" size="default">default</Button>
        				<Button type="primary" size="large">large</Button>
					</div>
				</div>
				
				<h2 className="h40">幽灵按钮</h2>
				<div className="samebox c-mr10" style={{background: 'rgb(190, 200, 200)'}}>
					<Button type="primary" ghost>Primary</Button>
					<Button ghost>Default</Button>
					<Button type="dashed" ghost>Dashed</Button>
					<Button type="danger" ghost>danger</Button>
				</div>
				
				<h2 className="h40">图标按钮</h2>
				<div className="samebox c-mr10">
					<Button shape="circle" icon="search" />
					<Button icon="search">Search</Button>
					<Button type="primary" shape="circle" icon="download" />
					<Button type="primary" icon="download">Download</Button>
					<Button type="primary"><Icon type="left" />prev</Button>
					<Button type="primary">next<Icon type="right" /></Button>
				</div>
				
				<h2 className="h40">加载中状态按钮</h2>
				<div className="samebox c-mr10">
					<Button type="primary" loading>Loading</Button>
					<Button type="primary" loading={this.state.loading} onClick={()=>{this.setState({ loading: true })}}>Click me!</Button>
					<Button type="primary" 
							icon="poweroff" 
							loading={this.state.iconLoading} 
							onClick={()=>{this.setState({ iconLoading: true });}}>Click me!</Button>
					<Button type="primary" shape="circle" loading />
				</div>
				
				<h2 className="h40">下拉按钮</h2>
				<div className="samebox c-mr10">
					<Dropdown overlay={menu}>
						<Button>more <Icon type="down" /></Button>
					</Dropdown>
				</div>
				
				<h2 className="h40">按钮组合</h2>
				<div className="samebox">
					{/* 无图标 */}
					<div className="c-mr10">
						<ButtonGroup>
							<Button>Cancel</Button>
							<Button type="primary">OK</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button disabled>L</Button>
							<Button disabled>M</Button>
							<Button disabled>R</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button type="primary">L</Button>
							<Button>M</Button>
							<Button>M</Button>
							<Button type="dashed">R</Button>
						</ButtonGroup>
					</div>
					{/* 有图标 */}
					<div className="mt10 c-mr10">
						<Button.Group size="large">
							<Button type="primary"><Icon type="left" />prev</Button>
							<Button type="primary">next<Icon type="right" /></Button>
						</Button.Group>
						<ButtonGroup>
							<Button type="primary" icon="cloud" />
							<Button type="primary" icon="cloud-download" />
						</ButtonGroup>
					</div>
					{/* radio 模拟按钮 */}
					<div className="mt10 c-mr10">
						<Radio.Group size={this.state.size} onChange={(e)=>{this.setState({size:e.target.value})}}>
							<Radio.Button value="large">Large</Radio.Button>
							<Radio.Button value="default">Default</Radio.Button>
							<Radio.Button value="small">Small</Radio.Button>
						</Radio.Group>
						<span className="ml10">{this.state.size}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(buttonBase)
