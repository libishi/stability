import { useState } from 'react'
import { useLocalStorage } from '../utils/hooks/useLocalStorage'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AntInput, AntInputPassword } from '../commons/AntField'

import { Form, Card, Button, Checkbox, Alert, Avatar } from 'antd'
import EdaLoader from '../layouts/EdaLoader'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import { IS_LOGGED_IN } from '../utils/graphql/frontend/TypeDefs'

const { validateLogin } = Validator

// const initialValues = {
// 	Username: '',
// 	Password: '',
// }
const userInitialValue = {
  id: 0,
  EntityId: 0,
  isAlpha: false,
  Username: '',
  Firstname: '',
  Lastname: '',
  UserAvatar: '',
  FullName: '',
}

export const Login = () => {
  const [IMG, setIMG] = useState(null)
  const [userValue, setUser] = useLocalStorage('user', userInitialValue)
  const [permissionsValue, setPermissions] = useLocalStorage('permissions')
  const onSubmit = (values) => {
    signIn({
      variables: {
        Username: values.Username,
        Password: values.Password,
      },
    })
  }

  const formHook = useForm()

  return loading ? (
    <EdaLoader />
  ) : (
    <div className="login">
      <Card className="login-card">
        {error && (
          <Alert
            message="Login Process Error"
            description="Incorrect username or password"
            type="error"
            closable
            showIcon
          />
        )}
        <Form onFinish={formHook.handleSubmit(onSubmit)} name="normal_login">
          {IMG && (
            <div className="center-content">
              <Avatar size={100} shape="square" />
            </div>
          )}
          <AntInput
            md={24}
            formHook={formHook}
            prefix={<UserOutlined />}
            placeholder="Username"
            name="Username"
            required
            hasFeedback
          />

          <AntInputPassword
            md={24}
            formHook={formHook}
            prefix={<LockOutlined />}
            placeholder="Password"
            name="Password"
            required
            hasFeedback
          />

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="/home/ahmed">Forgot Password?</a>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
