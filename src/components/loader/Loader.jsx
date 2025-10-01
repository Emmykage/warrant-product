import { Spin } from 'antd'
import React from 'react'

const Loader = ({ size = 'smaill' }) => {
  return <Spin size={size} />
}

export default Loader
