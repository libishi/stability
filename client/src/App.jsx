import { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Card } from 'antd'
import { FramerContainer } from './components/layouts/framers/FramerContainer'
import { TheBackTop } from './components/layouts/TheBackTop'
import { TheLayout } from './components/layouts/ant-layout/Full'
import routes from './routes'

export const App = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(height) {
    setMenuHeight(height)
  }

  function reset() {
    setMenuHeight('auto')
  }

  return (
    <TheLayout pathSnippets={pathSnippets}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} exact>
              <Card className="filterCardStyle" style={{ height: menuHeight }}>
                <FramerContainer calcHeight={calcHeight} reset={reset}>
                  {/* <ConfigProvider direction="rtl"> */}
                  <Component />
                  {/* </ConfigProvider> */}
                </FramerContainer>
              </Card>
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
      <TheBackTop />
    </TheLayout>
  )
}
