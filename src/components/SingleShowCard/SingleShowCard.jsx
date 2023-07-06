import { SingleCardContainer, SingleHeroContainer, SingleLayout, SingleTitleWrapper, SingleCardDirectors, SingleCardMainInfo, SingleTrailerBtn, PlayIcon, StarIcon, InfoTitle,  SingleCardTitle, SingleCardMainInfoItem, VotesWrapper, SingleCardGenresUl, SingleCardGenresLi, SingleCardTitles, SingleCardDescription, TwoColumnsLayout, ProvidersWrapper, CastImage, CastWrapper, CastName, CastImgWrapper, InfoData, SingleCastImg } from './SingleShowCard.Styles'
import heroImg from '/img-placeholder.png'
import { useLocation } from "react-router-dom"
import useGetDetails from '../../api/useGetDetails'
import ProvidersIcons from '../ProvidersIcons/ProvidersIcon'
import useGetCast from '../../api/useGetCast'
import { Link } from 'react-router-dom'
import useGetBySimilar from '../../api/useGetSimilar'
import ResultCard from '../ResultsCards/ResultCard'
import { useState } from 'react'
import VideoTrailer from '../TrailerVideo/VideoTrailer'
import AddToWatchlistBtn from '../AddToWatchlistBtn/AddToWatchlistBtn'
import backupImg from '/placeholder-tall.png'

const SingleShowCard = () => {
  const { state } = useLocation()
  const details = useGetDetails(state.id, state.type)
  const { director, cast } = useGetCast(state.id, state.type)
  const similars = useGetBySimilar(state.type, state.id)
  const [ showTrailer, setShowTrailer ] = useState(false)

  const castEl = cast.map(actor => {
    const nameAsParam = actor.name.split(' ').join('-')
    return (
      <CastImgWrapper key={ actor.id }>
        <Link 
          to={ `/person/${ nameAsParam }` } 
          state={{ type: '/person', id: actor.id }}
          style={{ textDecoration: 'none' }}
        >
          <CastImage src={ actor.img ? `https://image.tmdb.org/t/p/original${ actor.img }` : backupImg } />
          <CastName>{ actor.name }</CastName>
        </Link>
      </CastImgWrapper>
    )
  })

  const mediaType = state.type === '/person' ? 'person' : state.type === '/movie' ? state.type.substring(1) : 'series'

  if(!details) {
    return <p>Loading...</p>
  }

  const { backdropImg, name, duration, episodes, genre, overview, releaseDate, seasons, votes, knownFor, placeOfBirth, profileImg } = details



  const placeOfBirthEl = <SingleCardGenresLi>{ placeOfBirth }</SingleCardGenresLi>
  const genresLi = genre && genre.length > 0 ? genre.map((genre, index) => <SingleCardGenresLi key={ index }>{ genre }</SingleCardGenresLi>) : genre ? <SingleCardGenresLi>{ genre[0] }</SingleCardGenresLi> : placeOfBirthEl

  const bgImg = backdropImg ? backdropImg : profileImg ? profileImg : undefined

  const similarCards = similars && similars.map(({ id, poster_path, vote_average, name, title, type }, index) => {
    return (
      <ResultCard 
        key={ index }
        id={ id }
        type={ type }
        title={ name ? name : title}
        img={ poster_path }
        hasImage={ !poster_path ? false : true }
        known={ '' }
        votes={ vote_average }
      />
    )
  })
  const image = bgImg ? `https://image.tmdb.org/t/p/original${ bgImg }` : heroImg

  const handleTrailer = () => {
    setShowTrailer(true)
    console.log('open trailer')
  }

  return (
    <SingleCardContainer>

      <SingleHeroContainer
        bg_img={ image }
        type={ state.type }
      >
        <SingleLayout>
            <SingleTitleWrapper>
    
                {
                state.type !== '/person'
                && 
                <AddToWatchlistBtn
                  size={ '40px' }
                  font={ '1rem' }
                  id={ state.id }
                  type={ mediaType }
                  title={ name }
                  img={ image }
                  hasImage={ true }
                  votes={ Number(votes) }
                  text={ 'auto' }
                  justifytext={ 'center' }
                />
                }

              {
                state.type !== '/person' && <SingleCardDirectors>{ director }</SingleCardDirectors>
              }

              <SingleCardTitle>{ name }</SingleCardTitle>


              <SingleCardGenresUl>
                { genresLi }
              </SingleCardGenresUl>
            </SingleTitleWrapper>
            
          <SingleCardMainInfo>
            {
              state.type !== '/person'
              &&
              <SingleTrailerBtn
                onClick={ handleTrailer }
              >
                <PlayIcon>Movie</PlayIcon>
              </SingleTrailerBtn>
            }
            <SingleCardMainInfoItem>
              <InfoTitle>Media Type</InfoTitle>
              { mediaType }
            </SingleCardMainInfoItem>
            <SingleCardMainInfoItem>
              { 
                episodes > 0 
                ?
                <>
                <InfoTitle>Seasons</InfoTitle>
                <InfoData>{ seasons }</InfoData>
                <InfoTitle>Episodes</InfoTitle>
                { episodes }
                </>
                :
                <>
                  <InfoTitle>{ state.type !== '/person' ? 'Duration' : 'known for'}</InfoTitle>
                  <InfoData>{ state.type !== '/person' ? `${duration} min` : knownFor }</InfoData>
                </>
              }
            </SingleCardMainInfoItem>
            <SingleCardMainInfoItem>
              <InfoTitle>year</InfoTitle>
              { releaseDate }
            </SingleCardMainInfoItem>
            <SingleCardMainInfoItem>
              <InfoTitle>Votes</InfoTitle>
              <VotesWrapper>
                <StarIcon /> 
                { votes }
              </VotesWrapper>
            </SingleCardMainInfoItem>

          </SingleCardMainInfo>
        </SingleLayout>

      </SingleHeroContainer>
        <SingleLayout>
          <SingleCardTitles>Description</SingleCardTitles>
          <TwoColumnsLayout>
            <SingleCardDescription>
              { overview }
            </SingleCardDescription>
            {
              state.type !== '/person'
              ?
              <ProvidersWrapper>
                <ProvidersIcons
                  id={ state.id }
                  movieOrSeries={ state.type }
                  size={ '40px' }
                />
              </ProvidersWrapper>
              :
              <SingleCastImg>
                <CastImage src={ bgImg ? `https://image.tmdb.org/t/p/original${ bgImg }` : heroImg } alt={`${name} image`}/>
                <CastName>{name}</CastName>
              </SingleCastImg>
            }
          </TwoColumnsLayout>
          {
            state.type !== '/person'
            &&           
            <>
              {
                castEl.length > 0
                &&
                <>
                <SingleCardTitles>Cast</SingleCardTitles>
                <CastWrapper>
                  { castEl }
                </CastWrapper>
                </>
              }
              <SingleCardTitles>Similar titles</SingleCardTitles>
              <CastWrapper>
                { similarCards }
              </CastWrapper>
            </>
            
          }
        </SingleLayout>
          {
            showTrailer
            &&
            <VideoTrailer 
              id={ state.id }
              type={ state.type }
              show={ showTrailer }
              setter={ setShowTrailer }
            />
          }

    </SingleCardContainer>
  )
}

export default SingleShowCard