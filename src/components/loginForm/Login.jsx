import { Button, Card, Form, Input } from 'antd'
import React from 'react'

const Login = ({ onSubmit, loading, setIsLogin }) => {
  return (
    <Card
      title="Login"
      className="w-full flex-shrink-0 shadow-lg rounded-2xl border-none"
      styles={{ header: { textAlign: 'center', fontSize: '1.25rem' } }}
    >
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" className="rounded-md py-2" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter your password" className="rounded-md py-2" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            className="rounded-md !bg-primary hover:bg-blue-700"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <p className="text-sm text-center mt-2">
        Don’t have an account?{' '}
        <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">
          Sign up
        </button>
      </p>
    </Card>
  )
}

export default Login
