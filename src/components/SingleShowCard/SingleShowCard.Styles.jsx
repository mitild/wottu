import styled from 'styled-components'
import YouTube from 'react-youtube'
import { mobileQuery } from '../../../styles-variables';
import { MdPlayArrow, MdOutlineStarPurple500 } from 'react-icons/md'

const SingleCardContainer = styled.div`
  width: 100%;
  padding-bottom: 5em;
  color: #FFF;
  line-height: 1;
  text-shadow: ${props => props.theme.shadows.textSoft};
`

const SingleHeroContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 4em;
  background-image: ${props => `linear-gradient(0deg, #0f1019 0%, rgba(15,16,25,0.5) 35%, rgba(0,212,255,0) 100%), url(${props.bg_img})`};
  background-repeat: no-repeat;
  background-size: ${props => props.type === '/person' ? 'contain' : 'cover'};
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
`

const SingleLayout = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
`
const TwoColumnsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${mobileQuery}px) {
    flex-direction: row;
    align-items: start;
  }
`

const SingleTitleWrapper = styled.div`
  position: relative;
`

const SingleCardTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  max-width: 85%;
  @media (min-width: ${mobileQuery}px) {
    font-size: 4rem;
    max-width: 92%;
  }
`

const SingleCardDirectors = styled.h3`
  font-size: 1rem;
  padding-top: .4em;
  @media (min-width: ${mobileQuery}px) {
    font-size: 1.7rem;
  }
`

const SingleCardMainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
`

const SingleCardTrailer = styled(YouTube)`
  width: 100%;
  height: 100%;
`

const SingleCardImg = styled.img`
  /* width: 100%;
  object-fit: cover; */
`


const SingleCardMainInfoItem = styled.div`
  font-size: .8rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  background-color: ${props => props.theme.shadows.cardsBg};
  box-shadow: ${props => props.theme.shadows.boxHard};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${props => `1px solid ${props.theme.colors.cardsBorder}`};
  border-radius: 10px;
  width: 118px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: .1em;
  justify-content: center;
  align-items: center;
  @media (min-width: ${mobileQuery}px) {
    height: 90px;
    width: 130px;
    font-size: 1rem;
  }
`

const InfoTitle = styled.p`
  color: #dbdbdb;
  font-size: .5rem;
  font-weight: 300;
  text-shadow: ${props => props.theme.shadows.textSoft};
  @media (min-width: ${mobileQuery}px) {
    font-size: .6rem;  
  }
`

const InfoData = styled.p`
  font-size: .9rem;
`

const SingleTrailerBtn = styled(SingleCardMainInfoItem)`
  background-color: ${props => props.theme.colors.yellow};
  transition: all .3s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.cardsBg};
    border-color: ${props => props.theme.colors.yellow};
  }
`

const PlayIcon = styled(MdPlayArrow)`
  color: inherit;
  font-size: 1.8rem;
  border-color: transparent;
  @media (min-width: ${mobileQuery}px) {
    font-size: 3rem;  
  }
`
const VotesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2em;
`

const StarIcon = styled(MdOutlineStarPurple500)`
  color: ${props => props.theme.colors.yellow};
  font-size: 1.1rem;
  @media (min-width: ${mobileQuery}px) {
    font-size: 1.3rem;  
  }
`

const SingleCardDate = styled.p`

`

const SingleCardGenresUl = styled.ul`
  display: flex;
  justify-content: start;
  gap: 2em;
`

const SingleCardGenresLi = styled.li`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255, .6);
  &:first-of-type {
    list-style: none;
  }
`

const SingleCardTitles = styled.h3`
  font-size: 1.5rem;
  color: rgba(255,255,255, .6);
`

const SingleCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  color: rgba(255,255,255, .9);
  @media (min-width: ${mobileQuery}px) {
    max-width: 70%;
    font-size: 1.1rem;
  }
`

const ProvidersWrapper = styled.div`
  display: flex;
  gap: .5em;
  margin-top: 3em;
  @media (min-width: ${mobileQuery}px) {
    margin-top: 0;
  }
`

const CastWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  @media (min-width: ${mobileQuery}px) {
    display: flex;
    justify-content: start;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 2em;
    &::-webkit-scrollbar {
      background-color: rgba(15, 16, 25, 1);
      box-shadow: ${props => `inset ${props.theme.shadows.boxSoft}`};
      border-radius: 15px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: ${props => `inset ${props.theme.shadows.boxSoft}`};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.yellow};
      border-radius: 15px;
    }
  }
`

const CastImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const SingleCastImg = styled(CastImgWrapper)`
  margin-top: 2em;
  @media (min-width: ${mobileQuery}px) {
    margin-top: 0;
  }
`


const CastImage = styled.img`
  min-width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.boxSoft};
  @media (min-width: ${mobileQuery}px) {
    min-width: 200px;
    height: 300px;
  }
`

const CastName = styled.p`
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff 50% ,rgba(66, 67, 73, 0.5) 75%, rgba(0,212,255,0) 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: rgba(255,255,255, .2); 
  -moz-text-fill-color: rgba(255,255,255, .2);
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  max-width: 180px;
  @media (min-width: ${mobileQuery}px) {
    font-size: 1.6rem;
    max-width: 200px;
  }
`

export { SingleCardContainer, SingleHeroContainer, SingleLayout, SingleTitleWrapper, SingleCardMainInfo, PlayIcon, SingleCardImg, SingleCardDirectors, StarIcon, SingleCardTitle, InfoTitle, SingleCardMainInfoItem, SingleTrailerBtn, SingleCardDate, SingleCardGenresUl, SingleCardGenresLi, SingleCardTrailer, VotesWrapper, SingleCardTitles, SingleCardDescription, TwoColumnsLayout, ProvidersWrapper, CastImage, CastWrapper, CastName, CastImgWrapper, InfoData, SingleCastImg }