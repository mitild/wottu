import styled, { keyframes, css } from 'styled-components'
import { mobileQuery } from '../../../styles-variables'
import { MdClose } from "react-icons/md"

const SearchMainWrapper = styled.div`
  padding-top: 15%;
  position: absolute;
  align-self: center;
  z-index: 9999;
   @media (min-width: ${mobileQuery}px) {
    padding-top: 5%;
  }
`

const AnimateEntrance = keyframes`
  from {
    height: 0;
    border-radius: 35px;
    opacity: 0;
    border-color: transparent;
  }
  to {
    height: 70vh;
    opacity: 1;
  }
`

const AnimateExit = keyframes`
  from {
    height: 70vh;
    opacity: 1;
  }
  to {
    height: 0;
    border-radius: 35px;
    opacity: 0;
    border-color: transparent;
  }
`

const SearchContainer = styled.div`
  top: 0;
  width: 98%;
  height: 70vh;
  margin: -20px auto 0;
  padding: 3em 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2em;
  background-color: rgba(15, 16, 25, .2);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0 0 25px 25px;
  transition: all .7s ease-in-out;
  animation: ${ props => props.searching === 'true' ? css`${ AnimateEntrance } 1s ease-in-out both` : css`${ AnimateExit } .3s ease-in-out both` }; 
  overflow-y: scroll;
  @media (min-width: ${mobileQuery}px) {
    width: 60%;
    height: 70vh;
    margin-top: -25px;
    overflow-y: hidden;
  }
`

const TitleAndTagContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const SuggestedCardsWrapper = styled(TitleAndTagContainer)`
  flex-direction: row;
  justify-content: space-between;
`

const TitleHighlight = styled.span`
  color: ${props => `${props.color}`};
  font-size: 1%.1;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
`

const TagTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`

const AnimateInputIn = (from, to) => keyframes`
  from {
    width: ${ from };
  }
  to {
    width: ${ to };
  }
`
const SearchForm = styled.form`
  position: relative;
`

const AnimateInputOut = (from, to) => keyframes`
  from {
    width: ${ from };
  }
  to {
    width: ${ to };
  }
`
const InputContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 50px;
`

const SearchInput = styled.input`
  position: relative;
  font-size: 1rem;
  background: url('/magnifier.svg') no-repeat;
  background-position: 1em 50%;
  background-color: rgba(15, 16, 25, .2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 25px;
  border: 2px solid #ffb625;
  text-indent: 3.1em;
  width: 70%;
  animation: ${ props => props.searching === 'true' ? css`${ AnimateInputIn('70%', '98%') } .7s ease-in-out both` : css`${ AnimateInputOut('98%', '70%') } .3s ease-in-out both` }; 
  height: 50px;
  margin: .7em auto;
  font-family: inherit;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  transition: all .7s ease-in-out;
  cursor: pointer;
    z-index: 1;
  &::placeholder {
    color: #a7a7a7;
    text-indent: 3.1em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    background-color: rgba(15, 16, 25, 1);
    border-color: rgb(252, 74, 122);
    background-image: none;
    outline: none;
    cursor: text;
  }
  &:focus::placeholder {
    text-indent: 3%.1;
  }
  @media (min-width: ${mobileQuery}px) {
    animation: ${ props => props.searching === 'true' ? css`${ AnimateInputIn('20%', '60%') } .6s ease-in-out both` : css`${ AnimateInputOut('60%', '20%') } .3s ease-in-out both` }; 
    margin: 0 auto;
    border-radius: 40px;
    /* font-size: 1rem; */
    /* text-indent: 2em; */
  }
`
const AnimateBtn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const CloseButton = styled.button`
  position: absolute;
  left: 75%;
  top: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 16, 25, .2);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); 
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s ease-in-out;
  z-index: 99999;
  animation: ${ AnimateBtn } 1.5s ease-in-out forwards;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgb(252, 74, 122);
  }
  @media (min-width: ${mobileQuery}px) {
    left: 81%;
    top: 15%;
  }
`

const CloseIcon = styled(MdClose)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.4rem;
  font-weight: bolder;
  transition: all .3s ease-in-out;
  &:hover {
    transform: rotate(90deg);
  }
`

export { SearchInput, SearchContainer, CloseButton, CloseIcon, InputContainer, TagTitle, TagContainer, TitleAndTagContainer, TitleHighlight, SuggestedCardsWrapper, SearchForm, SearchMainWrapper }
