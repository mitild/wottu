import { useState, useEffect, useContext } from 'react'
import { SignForm, SignInput, SignTitle, SignText, FormContainer, AvatarsWrapper, AvatarsImg, AvatarRelativeBox, FormBtn, SwitchToLogin, ErrorAlert, FormRadioWrapper,FormRadioBtn, FormRadioLabel } from './SignUp.Styles'
import avatars from '../../utils/avatars'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {
  const [ selectedAvatar, setSelectedAvatar ] = useState(avatars)
  const [ userAvatar, setUserAvatar ] = useState('')
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ age, setAge ] = useState(null)
  const [ error, setError ] = useState("")
  const { usersDb, setUsersDb, setUserName, setCurrentAvatar } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
      const filteredAvatarUrl = selectedAvatar.find(avatar => avatar?.isSelected === true)
      const avatarUrl = filteredAvatarUrl ? filteredAvatarUrl.img : '/avatar-placeholder.png'
      setUserAvatar(avatarUrl)
  }, [selectedAvatar])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersDb))
  }, [usersDb])

  const handleAvatars = (e) => {
    const { id } = e.target;
    const updatedAvatars = selectedAvatar.map(avatar => avatar.id === id ? { ...avatar, isSelected: !avatar.isSelected } : {...avatar, isSelected: false});
    setSelectedAvatar(updatedAvatars)
  }

  const switchToLogin = () => {
    navigate('/login')
  }

  const avatar = selectedAvatar.map(({ img, id, isSelected })=> 
      <AvatarsImg 
        key={ id } 
        id={ id }
        src={ img } 
        is_selected={ isSelected.toString() }
        alt='Avatar image' 
        onClick={ handleAvatars }
      />
    )

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
      setUsersDb((prev) => [...prev, { userName: name, email: email, age: age, avatarUrl: userAvatar }])
      setUserName(name)
      setCurrentAvatar(userAvatar)
    }   
    catch (err) {
      setError(err.code)
    }
  }

    return (
      <FormContainer>
        <SignForm onSubmit={ handleSignUp }>
          <SignTitle>Sign Up</SignTitle>
          <SignInput 
            placeholder='UserName'
            type='text'
            onChange={ (e) => setName(e.target.value) }
            required={ true }
          />
          <SignInput 
            placeholder='Email'
            type='email'
            onChange={ (e) => setEmail(e.target.value)}
            required={ true }
          />
          <SignInput 
            placeholder='Password'
            type='password'
            onChange={ (e) => setPassword(e.target.value)}
            autoComplete="off"
            required={ true }
          />
          <FormRadioWrapper>
            Age:
            <FormRadioLabel
              htmlFor='+18'
            >
              <FormRadioBtn
                type='radio'
                value='+18'
                name='age'
                id='+18'
                checked={ age === "+18"}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              +18 
            </FormRadioLabel>
            <FormRadioLabel
              htmlFor='-18'
            >
              <FormRadioBtn
                type='radio'
                value='-18'
                id='-18'
                name='age'
                checked={ age === "-18"}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              -18 
            </FormRadioLabel>
          </FormRadioWrapper>
          {
            error
            &&
            <ErrorAlert>{ error }</ErrorAlert>
          }
          {
            age === '-18'
            &&
            <ErrorAlert>Under 18 years old user can only visit the homepage, but not save to watchlist, perform searches within our site nor navigate it.</ErrorAlert>
          }
          <SignText>
            Choose an Avatar
          </SignText>
          <AvatarRelativeBox>
            <AvatarsWrapper>
              { avatar }
            </AvatarsWrapper>
          </AvatarRelativeBox>
          <FormBtn>Sign Up</FormBtn>
        </SignForm>
        <SignText>
          Already have an account? <SwitchToLogin onClick={ switchToLogin }>Login</SwitchToLogin> instead.
        </SignText>
      </FormContainer>
    )
}

export default SignUpForm
