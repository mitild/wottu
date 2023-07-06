import styled from 'styled-components'
import { GiPopcorn } from 'react-icons/gi'
import { MdDone } from 'react-icons/md'
import { mobileQuery } from '../../../styles-variables'

const AddWLBtn = styled.button`
  width: ${props => props.added === 'true' ? `${props.text}` : `${props.size}` };
  height: ${props => props.added === 'true' ? 'auto' : `${props.size}` };
  border-radius: ${props => props.added === 'true' ? '25px' : '50%' };
  /* padding: ${props => props.added === 'true' ? '.8em 2.7em' : '0' }; */
  border: 3px solid transparent;
  display: flex;
  justify-content: ${props => props.justifytext};
  align-items: center;
  background-color: ${props => props.added === 'true' ? 'transparent' : `${props.theme.colors.fucsia}` };
  box-shadow: ${props => props.theme.shadows.boxSoft};
  transition: ${props => props.added === 'true' ? 'none' : 'all .2s ease' };
  &:hover {
    background-color: transparent; 
    border-color: ${props => props.added === 'true' ? 'transparent' : `${props.theme.colors.fucsia}` };
  }
  &:disabled {
    border: 3px solid rgba(151, 151, 151, 0.2);
    background-color: rgba(151, 151, 151, 0.2);
  }
`

const AddWLIcon = styled(GiPopcorn)`
  font-size: 1.4rem;
  color: ${ props => props.is_disabled === 'true' ? 'rgba(151, 151, 151, 0.2)' : '#FFF'};
  opacity: ${ props => props.is_disabled === 'true' ? '.9' : '1'};
  text-shadow: ${props => props.theme.shadows.textSoft};
  &:hover {
    color: ${props => props.theme.colors.fucsia};
  }
`

const AddedText = styled.p`
  display: flex;
  justify-content: ${props => props.justifytext};
  align-items: center;
  font-weight: 400;
  font-size: .7rem;
  text-wrap: none;
  text-shadow: ${props => props.theme.shadows.textSoft};
  color: ${ props => props.is_disabled === 'true' ? 'rgba(151, 151, 151, 0.2)' : '#FFF'};
  opacity: ${ props => props.is_disabled === 'true' ? '.9' : '1'};
  @media (min-width: ${mobileQuery}px) {
    font-size: ${props => props.font};
  }
`

const AddedIcon = styled(MdDone)`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${ props => props.is_disabled === 'true' ? 'rgba(151, 151, 151, 0.2)' : '#008000'};
  opacity: ${ props => props.is_disabled === 'true' ? '.9' : '1'};
  text-shadow: ${props => props.theme.shadows.textSoft};
`

export { AddWLBtn, AddWLIcon, AddedText, AddedIcon }