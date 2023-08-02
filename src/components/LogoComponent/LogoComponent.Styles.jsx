import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const Logo = styled.img`
  width: auto;
  max-height: ${props => props.height};
  max-width: ${props => props.width};
  
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,.9));
  padding-bottom: .5em;
  @media (min-width: ${mobileQuery}px) {
    width: auto;
    max-width: ${props => props.desktop_width};
    max-height: ${props => props.desktop_height};
  }
`

export { Logo }