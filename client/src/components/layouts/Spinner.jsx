import { Spin } from 'antd'
// import { LoadingOutlined } from '@ant-design/icons'

const Spinner = props => {
	return (
		<div className={props.className || 'spinner-screen-center'}>
			<Spin size="large" tip="Loading..." spinning={props.spinning}>
				{props.children}
			</Spin>
		</div>
	)
}

export default Spinner
