import styled, { keyframes } from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const AnimateOpacity = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const SqTag = styled.button`
  font-size: .7rem;
  font-family: inherit;
  background-color: rgba(15, 16, 25, .7);
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  min-width: max-content;
  padding: .5em 1em;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  animation: ${AnimateOpacity} 2s ease-in-out forwards;
  transition: all .3s;
  @media (min-width: ${mobileQuery}px) {
    font-size: .8rem;
  }
  &:active, &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${ props => props.bg === 'tv' ? `rgb(252, 74, 122)` : `rgb(114, 117, 166)`};
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

export { SqTag }