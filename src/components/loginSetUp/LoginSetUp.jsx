import { useDispatch, useSelector } from 'react-redux'
import AppModal from '../../components/modal/Modal'
import Login from '../../components/loginForm/Login'
import Register from '../../components/registerForm/Register'
import { loginUser, registerUser } from '../../redux/actions/auth'
import { toast } from 'react-toastify'
import { useState } from 'react'

const LoginSetUp = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  const [loading, setLoading] = useState(false)

  const [isLogin, setIsLogin] = useState(true)

  console.log('[Products] fetched', products)
  const handleLogin = (values) => {
    setLoading(true)
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        console.log('Logged  in')
        setIsModalOpen(false)
      })
      .catch((err) => {
        toast(err?.message || 'failed to Sign in', { type: 'error' })
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1200)
      })
  }

  const handleRegister = (values) => {
    setLoading(true)
    dispatch(registerUser(values))
      .unwrap()
      .then(() => {
        console.log('Logged  in')
        setTimeout(() => {
          setIsLogin(true)
        }, 1200)
      })
      .catch((err) => {
        toast(err?.message || 'failed to Sign up', { type: 'error' })
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1200)
      })

    console.log('Register values:', values)
  }
  return (
    <AppModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleCancel={() => setIsModalOpen(false)}
    >
      <div className="flex justify-center items-center bg-gray-100 overflow-hidden">
        <div className="relative w-full max-w-md">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isLogin ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* LOGIN FORM */}

            <Login onSubmit={handleLogin} loading={loading} setIsLogin={setIsLogin} />

            {/* REGISTER FORM */}
            <Register onSubmit={handleRegister} loading={loading} setIsLogin={setIsLogin} />
          </div>
        </div>
      </div>
    </AppModal>
  )
}

export default LoginSetUp
