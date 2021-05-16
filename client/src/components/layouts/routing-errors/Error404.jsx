import { NavLink } from 'react-router-dom'
import { Result, Button } from 'antd'
export function Error404() {
	return (
		<Result
			status="404"
			title="404"
			style={{
				background: 'none',
			}}
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<NavLink to="/">
					<Button type="primary">Back Home</Button>
				</NavLink>
			}
		/>
	)
}
