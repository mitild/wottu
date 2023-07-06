import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables';

const NavFullContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgb(15, 16, 25, .7) 0%, rgba(15,16,25,0.3) 35%, rgba(0,212,255,0) 100%);
  z-index: 9;
  @media (min-width: ${mobileQuery}px) {
  padding-top: 1.2em;
}
`

const NavbarContainer = styled.nav`
  /* position: fixed; */
  width: 100%;
  padding: 13px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${mobileQuery}px) {
    width: 90%;
  }
`
const NavbarLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavbarLogo = styled.img`
  width: 120px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.612));
`
const AvatarWrapper = styled.div`
  position: relative;
`
const NavbarAvatar = styled.img`
  width: 40px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.612));
  cursor: pointer;
  z-index: 99999;
`

const NavbarIcon = styled.svg`
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.612));
`

const NavbarIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.7em;
  z-index: 1;
`

const NavbarUlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const NavbarUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6em;
  margin-top: .3em;
`

const NavbarLi = styled.li`
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  font-weight: 500;
`

const NavbarMenuArrow = styled.svg`
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9));
`



export { NavFullContainer, NavbarContainer, NavbarLogo, NavbarAvatar, NavbarIcon, NavbarIconsContainer, NavbarUlWrapper, NavbarUl, NavbarLi,  NavbarMenuArrow, NavbarLogoWrapper, AvatarWrapper }