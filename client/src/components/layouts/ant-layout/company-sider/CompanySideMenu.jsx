import { NavLink } from 'react-router-dom'
import { Menu, Badge } from 'antd'

import { ProfileCard } from './ProfileCard'
import {
	CalendarOutlined,
	HomeOutlined,
	SettingOutlined,
} from '@ant-design/icons'

const { SubMenu, Item } = Menu

export const CompanySideMenu = ({ collapsed }) => {
	return (
		<div>
			<Menu
				theme="light"
				inlineIndent={30}
				className="layout-sider-menu"
				mode="inline"
			>
				<Item key="Home" icon={<HomeOutlined />}>
					<NavLink to="/Home">Home</NavLink>
				</Item>

				<SubMenu
					key="AdminTools"
					icon={<SettingOutlined />}
					title="Control Center"
				>
					<Item key="AuditTrail">
						<NavLink to="/Reports/AuditTrail">Audit Trail</NavLink>
					</Item>
					<Item key="ManageUser">
						<NavLink to="/CompanyUsers">
							Manage Authenticated Users
						</NavLink>
					</Item>
					<Item key="GeneralInformation">
						<NavLink to="/GeneralInformation">
							General Information
						</NavLink>
					</Item>
					<Item key="ManufaturerInfo">
						<Badge dot offset={[7]}>
							<NavLink to="/ManufaturerInfo">
								Manufaturers Information
							</NavLink>
						</Badge>
					</Item>

					<Item key="EmployeesInfo">
						<NavLink to="/EmployeesInfo">
							Employees Information
						</NavLink>
					</Item>

					<Item key="ProductionInfo">
						<NavLink to="/ProductionInfo">
							Production Lines & Machines
						</NavLink>
					</Item>
				</SubMenu>

				<Item key="Calendar" icon={<CalendarOutlined />}>
					<NavLink to="/Calendar">Calendar</NavLink>
				</Item>
			</Menu>
			{!collapsed && <ProfileCard />}
		</div>
	)
}
