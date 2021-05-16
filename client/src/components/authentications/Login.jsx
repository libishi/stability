import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApolloClient, useMutation } from '@apollo/client'
// import { useApolloClient, useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../utils/graphql/mutations/AuthMutations'
import { Form, Card, Input, Button, Checkbox, Alert } from 'antd'
import Spinner from '../layouts/Spinner'
import { Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { IS_LOGGED_IN } from '../utils/graphql/frontend/TypeDefs'

const switchVariants = {
	initial: {
		y: -200,
		opacity: 0,
	},
	last: {
		y: 0,
		opacity: 1,

		transition: {
			duration: 1.5,
			delay: 1.5,
			when: 'beforeChildren',
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
}

const childVariants = {
	initial: {
		y: -300,
		// x: -320,
		opacity: 0,
	},
	last: {
		y: 0,
		// y: -55,
		// x: -320,
		opacity: 1,

		transition: {
			duration: 3,
			delay: 2,
			when: 'beforeChildren',
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
}
export const Login = () => {
	const [Username, setUsername] = useState('')
	const [Password, setPassword] = useState('')

	const client = useApolloClient()

	const [signIn, { loading, error }] = useMutation(
		LOGIN_MUTATION,
		{
			onCompleted({ signIn }) {
				try {
					if (signIn.token) {
						localStorage.setItem('token', signIn.token)
						localStorage.setItem('UserID', signIn.me.id)
						localStorage.setItem('Username', signIn.me.Username)
						localStorage.setItem('Email', signIn.me.Email)

						client.writeQuery({
							query: IS_LOGGED_IN,
							data: { isLoggedIn: true },
						})
					}
					return `Incorrect username or password`
				} catch (e) {
					return `Incorrect username or password`
				}
			},
		},
		{
			onError() {
				return `Incorrect username or password`
			},
		}
	)

	const handleLogin = async () => {
		await signIn({
			variables: {
				Username,
				Password,
			},
		})
	}

	return loading ? (
		<Spinner />
	) : (
		<div className="logan">
			<motion.div
				variants={switchVariants}
				initial="initial"
				animate="last"
				exit="exit"
				className="backdrop"
			>
				<motion.div
					variants={childVariants}
					initial="initial"
					animate="last"
					exit="exit"
					className="text"
				>
					Company Profile
				</motion.div>
			</motion.div>

			{/* <div className="backdrop">
				<p className="text multiply">Company Profile</p>
			</div> */}

			<motion.div
				initial={{ y: 250, opacity: 0 }}
				animate={{ y: 150, opacity: 1.0 }}
				transition={{ delay: 1.5, duration: 1.5 }}
			>
				<Row>
					<Col xs={1} sm={2} md={8} />
					<Col xs={14} sm={14} md={8}>
						{error && (
							<Alert
								message="Login Process Error"
								description="Incorrect username or password"
								type="error"
								closable
								showIcon
							/>
						)}
						<Card className="neumorphic-div">
							<Form
								onFinish={handleLogin}
								style={{ marginTop: '1%' }}
								name="normal_login"
								initialValues={{
									remember: true,
								}}
							>
								<Form.Item
									rules={[
										{
											required: true,
											message: 'Please input your Username!',
										},
									]}
								>
									<Input
										prefix={
											<UserOutlined className="site-form-item-icon" />
										}
										placeholder="Username"
										name="Username"
										onChange={e => {
											setUsername(e.target.value)
										}}
									/>
								</Form.Item>
								<Form.Item
									rules={[
										{
											required: true,
											message: 'Please input your Password!',
										},
									]}
								>
									<Input.Password
										prefix={
											<LockOutlined className="site-form-item-icon" />
										}
										placeholder="Password"
										label="Password"
										type="Password"
										name="Password"
										onChange={e => {
											setPassword(e.target.value)
										}}
									/>
								</Form.Item>
								<Form.Item>
									<Form.Item
										name="remember"
										valuePropName="checked"
										noStyle
									>
										<Checkbox>Remember me</Checkbox>
									</Form.Item>

									<a className="login-form-forgot" href="/home/ahmed">
										Forgot Password
									</a>
								</Form.Item>
								<Form.Item>
									<Button block type="primary" htmlType="submit">
										Log in
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
					<Col xs={1} sm={2} md={4} />
				</Row>
			</motion.div>
		</div>
	)
}
