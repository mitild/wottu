import { useContext } from 'react'
import { NavFullContainer, NavbarContainer, NavbarLogo, NavbarAvatar, NavbarIconsContainer,  NavbarLogoWrapper, AvatarWrapper } from './Navbar.Styles'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import DropdownMenu from '../DropdownMenu/DropdownMenu'


const Navbar = () => {  
  const { currentAvatar, menuDropdown, setMenuDropdown } = useContext(UserContext)

  return (
    <>
      <NavFullContainer>
        <NavbarContainer>
          <NavbarLogoWrapper>
            <Link to={ '/' }>
            <NavbarLogo 
              src="/wide_white.png" 
              alt="Wottu's logo" 
            />
            </Link>
            <NavbarIconsContainer
              onClick={ () => setMenuDropdown(true) }
              onMouseEnter={ () => setMenuDropdown(true) }
              onMouseLeave={ () => setMenuDropdown(false) }
            >
              <AvatarWrapper>
                <NavbarAvatar 
                  src={ currentAvatar ? currentAvatar : '/avatar-placeholder.png' }
                  alt="user's avatar" 
                />
              </AvatarWrapper>
              { menuDropdown
              &&
              <DropdownMenu
                // hovered={ menuDropdown }
                // setHovered={ setMenuDropdown }
              />
              }
            </NavbarIconsContainer>
          </NavbarLogoWrapper>
        </NavbarContainer>
      </NavFullContainer>
    </>
  )
}

export default Navbar