import { NavLink } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import routes from '../../../routes'

export const BreadCrumbs = ({ pathSnippets }) => {
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
		const routeLabel = routes.filter(route => route.path === url)

		return routeLabel.map(route => {
			document.title = route.name
			return (
				<Breadcrumb.Item key={url}>
					<NavLink to={url}>{route.name}</NavLink>
				</Breadcrumb.Item>
			)
		})
	})

	const breadcrumbItems = [
		<Breadcrumb.Item key="home">
			<NavLink to="/">Home</NavLink>
		</Breadcrumb.Item>,
	].concat(extraBreadcrumbItems)

	return (
		<Breadcrumb style={{ margin: '16px 50px', zIndex: 3 }}>
			{breadcrumbItems}
		</Breadcrumb>
	)
}
