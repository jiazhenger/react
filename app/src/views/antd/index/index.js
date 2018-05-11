import React from 'react';
import { Button } from 'antd';
// =====================================================================
const link = {
	href: 'https://ant.design/docs/react/introduce-cn',
	target: '_blank'
}
const link2 = {
	href: 'http://ant-design.gitee.io/docs/react/introduce-cn',
	target: '_blank'
}
const Index = () => (
	<div className="samebox">
		<Button type="primary" style={{marginRight:'10px'}}><a {...link}>antd 官方文档</a></Button>
		<Button type="primary"><a {...link2}>antd 官方文档</a></Button>
	</div>
)

export default Index
