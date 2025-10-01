import React from 'react'
import { Button, Card, Form, Input } from 'antd'

const Register = ({ onSubmit, loading, setIsLogin }) => {
  return (
    <Card
      title="Register"
      className="w-full flex-shrink-0 shadow-lg rounded-2xl ml-4"
      headStyle={{ textAlign: 'center', fontSize: '1.25rem' }}
    >
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input placeholder="Enter your username" className="rounded-md py-2" />
        </Form.Item>

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
            className="rounded-md !bg-primary hover:bg-green-700"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <p className="text-sm text-center mt-2">
        Already have an account?{' '}
        <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">
          Login
        </button>
      </p>
    </Card>
  )
}

export default Register
