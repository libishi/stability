import { useState } from 'react'
import { Menu, Space } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { AnimatePresence } from 'framer-motion'
import {
	forward,
	backward,
	FramerDropMenu,
} from '../../framers/FramerAdvanced'
import { ArrowIcon, ChevronIcon } from '../../icons/SVGIcons'

const { Item } = Menu

const DropItem1 = ({ next, setTrue, calcHeight }) => {
	return (
		<>
			<FramerDropMenu
				key="11"
				variants={forward}
				calcHeight={calcHeight}
			>
				<Menu>
					<Item key="4" onClick={setTrue}>
						<UserOutlined />
						Username
						<div className="icon-right">
							<ChevronIcon />
						</div>
					</Item>
					<Menu.Divider />
					<Item key="5" onClick={setTrue}>
						<LogoutOutlined />
						Logout
					</Item>
				</Menu>
			</FramerDropMenu>
		</>
	)
}
const DropItem2 = ({ next, setFalse, calcHeight }) => {
	return (
		<>
			<FramerDropMenu
				key="22"
				variants={backward}
				calcHeight={calcHeight}
			>
				<Menu>
					<Item key="6" onClick={setFalse}>
						<Space>
							<ArrowIcon />
						</Space>
					</Item>
					<Menu.Divider />
					<Item key="7" onClick={setFalse}>
						<UserOutlined />
						Username
						<div className="icon-right">
							<ChevronIcon />
						</div>
					</Item>
					<Menu.Divider />
					<Item key="8" onClick={setFalse}>
						<LogoutOutlined />
						Logout
					</Item>
				</Menu>
			</FramerDropMenu>
		</>
	)
}

export const AntDrop = () => {
	const [next, setNext] = useState(false)
	const [menuHeight, setMenuHeight] = useState(false)

	function calcHeight(height) {
		setMenuHeight(height)
	}

	const setFalse = () => {
		setNext(false)
	}

	const setTrue = () => {
		setNext(true)
	}

	return (
		<div className="dropmenu" style={{ height: menuHeight }}>
			<AnimatePresence initial={false}>
				{!next ? (
					<DropItem1
						key="a"
						next={next}
						setTrue={setTrue}
						setFalse={setFalse}
						calcHeight={calcHeight}
					/>
				) : (
					<DropItem2
						key="b"
						next={next}
						setTrue={setFalse}
						setFalse={setFalse}
						calcHeight={calcHeight}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}

export const UserMenu = ({ user, handleLogout }) => {
	return (
		<Menu>
			<Item key="4">
				<Space>
					<UserOutlined />
					{user?.Username}
				</Space>
			</Item>
			<Menu.Divider />
			<Item key="6" onClick={handleLogout}>
				<LogoutOutlined />
				Logout
			</Item>
		</Menu>
	)
}
