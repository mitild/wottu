import { SignForm, SignInput, SignTitle, SignText, FormContainer, FormBtn, SwitchToLogin, ErrorAlert } from './SignUp.Styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword}  from 'firebase/auth'

const LoginForm = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    }
    catch (err) {
      const error = err.code === 'auth/user-not-found' ? "Email is not in our DataBase" : "Wrong password"
      setError(error)
    }
  }

  const switchToSignUp = () => {
    navigate('/sign-up')
  } 

  return (
    <FormContainer>
      <SignForm onSubmit={ handleSubmit }>
        <SignTitle>Log In</SignTitle>
        <SignInput 
          placeholder='Email'
          type='email'
          onChange={ (e) => setEmail(e.target.value)}
        />
        <SignInput 
          placeholder='Password'
          type='password'
          onChange={ (e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        {
          error
          &&
          <ErrorAlert>{ error }</ErrorAlert>
        }
      <FormBtn>Log in</FormBtn>
      </SignForm>
      <SignText>
        Dont have an account yet? <SwitchToLogin onClick={ switchToSignUp }>Sign up</SwitchToLogin> instead.
      </SignText>
    </FormContainer>
  )
}

export default LoginForm