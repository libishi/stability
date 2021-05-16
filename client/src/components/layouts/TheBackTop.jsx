import { BackTop } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

export const TheBackTop = () => {
	return (
		<>
			<BackTop style={{ marginRight: '1px' }}>
				<div className="backTopStyle">
					<ArrowUpOutlined />
				</div>
			</BackTop>
		</>
	)
}

// visibilityHeight={300}
