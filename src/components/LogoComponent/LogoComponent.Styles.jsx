import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const Logo = styled.img`
  width: ${props => props.width};
  
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,.9));
  padding-bottom: .5em;
  @media (min-width: ${mobileQuery}px) {
    width: ${props => props.desktop_width};
  }
`

export { Logo }