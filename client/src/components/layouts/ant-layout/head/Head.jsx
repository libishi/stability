import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { handleLogout } from '../../../utils/services/Logout'
import { BellIcon, MessengerIcon, CaretIcon } from '../../icons/SVGIcons'
import { Dropdown, Badge, Avatar, Space, Button } from 'antd'
import { AntDrop, UserMenu } from './HeadMenus'

export const Head = ({ collapsed, pathSnippets, user, handleClick }) => {
  const [counter] = useState(0)
  return (
    <>
      <Dropdown
        arrow
        placement="bottomCenter"
        trigger={['click']}
        overlay={<UserMenu user={user} handleLogout={handleLogout} />}
      >
        <div className="head-items">
          <Button>
            <Space>
              <Avatar size="small" />
              "user" <CaretIcon />
            </Space>
          </Button>
        </div>
      </Dropdown>

      <div className="head-items">
        <Badge count={counter} overflowCount={9}>
          <NavLink to="/Messenger">
            <Button type="text" icon={<MessengerIcon />} />
          </NavLink>
        </Badge>
      </div>

      <div className="head-items">
        <Dropdown
          arrow
          placement="bottomLeft"
          trigger={['click']}
          overlay={<AntDrop />}
        >
          <Badge count={counter} overflowCount={9}>
            <Button type="text" icon={<BellIcon />} />
          </Badge>
        </Dropdown>
      </div>
    </>
  )
}
