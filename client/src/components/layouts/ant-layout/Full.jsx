import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Layout } from 'antd'
import { Head } from './head/Head'
import { SideMenu } from './SideMenu'
import { BreadCrumbs } from './BreadCrumbs'
import EDALogo from '../../../styles/images/last.jpg'

const { Header, Sider, Content, Footer } = Layout

export const TheLayout = ({ children, pathSnippets }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [logoSize, setLogoSize] = useState(100)
  const handleClick = () => {
    if (collapsed) {
      setCollapsed(false)
      setLogoSize(100)
    } else {
      setCollapsed(true)
      setLogoSize(50)
    }
  }

  return (
    <Layout className="layout">
      <Sider
        width={250}
        collapsible
        collapsed={collapsed}
        onCollapse={handleClick}
        className="layout-sider"
      >
        <NavLink to="/Home">
          <div className="logo">
            <img
              alt="company logo"
              style={{ width: logoSize, opacity: 1 }}
              src={EDALogo}
            />
          </div>
        </NavLink>
        <SideMenu />
      </Sider>
      <Layout>
        <Header className="layout-header">
          <Head handleClick={handleClick} collapsed={collapsed} />
        </Header>
        <BreadCrumbs pathSnippets={pathSnippets} />

        <Content className="layout-content">{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Developed and Designed by PMIS Unit - © 2020 Egyptian Drug Authority
          All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  )
}
