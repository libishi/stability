import { Col, Button, Form } from 'antd'

const TheButton = props => {
	return (
		<Col offset={props.offset || '10'} xs={24} md={4} lg={4}>
			<Form.Item>
				<Button
					htmlType="submit"
					className={props.className}
					disabled={props.disabled}
					loading={props.loading}
					icon={props.icon}
					block
					type="primary"
				>
					{props.title || 'Submit'}
				</Button>
			</Form.Item>
		</Col>
	)
}

export default TheButton
