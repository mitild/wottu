import styled, { keyframes, css } from 'styled-components'
import YouTube from 'react-youtube'
import { mobileQuery } from '../../../styles-variables';
import { MdClose } from "react-icons/md"

const ModalAnimationIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`
const ModalAnimationOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`

const ModalVideoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70vh;
  animation: ${css `${ ModalAnimationIn } .3s ease backwards`}; 
  /* animation: ${ props => props.show === 'true' ? css`${ ModalAnimationIn } 1s` : css`${ ModalAnimationOut } .3s ease` };  */
  background-color: ${props => props.theme.shadows.cardsBg};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 999999;
  @media (min-width: ${mobileQuery}px) {
    height: 100vh;
  }
`

const Video = styled(YouTube)`
  width: 370px;
  height: 208px;
  object-fit: cover;
  box-shadow: ${props => props.theme.shadows.boxHard};
  animation: ${css `${ ModalAnimationIn } .7s ease`}; 
  /* animation: ${ props => props.show === 'true' ? css`${ ModalAnimationIn } 1.5s ease` : css`${ ModalAnimationOut } .7s ease` };  */
  @media (min-width: ${mobileQuery}px) {
    width: 900px;
    height: 506px;
  }
`
const VideoModalCLoseBtn = styled.button`
  position: absolute;
  right: 4%;
  top: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 16, 25, .2);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); 
  border: 2px solid rgba(255, 255, 255, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s ease-in-out;
  z-index: 99999;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgb(252, 74, 122);
    transform: rotate(90deg);
  }
  @media (min-width: ${mobileQuery}px) {
    left: 81%;
    top: 10%;
    width: 50px;
    height: 50px;
  }
`

const CloseIcon = styled(MdClose)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.4rem;
  font-weight: bolder;
`


export { ModalVideoContainer, Video, VideoModalCLoseBtn, CloseIcon  }