import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CatCardContainer, CatImgWrapper, CatTitle, CatCardTrailer, CatInfoContainer, CatNoTitle, CatIconWrapper, CatHoveredCard, CatTrailerWrappwer, CatHoverElement, CatTopInfoWrapper, CatGenre, CatArrowDown, CatCAWrapper, CatCAAndProvidersWrapper, CatGenreUl, CatInfo, CatHighlighted, CatDateDurationWrapper, MobileClickableEl } from './CategoryCarousel.Styles'
import { mobileQuery } from '../../../styles-variables'
import useGetTrailer from '../../api/useGetTrailers'
import useGetProviders from '../../api/useGetProviders'
import PropTypes from 'prop-types'
import LogoComponent from '../LogoComponent/LogoComponent'
import ProvidersIcons from '../ProvidersIcons/ProvidersIcon'
import useGetDetails from '../../api/useGetDetails'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import AddToWatchlistBtn from '../AddToWatchlistBtn/AddToWatchlistBtn'

function CategoryCard({ index, id, isType, shows }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { providers } = useGetProviders(id, isType);
  const { trailer } = useGetTrailer(id, isType);
  const { genre, duration, seasons, episodes, releaseDate } = useGetDetails(id, isType);
  const { intersected, hoveredCardStyles, listEl } = useIntersectionObserver();

  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(shows);
  }, [shows]);

  const isMovie = isType === '/movie';

  const {
    title: movieTitle,
    overview: movieOverview,
    poster_path: moviePosterPath,
    backdrop_path: movieBackdropPath,
    vote_average: movieVoteAverage,
    name: seriesName,
    overview: seriesOverview,
    poster_path: seriesPosterPath,
    backdrop_path: seriesBackdropPath,
    vote_average: seriesVoteAverage
  } = shows;

  const windowWidth = window.innerWidth;
  const moviePosterOrBackdrop = windowWidth < mobileQuery ? moviePosterPath : movieBackdropPath;
  const seriesPosterOrBackdrop = windowWidth < mobileQuery ? seriesPosterPath : seriesBackdropPath;

  const bgImg = isMovie ? moviePosterOrBackdrop : seriesPosterOrBackdrop;

  const isTitle = isMovie ? movieTitle : seriesName;

  const playTrailer = () => {
    setIsHovered(true);
  }

  const stopTrailer = () => {
    setIsHovered(false);
  }

  const posterImg = isMovie ? moviePosterPath : seriesPosterPath;
  const backdropImg = isMovie ? movieBackdropPath : seriesBackdropPath;

  // Clean up the title to display it as a parameter in the URL
  const nameAsParam = isTitle.split(' ').join('-');
  const typeForParams = isMovie ? 'movie' : 'tv';

  const handleMoreInfo = () => {
    navigate(`${typeForParams}/${nameAsParam}`, {
      state: {
        type: isType,
        id: id
      }
    });
  }

  if (!trailer) {
    return (
      <CatImgWrapper
        featuredimg={`https://image.tmdb.org/t/p/original${bgImg}`}
        onClick={ handleMoreInfo }
      >
        <LogoComponent
          isLogo={id}
          movieOrSeries={isType}
          width={"130px"}
          desktop_width={"130px"}
          height={"90px"}
          desktop_height={"90px"}
          title={isTitle}
        />
        <CatNoTitle>(No trailer available)</CatNoTitle>
      </CatImgWrapper>
    );
  }

  const genres = genre.map((eachGenre, index) => (
    <CatGenre key={index}>{eachGenre}</CatGenre>
  ));

  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 2,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      frameborder: 0,
      origin: window.location.origin,
      host: `${window.location.protocol}//www.youtube.com`,
      enablejsapi: 1
    }
  };

  return (
    <CatCardContainer
      onMouseLeave={stopTrailer}
      id={index}
      ref={listEl}
    >
      { windowWidth < mobileQuery 
        && 
        <MobileClickableEl onClick={ handleMoreInfo } />
      }
      {intersected && windowWidth > mobileQuery && (
        <CatHoverElement onMouseEnter={playTrailer}></CatHoverElement>
      )}
      {isHovered ? (
        <CatHoveredCard style={hoveredCardStyles}>
          <CatTrailerWrappwer>
            <CatCardTrailer
              videoId={trailer}
              id="YTVideo"
              iframeClassName="trailer"
              allow="encrypted-media"
              opts={playerOptions}
            />
          </CatTrailerWrappwer>
          <CatInfoContainer>
            <CatTopInfoWrapper>
              <CatCAAndProvidersWrapper>
                <CatCAWrapper>
                  <CatArrowDown onClick={ handleMoreInfo } />
                  <AddToWatchlistBtn
                    size={'25px'}
                    font={'.7rem'}
                    id={id}
                    type={typeForParams}
                    title={isTitle}
                    img={posterImg ? posterImg : backdropImg}
                    hasImage={true}
                    votes={isMovie ? movieVoteAverage : seriesVoteAverage}
                    text={'auto'}
                    justifytext={'center'}
                  />
                </CatCAWrapper>
                <CatIconWrapper>
                  {providers ? (
                    <ProvidersIcons
                      id={id}
                      movieOrSeries={isType}
                      size={'25px'}
                    />
                  ) : (
                    ''
                  )}
                </CatIconWrapper>
              </CatCAAndProvidersWrapper>
              <CatTitle>{isTitle}</CatTitle>
              <CatDateDurationWrapper>
                <CatInfo>{`Year: ${releaseDate}`}</CatInfo>
                <CatHighlighted>
                  {isMovie ? `${duration} min` : `${seasons} seasons - ${episodes} episodes`}
                </CatHighlighted>
              </CatDateDurationWrapper>
              <CatGenreUl>{genres}</CatGenreUl>
            </CatTopInfoWrapper>
            <CatInfo>{isMovie ? `${movieOverview.substring(0, 190)}...` : `${seriesOverview.substring(0, 190)}...` }</CatInfo>
          </CatInfoContainer>
        </CatHoveredCard>
      ) : (
        <CatImgWrapper featuredimg={`https://image.tmdb.org/t/p/original${bgImg}`}>
          <LogoComponent
            isLogo={id}
            movieOrSeries={isType}
            width={"130px"}
            desktop_width={"130px"}
            title={isTitle}
          />
        </CatImgWrapper>
      )}
    </CatCardContainer>
  );
}

CategoryCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isType: PropTypes.string.isRequired,
  shows: PropTypes.object.isRequired,
};

export default CategoryCard;
