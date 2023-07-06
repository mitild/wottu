import styled, { keyframes } from  'styled-components'
import { GiPopcorn } from 'react-icons/gi'
import { BiLogOut } from 'react-icons/bi'

const AnimatedEntrance = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`

const DropdownContainer = styled.div`
  position: absolute;
  top: 60%;
  right: .7em;
  width: 200px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5em;
  box-shadow: ${props => props.theme.shadows.boxHard};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  z-index: -1;
  animation: ${ AnimatedEntrance } .7s ease-in-out both;
  /* padding: 1em 5em 3em 1em; */
  /* left: 0; */
`

const DropdownUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-shadow: ${props => props.theme.shadows.textSoft};
`

const DropdownLi = styled.li`
  border: ${props => `1.5px solid ${props.theme.colors.yellow}`};
  text-decoration: none;
  font-size: .9rem;
  border-radius: 20px;
  padding: .4em .8em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
  box-shadow: ${props => props.theme.shadows.boxSoft};
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    border-color: ${props => props.theme.colors.fucsia};
    background-color: rgba(0,0,0, .2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

const DropdownWatchlistIcon = styled(GiPopcorn)`
  color: #FFF;
  text-shadow: ${props => props.theme.shadows.textSoft};
`

const DropdownLogOutIcon = styled(BiLogOut)`
  color: #FFF;
  text-shadow: ${props => props.theme.shadows.textSoft};
`

const DropdownLogInIcon = styled(BiLogOut)`
  color: #FFF;
  text-shadow: ${props => props.theme.shadows.textSoft};
  transform: rotate(180deg);
`

export { DropdownContainer, DropdownUl, DropdownLi, DropdownWatchlistIcon, DropdownLogOutIcon, DropdownLogInIcon }