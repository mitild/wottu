import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'
import { IoGlassesOutline, IoGlasses } from 'react-icons/io5'

const FeaturedContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: end;
  background-image: ${props => `linear-gradient(0deg, #0f1019 0%, rgba(15,16,25,0.5) 35%, rgba(0,212,255,0) 100%), url(${props.featuredimg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  height: 585px;
  @media (min-width: ${mobileQuery}px) {
    background-size: cover;
    height: 90vh;
  }
`
const FeaturedSectionWrapper = styled.div`
  /* width: 100%; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  @media (min-width: ${mobileQuery}px) {
    width: 90%;
    margin: 0 auto;
  }
`

const FeaturedTitle = styled.h1`
  color: #FFFFFF;
  text-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.288);
  font-size: 2rem;
  max-width: 220px;
  @media (min-width: ${mobileQuery}px) {
    font-size: 3rem;
    max-width: 500px;
  }
`

const FeauturedLogo = styled.img`
  width: 250px;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6));
`

const FeaturedIsMovieBadge = styled.div`
  position: absolute;
  padding: .5em 2em;
  top: -50px;
  left: 0;
  background-color: ${props => props.ismovie ? `rgba(114, 117, 166, 0.693)` : `rgba(252, 74, 122, 0.693)` };
  border-radius: 0 25px 25px 0;
  font-size: .8rem;
  font-weight: 700;
  @media (min-width: ${mobileQuery}px) {
    font-size: .9rem;
    border-radius: 25px;
    position: relative;
    top: 0;
    margin-bottom: .8em;
  }
`

const FeaturedInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: .6em;
  padding: 0 1em 3em;
  line-height: 1.3;
  max-width: 350px;
  @media (min-width: ${mobileQuery}px) {
    max-width: 500px;
    padding-bottom: 4em;
  }
  /* justify-content: end;
  align-items: end; */
`

const FeaturedIcon = styled.svg`
`

const FeaturedDescription = styled.p`
  color: #FFFFFF;
  font-size: .7rem;
  text-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.407);
  @media (min-width: ${mobileQuery}px) {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`

const FeaturedBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 1em;
  @media (min-width: ${mobileQuery}px) {
    margin-top: 1em;
  }
`

const FeaturedBtn = styled.button`
  display: flex;
  align-items: center;
  gap: .4em;
  padding: .8em 2.7em;
  background-color: rgba(255, 182, 37, 0.775);
  border: none;
  border-radius: 25px;
  font-size: .8em;
  box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.288);
  transition: all .3s ease;
  &:hover {
    background-color: rgba(114, 117, 166, .8);
    outline: none;
  }
  @media (min-width: ${mobileQuery}px) {
    font-size: .9rem;
  }
`

const FeaturedNotWatchedIcon = styled(IoGlassesOutline)`
  cursor: pointer;
  /* background: none;          */
  color: #FFF;
  font-size: 2.3rem;
  width: 37px;
  height: 37px;
  padding: 5px;
  border: none;
  background-color: rgba(252, 74, 122, 0.693);
  border-radius: 50%;
  box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.288);
  transition: all .3s ease;
  &:hover {
    color: #DEDEDE;
  }
`

const FeaturedWatchedIcon = styled(IoGlasses)`
  cursor: pointer;
  background: none;         
  color: #FFF;
  font-size: 2.5rem;
  width: auto;
  padding: 0;
  border: none;
  transition: all .4s ease;
  &:hover {
    color: #DEDEDE;
  }
`

export { FeaturedContainer, FeaturedTitle, FeaturedInfoWrapper, FeaturedDescription, FeaturedBtn, FeaturedIcon, FeaturedIsMovieBadge, FeaturedSectionWrapper, FeaturedWatchedIcon, FeaturedNotWatchedIcon, FeaturedBtnsWrapper, FeauturedLogo }