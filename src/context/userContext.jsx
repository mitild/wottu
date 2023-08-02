import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const UserContext = createContext()
const StoredUsers = JSON.parse(localStorage.getItem('users'))

const UserContextProvider = ({ children }) => {
  const [ userName, setUserName ] = useState('')
  const [ currentAvatar, setCurrentAvatar ] = useState('')
  const [ menuDropdown, setMenuDropdown ] = useState(false)
  const [ userAge, setUserAge ] = useState('')
  const [ usersDb, setUsersDb ] = useState(StoredUsers ? StoredUsers : [])
  const { error, setError } = useState(undefined)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser && usersDb.length > 0) {
        const user = usersDb.find((user) => user.email === currentUser.email)
        setCurrentAvatar(user ? user.avatarUrl : '/avatar-placeholder.png')
        setUserName(user && user.userName)
        setUserAge(user && user.age)
      }
      else {
        setCurrentAvatar('/avatar-placeholder.png')
        setUserName(undefined)
        setUserAge('')
      }
    })
    return listen
  }, [usersDb])

  return (
    <UserContext.Provider
      value={
        {
          usersDb, 
          setUsersDb,
          userName,
          setUserName,
          currentAvatar,
          error, 
          setError,
          menuDropdown, 
          setMenuDropdown,
          userAge
        }
      }
    >
      { children }
    </UserContext.Provider>
  )
}
UserContextProvider.propTypes = {
  children: PropTypes.object
}

export default UserContextProvider