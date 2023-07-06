import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const WatchlistTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 800;
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff 50% ,rgba(66, 67, 73, 0.5) 75%, rgba(0,212,255,0) 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: rgba(255,255,255, .2); 
  -moz-text-fill-color: rgba(255,255,255, .2);
  align-self: flex-start;
  margin-left: 1.9em;
  border-bottom: ${props => `2px solid ${props.theme.colors.yellow}`};
  width: 100%;
  @media (min-width: ${mobileQuery}px) {
    font-size: 3rem;
  }
`
export { WatchlistTitle }