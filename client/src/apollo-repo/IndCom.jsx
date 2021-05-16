import { App } from '../App'
import { Alert } from 'antd' //ConfigProvider
import Particle from '../components/layouts/Particle'

function IsOnline() {
  return !navigator.onLine ? (
    <Alert
      message="you are Not connected to the Internet"
      type="warning"
      closable
    />
  ) : null
}

function NavApp() {
  return (
    <>
      <Particle />
      <IsOnline />
      <App />
    </>
  )
}

export const IsLoggedIn = () => {
  return <NavApp />
}
