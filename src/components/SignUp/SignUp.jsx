import { mobileQuery } from "../../../styles-variables"
import LoginForm from "./LoginForm"
import { SignInOverlay , SignWrapper, SignLogo, CloseSignBtn, CloseSignIcon } from "./SignUp.Styles"
import SignUpForm from "./SignUpForm"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'


const SignUp = ({ method }) => {
  const navigate = useNavigate()
  const isMobile = window.innerWidth < mobileQuery

  const handleCloseBtn = () => {
    navigate('/')
  }

  return (
    <SignInOverlay
      is_mobile={ isMobile.toString() }
    >
      <SignLogo src="/signupLogo.png" />
      <SignWrapper>
        {
          method === 'sign-up'
          ?
          <SignUpForm
          />
          :
          <LoginForm 
          />
        }
      </SignWrapper>
      <CloseSignBtn 
        onClick={ handleCloseBtn }
      >
        <CloseSignIcon />
      </CloseSignBtn>
    </SignInOverlay>
  )
}
SignUp.propTypes={
  method: PropTypes.string
}
export default SignUp