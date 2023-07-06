import styled from 'styled-components';
import { mobileQuery } from '../../../styles-variables';
import { CloseButton, CloseIcon } from '../SearchBar/SearchBar.Styles';

const SignInOverlay = styled.div`
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  position: absolute;
  display: flex;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  -ms-overflow-style: none;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2em 0 6em;
  background: ${props => props.is_mobile === 'true' ? `url('/signIn_bg-mobile.webp') no-repeat` : `url('/signIn_bg.webp') no-repeat`};
  background-position: center;
  background-size: cover;
  box-shadow: -5px 0 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 99999;
  background-color: rgba(0,0,0,.9);
  transition: all 1s ease;
  @media (min-width: ${mobileQuery}px) {
    overflow-y: hidden !important;
    padding: 2em 0 0 0;
    height: 100vh;
}
&::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
`

const CloseSignBtn = styled(CloseButton)`
  top: 3%;
  left: 88%;
`

const CloseSignIcon = styled(CloseIcon)`

`

const SignLogo = styled.img`
  width: 180px;
  padding: 0 1em 1em;
  @media (min-width: ${mobileQuery}px) {
    width: 250px;
  }
`

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  background-color: rgba(15, 16, 25, .7);
  box-shadow: -5px 0 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: ${props => `2px solid ${props.theme.colors.cardsBorder}`};
  border-radius: 15px;
  color: #fff;
  padding: 3em 2em;
  text-shadow: ${ props => props.theme.shadows.textSoft };
  transition: all .3s ease;
  @media (min-width: ${mobileQuery}px) {
    width: 600px;
  }
`

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em;
  @media (min-width: ${mobileQuery}px) {
    gap: .7em;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const SignTitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
`

const SignText = styled.p`
  font-size: .9rem;
`

const SignInput = styled.input`
  font-size: 1rem;
  background-color: rgba(15, 16, 25, .2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #ffb625;
  text-indent: 1.2em;
  width: 100%;
  height: 50px;
  font-family: inherit;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  transition: all .7s ease-in-out;
  cursor: pointer;
    z-index: 1;
  &::placeholder {
    color: #a7a7a7;
    text-indent: 1.2em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    background-color: rgba(15, 16, 25, 1);
    border-color: rgb(252, 74, 122);
    outline: none;
    cursor: text;
  }
  &:focus::placeholder {
    text-indent: 1.2em;
  }
  @media (min-width: ${mobileQuery}px) {
    margin: 0 auto;
    border-radius: 10px;
    width: 70%;
    /* font-size: 1rem; */
    /* text-indent: 2em; */
  }
`
const ErrorAlert = styled.p`
  color: red;
  padding: 0;
`

const FormBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${ props => props.theme.colors.yellow};
  font-family: inherit;
  cursor: pointer;
  height: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-shadow: ${ props => props.theme.shadows.textSoft };
  margin: .8em 0;
  transition: all .3s ease;
  @media (min-width: ${mobileQuery}px) {
    width: 70%;
    margin: 1.5em 0 2em;;
  }
  &:hover {
    border-color: ${ props => props.theme.colors.fucsia };
    background-color: rgba(15, 16, 25, .2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`

const FormRadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: ${props => `2px solid ${props.theme.colors.yellow}`};
  padding: .5em 2em;
  border-radius: 25px;
  margin-top: .5em;
`

const FormRadioLabel = styled.label`
  color: #FFF;
  display: flex;
  align-items: center;
  gap: .1em;
`

const FormRadioBtn = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: ${ props => `2px solid ${props.theme.colors.yellow }`};
  margin-right: 5px;

  &:checked {
    background: ${ props => props.theme.colors.fucsia };
    border: ${ props => `2px solid ${props.theme.colors.darkBg }`};
  }
`

const AvatarRelativeBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  @media (min-width: ${mobileQuery}px) {
    width: 70%;
  }
`

const AvatarsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3em;
  z-index: 2;
`

const AvatarsImg = styled.img`
  width: 35px;
  object-fit: cover;
  transition: all .3s ease-in-out;
  cursor: pointer;
  border: ${props => props.is_selected === 'true' ? `2px solid ${props.theme.colors.fucsia}` : 'none' };
  border-radius: 50%;
  box-shadow: ${props => props.is_selected === 'true' ? `${props.theme.shadows.boxHard}` : 'none' };
  opacity: ${props => props.is_selected === 'true' ? '1' : '.6' };
  @media (min-width: ${mobileQuery}px) {
    width: ${props => props.is_selected === 'true' ? '70px' : '40px' };
  }
  &:hover {
    width: 70px;
    opacity: 1;
  }
  &:active, &:focus {
    border: ${ props => `1px solid ${props.theme.colors.fucsia}` };
  }
`
const SwitchToLogin = styled.span`
  text-decoration: underline;
  font-size: .9rem;
  color: ${ props => props.theme.colors.fucsia};
  cursor: pointer;
  transition: all .3s ease-in-out;
  padding: 0 .1em .5em;
   &:hover {
    opacity: .7;
  }
`


export { SignInOverlay, SignLogo, SignWrapper, SignForm, SignInput, SignTitle, SignText, FormContainer, AvatarsWrapper, AvatarsImg, AvatarRelativeBox, FormBtn, SwitchToLogin, CloseSignBtn, CloseSignIcon, ErrorAlert, FormRadioWrapper,FormRadioBtn, FormRadioLabel }
