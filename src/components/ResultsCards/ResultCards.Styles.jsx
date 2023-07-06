import styled from 'styled-components'
import { CatGenreUl, CatGenre } from '../CategoryCarousel/CategoryCarousel.Styles'
import { mobileQuery } from '../../../styles-variables'
import { AnimatedEntrance } from '../HomeAnimated/HomeAnimated.Styles'
import { MdOutlineStarPurple500 } from 'react-icons/md'

const FlexContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7em 0 3em;
  animation: ${ AnimatedEntrance } 3s ease forwards;
  background: linear-gradient('0deg, #5d66b5 0%, rgba(226, 43, 177, 0.5) 35%, rgba(0,212,255,0) 100%');
`

const CardsFlexWrapper = styled(FlexContainer)`
  padding-top: 0;
`

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  /* grid-gap: 1em; */
  width: 90%;
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.boxSoft};
  grid-row-gap: 2px;
  @media (min-width: ${mobileQuery}px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const ResultCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 360px;
  border-radius: 10px;
  background-color: ${props => props.theme.shadows.cardsBg};
  box-shadow: ${props => props.theme.shadows.boxHard};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  color: white;
  text-shadow: ${props => props.theme.shadows.textSoft};
  cursor: pointer;
  overflow: hidden;
  @media (min-width: ${mobileQuery}px) {
    width: 300px;
    height: 530px;
  }
`

const ResultCardImg = styled.div`
  width: 100%;
  height: 240px;
  min-height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-image: ${props => `linear-gradient(0deg, #0f1019 0%, rgba(15,16,25,0.5) 35%, rgba(0,212,255,0) 100%), url(${props.bgimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  border-radius: 10px 10px 0 0;
  padding: .6em;
  @media (min-width: ${mobileQuery}px) {
    width: 100%;
    height: 450px;
    min-height: 450px;
  }
`

const ClickableElement = styled.span`
  position: absolute;
  background-color: transparent;
  height: 50%;
  width: 100%;
  @media (min-width: ${mobileQuery}px) {
    height: 73%;
  }
`

const ResultCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .5em .5em 1.6em;
  height: 100%;
`

const FirstDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ResultCardTitle = styled.h4`
  text-transform: uppercase;
  font-size: 1.2rem;
  max-width: 90%;
  text-shadow: ${props => props.theme.shadows.textSoft};
`

const ResultType = styled.p`
  background-color: ${props => props.type === 'movie' ? props.theme.colors.lightBlue : props.type === 'tv' ? props.theme.colors.fucsia : props.theme.colors.yellow };
  padding: .3em 1em;
  border-radius: 10px 0 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 500;
  text-transform: uppercase;
  font-size: .9em;
`

const KnownFor = styled.p`
  font-size: 1rem;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: .5em;
  @media (min-width: ${mobileQuery}px) {
    flex-wrap: nowrap;
  }
`

const ReleaseDate = styled(KnownFor)`
  font-weight: 500;
  font-size: .8rem;
  width: 50%;
  border: ${props => `2px solid ${props.type === 'movie' ? props.theme.colors.lightBlue : props.type === 'tv' ? props.theme.colors.fucsia : props.theme.colors.yellow}`};
  border-radius: 5px;
  padding: .1em .3em;
  text-align: center;
  @media (min-width: ${mobileQuery}px) {
    width: auto;
  }
`

const GenresUl = styled(CatGenreUl)`
  padding-top: .4em;
  flex-wrap: wrap;
  line-height: .4;
`

const Genres = styled(CatGenre)`
  font-weight: 500;  
  font-size: .8rem;
  padding-right: .9em;
  text-align: center;
  @media (min-width: ${mobileQuery}px) {
  padding-right: .3em;
  }
`

const DurationAndEpisodes = styled.p`
  font-size: .9rem;
  font-weight: 500;
  width: 100%;
  padding-top:.7em;
  @media (min-width: ${mobileQuery}px) {
    width: auto;
    padding-top:0;
  }
`

const MoreInfoBtn = styled.button`
  border: ${props => `2px solid ${props.type === 'movie' ? props.theme.colors.lightBlue : props.type === 'tv' ? props.theme.colors.fucsia : props.theme.colors.yellow}`};
  font-size: .9rem;
  background: none;
  font-family: inherit;
  padding: .5em 1.5em;
  border-radius: 10px;
  align-self: center;
  justify-self: flex-end;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.type === 'movie' ? props.theme.colors.lightBlue : props.type === 'tv' ? props.theme.colors.fucsia : props.theme.colors.yellow};
  }
`
const VotesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .2em;
`
const StarIcon = styled(MdOutlineStarPurple500)`
  color: ${props => props.theme.colors.yellow};
  font-size: .9rem;
`
const Votes = styled.p`
  color: ${props => props.theme.colors.yellow};
  font-size: .9rem;
`

export { ResultsContainer, ResultCardContainer, ResultCardImg, ResultCardInfoWrapper, ResultCardTitle, ResultType, FlexContainer, CardsFlexWrapper, KnownFor, ReleaseDate, ItemsContainer, Genres, GenresUl, DurationAndEpisodes, MoreInfoBtn, FirstDataWrapper, VotesContainer, StarIcon, Votes, ClickableElement }