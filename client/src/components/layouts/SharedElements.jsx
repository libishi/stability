import { Typography, Col, Button, Form } from 'antd'
import { FramerItem } from './framers/FramerItem'

const { Title } = Typography

export const Title3 = ({ label }) => {
	return (
		<FramerItem>
			<Title level={3} strong>
				{label}
			</Title>
		</FramerItem>
	)
}

export const CenteredButton = ({
	offset,
	className,
	disabled,
	loading,
	icon,
	title,
}) => {
	return (
		<FramerItem delay={0.5}>
			<Col offset={offset || '10'} xs={24} md={4} lg={4}>
				<Form.Item>
					<Button
						htmlType="submit"
						className={`m-top ${className}`}
						disabled={disabled}
						loading={loading}
						icon={icon}
						block
						type="primary"
					>
						{title || 'Submit'}
					</Button>
				</Form.Item>
			</Col>
		</FramerItem>
	)
}
