import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DropdownContainer, DropdownUl, DropdownLi, DropdownWatchlistIcon, DropdownLogOutIcon, DropdownLogInIcon } from './DropdownMenu.Styles'
import { UserContext } from '../../context/userContext'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'


const DropdownMenu = () => {  
  const { userName, setMenuDropdown } = useContext(UserContext)
  const navigate = useNavigate()

  let isLoggedUser = userName ? true : false

  const handleWatchlist = () => {
    navigate('my-watchlist')
    setTimeout(() => {
      setMenuDropdown(false)
    }, 1000);
  }

  const handleLogOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
      setTimeout(() => {
        setMenuDropdown(false)
      }, 1000);
    }
    catch (err) {
      console.log('logout', err)
    }
  }

  const handleLogIn = () => {
    navigate('/login')
    setTimeout(() => {
      setMenuDropdown(false)
    }, 1000);
  }
  
  return (
    <DropdownContainer>
      {
        isLoggedUser
        ?
        <>
          <p>{ `@${userName}` }</p>
          <DropdownUl>
            <DropdownLi
              onClick={ handleWatchlist }
            >
              <DropdownWatchlistIcon />
              My Watchlist
            </DropdownLi>
            <DropdownLi
              onClick={ handleLogOut }
            >
              <DropdownLogOutIcon />
              Log Out
            </DropdownLi>
          </DropdownUl>    
        </>
          :
          <DropdownLi
            onClick={ handleLogIn }
          >
          <DropdownLogInIcon />
            Log In
          </DropdownLi>
      }
    </DropdownContainer>
  )
}

export default DropdownMenu