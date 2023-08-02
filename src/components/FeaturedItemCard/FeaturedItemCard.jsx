import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FeaturedContainer, FeaturedInfoWrapper, FeaturedBtn, FeaturedIsMovieBadge, FeaturedSectionWrapper, FeaturedBtnsWrapper } from './FeaturedItemCard.Styles'
import { mobileQuery } from '../../../styles-variables'
import { infoIcon } from './icon'
import { DataContext } from '../../context/Context'
import LogoComponent from '../LogoComponent/LogoComponent'
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'
import AddToWatchlistBtn from '../AddToWatchlistBtn/AddToWatchlistBtn'


const FeaturedItemCard = ({ index, isMovie }) => {
  const { movies, series } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(movies.length === 0 || series.length === 0)
  }, [movies, series])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const { title, overview, poster_path, backdrop_path, id, vote_average
 } = movies[index]

  const { name, overview: seriesOvw, poster_path: seriesPoster, backdrop_path: seriesBD, id: seriesId, vote_average: seriesVote } = series[index]

  const windowWidth = window.innerWidth
  const moviePosterOrBackdrop = windowWidth < mobileQuery ? poster_path : backdrop_path
  const seriesPosterOrBackdrop = windowWidth < mobileQuery ? seriesPoster : seriesBD

  const bgImg = isMovie ? moviePosterOrBackdrop : seriesPosterOrBackdrop

  const titleEl = isMovie ? title : name

  const isLogo = isMovie ? id : seriesId;
  const movieOrSeries = isMovie ? '/movie' : '/tv';

  const nameAsParam = titleEl.split(' ').join('-')
  const typeForParams = isMovie ? 'movie' : 'tv'

  const poster = isMovie ? poster_path : seriesPoster
  const backdropImg = isMovie ? backdrop_path : seriesBD

  const handleMoreInfo = () => {
    navigate(`${ typeForParams }/${ nameAsParam }`, {state: {
      type: movieOrSeries,
      id: isLogo
    }})
  }

  return (
    <FeaturedContainer featuredimg={`https://image.tmdb.org/t/p/original${ bgImg }`}>
      <FeaturedSectionWrapper>
        <FeaturedInfoWrapper>
          <FeaturedIsMovieBadge ismovie={ isMovie.toString() } >{ isMovie ? 'Movie' : 'Tv Show' }</FeaturedIsMovieBadge>
          <LogoComponent
            isLogo={isLogo} 
            movieOrSeries={movieOrSeries} 
            width={'190px'} 
            desktop_width={ "320px" }
            height={"100%"}
            desktop_height={"100%"}
            title={ titleEl } 
          />
          <ShowMoreBtn
            text={ isMovie ? overview : seriesOvw }
            textSize={ 1 }
            textMedia={ 1.2 }
            moreSize={ .9 } 
            moreMedia={ 1 }
          />
          <FeaturedBtnsWrapper>
            <FeaturedBtn
              onClick={ handleMoreInfo }
            >
              { infoIcon } More Info
            </FeaturedBtn>
            <AddToWatchlistBtn
              id={ isLogo }
              type={ typeForParams }
              title={ titleEl }
              img={ poster ? poster : backdropImg }
              votes={ isMovie ? vote_average : seriesVote }
              size={ '37px' }
              font={ '1rem'}
              text={ 'auto' }
              justifytext={ 'center' }
            />
          </FeaturedBtnsWrapper>
        </FeaturedInfoWrapper>
      </FeaturedSectionWrapper>
    </FeaturedContainer>
  )
}
FeaturedItemCard.propTypes = {
  index: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired
}

export default FeaturedItemCard