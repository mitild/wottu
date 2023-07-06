import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const ProtectedRoutes = () => {
  const { userAge } = useContext(UserContext)

  const handleUnderAgeUser = () => {
    alert('Sorry you must be logged in or have an adult account to perfom this action. If you are 18 years old or older, please create a new account')
    return <Navigate to={'/sign-up'} />
  }

  return (
    userAge === '+18' ? <Outlet /> : handleUnderAgeUser()
  )
}

export default ProtectedRoutes