import { NavLink } from 'react-router-dom'
import { Result, Button } from 'antd'

export default function Error500() {
	return (
		<Result
			status="500"
			title="500"
			style={{
				background: 'none',
			}}
			subTitle="Sorry, the server is reporting an error."
			extra={
				<NavLink to="/">
					<Button type="primary">Back Home</Button>
				</NavLink>
			}
		/>
	)
}
