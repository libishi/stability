import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import {
  // SearchOutlined,
  // HomeOutlined,
  SettingOutlined,
  PartitionOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import {
  PillIcon,
  Plantcon,
  CompanyIcon,
  FingerPrintIcon,
  EmployeesIcon,
} from '../icons/SVGIcons'

const { SubMenu, Item } = Menu

export const SideMenu = () => {
  return (
    <div>
      <Menu
        theme="light"
        inlineIndent={30}
        className="layout-sider-menu"
        mode="inline"
      >
        <SubMenu
          key="COMPANY"
          icon={<SettingOutlined />}
          title="Company Windows"
        >
          <Item key="ProductsApplicationTable" icon={<FingerPrintIcon />}>
            <NavLink to="/">ProductsApplicationTable</NavLink>
          </Item>

          <Item key="ApplicationNew296" icon={<LineChartOutlined />}>
            <NavLink to="/ApplicationNew296">ApplicationNew296</NavLink>
          </Item>
          <Item key="ApplicationNew425" icon={<LineChartOutlined />}>
            <NavLink to="/ApplicationNew425">ApplicationNew425</NavLink>
          </Item>
          <Item key="ApplicationRE296" icon={<LineChartOutlined />}>
            <NavLink to="/ApplicationRE296">ApplicationRE296</NavLink>
          </Item>
          <Item key="ApplicationRE425" icon={<LineChartOutlined />}>
            <NavLink to="/ApplicationRE425">ApplicationRE425</NavLink>
          </Item>
          <Item key="ApplicationNew645" icon={<LineChartOutlined />}>
            <NavLink to="/ApplicationNew645">ApplicationNew645</NavLink>
          </Item>

          <Item key="ProcessingTable" icon={<CompanyIcon />}>
            <NavLink to="/ProcessingTable">ProcessingTable</NavLink>
          </Item>
        </SubMenu>

        <SubMenu key="EDA" icon={<SettingOutlined />} title="EDA Windows">
          <Item key="NewTasks" icon={<PillIcon />}>
            <NavLink to="/NewTasks">NewTasks</NavLink>
          </Item>

          <Item key="NewTasksSecond" icon={<Plantcon />}>
            <NavLink to="/NewTasksSecond">NewTasksSecond</NavLink>
          </Item>

          <Item key="EvaluationTable" icon={<EmployeesIcon />}>
            <NavLink to="/EvaluationTable">EvaluationTable</NavLink>
          </Item>

          <Item key="EvaluationForm" icon={<PartitionOutlined />}>
            <NavLink to="/EvaluationForm">EvaluationForm</NavLink>
          </Item>
        </SubMenu>

        {/* <Item key="Search" icon={<SearchOutlined />}>
          <NavLink to="/">Search</NavLink>
        </Item> */}
      </Menu>
    </div>
  )
}
