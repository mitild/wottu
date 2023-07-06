import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'
import YouTube from 'react-youtube'
import { MdAddCircleOutline, MdRemoveCircle, MdOutlineArrowDropDownCircle, MdOutlineArrowCircleUp } from "react-icons/md"

// "Cat" stands for Category

/////////////////////////////////////////
// GLOBAL CAROUSEL STYLES //
/////////////////////////////////////////


// CAROUSEL CONTAINER
const CatCarouselContainer = styled.div`
  margin: 1em 0 1em 1em;
  @media (min-width: ${mobileQuery}px) {
    width: 95%;
    margin-left: auto;
  }
`

const CatCarouselTitle = styled.h3`
  font-size: 1.2rem;
`

// CAROUSEL PARENT ITEM CONTAINER
const CatCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

// CAROUSEL ITEM BEFORE HOVER
const CatImgWrapper = styled.div`
  position: relative;
  background-image: ${props => `linear-gradient(to bottom, rgba(245, 246, 252, 0.123), rgba(13, 13, 13, 0.73)), url(${props.featuredimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 126px;
  border-radius: 5px;
  @media (max-width: ${mobileQuery}px) {
    height: 217px;
  }
`

// ELEMENT TO HANDLE HOVER REPLACEMENT
const MobileClickableEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 9;
`
// TITLE WHEN THERE'S NO MOVIE LOGO AVAILABLE
const CatNoTitle = styled.p`
  font-size: .7rem;
`

/////////////////////////////////////////
// HOVERED CARD STYLES //
/////////////////////////////////////////

// CAROUSEL ITEM HOVERED CONTAINER
const CatHoveredCard = styled.div`
  position: absolute;
  width: 95vw;
  height: 500px;
  box-shadow: 0px -1px 15px 6px rgba(255,255,255,0.10);
  border-radius: 5px;
  background-color: #0f1019;
  z-index: 99999;
  cursor:  pointer;
  @media (min-width: ${mobileQuery}px) {
    top: -175px;
    width: 420px;  
    height: 450px;
  }
`

// SPAN FOR TRIGGERING THE HOVER ACTIONS
const CatHoverElement = styled.span`
  cursor: pointer;
  height: 50%;
  width: 50%;
  position: absolute;
  background-color: transparent;
  /* z-index: 9999; */
  z-index: 8;
`


/////////////////////////////////////////
// HOVERED VIDEO //
/////////////////////////////////////////

const CatTrailerWrappwer = styled.div`
  width: 100%;
  height: 243px;
  cursor: pointer;
`

const CatCardTrailer = styled(YouTube)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

/////////////////////////////////////////
// HOVERED CARD INFO ELEMENTS //
/////////////////////////////////////////

// INFO PARENT CONTAINER
const CatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .5em 1em;
`

// CONTAINER WITH EVERY INFO ELEMENT
const CatTopInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

// TITLE FOR THE HOVERED CARD
const CatTitle = styled.p`
  font-weight: 500;
  line-height: 1.1;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
`

// CALL TO ACTION AND PROVIDER'S ICONS WRAPPER
const CatCAAndProvidersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5em;
`

// CALL TO ACTION ICONS WRAPPER
const CatCAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .2em;
`

// PROVIDERS ICON'S WRAPPER
const CatIconWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 45%;
`

// PROVIDERS ICON DIV LINK
const CatProviderLink = styled.a`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
`

// PLUS ICON
const AddToqueueIcon = styled(MdAddCircleOutline)`
  font-size: 1.9rem;
`

// MINUS ICON
const AddedToqueueIcon = styled(MdRemoveCircle)`
  font-size: 1.9rem;
` 

// ARROW DOWN ICON
const CatArrowDown = styled(MdOutlineArrowDropDownCircle)`
  font-size: 1.9rem;
  transition: all .3s ease;
  &:hover {
    color: ${props => props.theme.colors.fucsia}
  }
` 

// ARROW UP ICON
const CatArrowUp = styled(MdOutlineArrowCircleUp)`
  font-size: 1.9rem;
` 

// GENRE LIST
const CatGenreUl = styled.ul`
  display: flex;
  justify-content: start;
  gap: .9em;
`

// GENRE LIST ITEMS
const CatGenre = styled.li`
  font-size: .7rem;
  margin-right: .1em;
  color: rgba(255,255,255, .6);
  &:first-of-type {
    list-style: none;
  }
`
//DATE & DURATION WRAPPER
const CatDateDurationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5em;
  margin-block: .1em .5em;
`

// INFO TEXT
const CatInfo = styled.p`
  font-size: .9em;
`

// HIGHLIGHTED TEXT
const CatHighlighted = styled.p`
  font-size: .7em;
  background-color: rgba(114, 117, 166, 0.693);
  padding: .2em .5em;
  border-radius: 15px;
`

export { CatCarouselContainer, CatCardContainer, CatImgWrapper, CatTitle, CatCardTrailer, CatInfoContainer, CatNoTitle, CatProviderLink, CatIconWrapper, CatHoveredCard, CatTrailerWrappwer, CatHoverElement, CatTopInfoWrapper, AddToqueueIcon, AddedToqueueIcon, CatGenre, CatArrowDown, CatArrowUp, CatCAWrapper, CatCAAndProvidersWrapper, CatGenreUl, CatCarouselTitle, CatInfo, CatHighlighted, CatDateDurationWrapper, MobileClickableEl }