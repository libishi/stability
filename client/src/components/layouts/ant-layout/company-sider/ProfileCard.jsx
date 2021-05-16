import { Card, Typography, Avatar, Rate, Progress } from 'antd'
import IMG1 from '../../../../styles/images/3.jpg'

const { Title } = Typography

export const ProfileCard = () => {
	return (
		<>
			<Card>
				<Rate defaultValue={1} />
				<Title level={4} className="text-center">
					{/* {comp?.companyfilter[0].CompName} */}
				</Title>
				<div className="text-center">
					<Avatar src={IMG1} size={90} />
				</div>

				<Typography style={{ marginTop: 40 }}>
					Validation Progress
					<Progress
						strokeColor={{
							from: '#108ee9',
							to: '#87d068',
						}}
						percent={54.4}
						status="active"
					/>
				</Typography>
			</Card>
		</>
	)
}
