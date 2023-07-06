import useGetDetails from '../../api/useGetDetails'
import AddToWatchlistBtn from '../AddToWatchlistBtn/AddToWatchlistBtn'
import { CardsFlexWrapper, ResultCardContainer, ResultCardImg, ResultCardInfoWrapper, ResultCardTitle, ResultType, KnownFor, ItemsContainer, ReleaseDate, Genres, GenresUl, DurationAndEpisodes, FirstDataWrapper, VotesContainer, StarIcon, Votes, ClickableElement } from './ResultCards.Styles'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { mobileQuery } from '../../../styles-variables'
import backupImg from '/placeholder-tall.png'

const ResultCard = ({ id, type, img, title, hasImage, known, votes }) => {
  const navigate = useNavigate()

  const isType = type === 'movie' ? '/movie' : type === 'tv' ? '/tv' : '/person'

  const details = useGetDetails(id.toString(), `/${type}`)
  const genres = details.genre && details.genre.length > 0 ? details.genre.map((genre, index) => index < 3 && <Genres key={ index }>{ genre.split(" ")[0] }</Genres>) : details.genre ? details.genre : ''

  const nameAsParam = title && title.split(' ').join('-')

  const handleMoreInfo = () => {
    navigate(`/${ type }/${ nameAsParam }`, {state: {
      type: isType,
      id: id
    }})
  }

  const windowWidth = window.innerWidth

  const editedTitle = title && `${title.substring(0, 40)}`
  const displayTitle = windowWidth > mobileQuery ? editedTitle : ''

  return (
    <CardsFlexWrapper>
      <ResultCardContainer>
        <ResultCardImg bgimg={hasImage ? `https://image.tmdb.org/t/p/original${ img }` : backupImg}>
          <ResultCardTitle>{ isType === '/person' || !hasImage ? editedTitle : displayTitle }</ResultCardTitle>
          <AddToWatchlistBtn 
            size={ '25px' }
            font={ '.7rem' }
            id={ id }
            type={ type }
            title={ title }
            img={ img }
            hasImage={ true }
            votes={ votes }
            text={ '100%' }
            justifytext={ 'end' }
          />
        </ResultCardImg>
        <ClickableElement onClick={ handleMoreInfo } />
        <ResultCardInfoWrapper onClick={ handleMoreInfo }>
          <FirstDataWrapper>
            <ItemsContainer>

              { 
                details.releaseDate 
                && 
                <ReleaseDate type={ type }>{ details.releaseDate }</ReleaseDate> }
                {
                  votes
                  &&
                <VotesContainer>
                  <StarIcon /><Votes>{ votes.toFixed(1) }</Votes>
                </VotesContainer>
                }
                
                {
                  type === 'person' 
                  ? 
                  null 
                  :
                  details.duration 
                  ? 
                  <DurationAndEpisodes>{ `${details.duration} min` }</DurationAndEpisodes> 
                  : 
                  <DurationAndEpisodes>{ `Ss.: ${details.seasons} Ep.: ${details.episodes}` }</DurationAndEpisodes> }

            </ItemsContainer>
            <GenresUl>{ genres }</GenresUl>
            { 
              type === 'person' 
              && 
              <KnownFor>{`Known for: ${ known }`}</KnownFor> 
            }
          </FirstDataWrapper>
          <ResultType type={ type }>{ type === 'tv' ? 'series' : type}</ResultType>
          {/* <MoreInfoBtn type={ type }>More info</MoreInfoBtn> */}
        </ResultCardInfoWrapper>
      </ResultCardContainer>
    </CardsFlexWrapper>
  )
}
ResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  hasImage: PropTypes.bool,
  known: PropTypes.string,
  votes: PropTypes.number
}

export default ResultCard