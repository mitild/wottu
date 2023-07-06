import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const Text= styled.h3`
  /* font-size: 1rem; */
  font-size: ${props => `${props.textsize}rem`};
  font-weight: 500;
  margin-top: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  padding-bottom: 1em;
  @media (min-width: ${mobileQuery}px) {
    /* font-size: 1.2rem; */
    font-size: ${props => `${props.textmedia}rem`};
    padding-bottom: 0;
    margin-top: 10px;
  }
`

const ShowMore = styled.span`
  border: none; 
  background: none;
  font-family: inherit;
  /* font-size: .9em; */
  font-size: ${props => `${props.moresize}rem`};
  color: #FFF;
  cursor: pointer;
  &:hover {
    color: rgba(252, 74, 122, 1);
  }
  @media (min-width: ${mobileQuery}px) {
    /* font-size: 1rem; */
    font-size: ${props => `${props.moremedia}rem`};
  }
`

export { Text, ShowMore }