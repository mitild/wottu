import HeroCarousel from "../components/HeroCarousel/HeroCarousel"
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel"
import SearchBar from '../components/SearchBar/SearchBar'
import { HomeContainer } from "../components/HomeAnimated/HomeAnimated.Styles"
import { useContext, useEffect } from 'react'
import { DataContext } from "../context/Context"
import { UserContext } from "../context/userContext"
import { useNavigate, useLocation } from "react-router-dom"

const Home = () => {
  const { movies, series, upcomingMovies, upcomingSeries, trendingMovies, trendingSeries } = useContext(DataContext)
  const { userName } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!userName && location.pathname !== '/login' && location.pathname !== '/sign-up') {
      const timeout = setTimeout(() => {
        navigate('/login');
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [userName, location.pathname, navigate])

  return (
    <HomeContainer>
      <SearchBar />
      <HeroCarousel /> 
      <CategoryCarousel
        isType={'/movie'}
        title={ 'New movie releases' }
        shows={ upcomingMovies }
      />
      <CategoryCarousel
        isType={'/tv'}
        title={ 'New series releases' }
        shows={ upcomingSeries }
      />
      <CategoryCarousel
        isType={'/movie'}
        title={ 'Trending movies' }
        shows={ trendingMovies }
      />
      <CategoryCarousel
        isType={'/tv'}
        title={ 'Trending series' }
        shows={ trendingSeries }
      />
      <CategoryCarousel
        isType={'/movie'}
        title={ 'Top rated movies' }
        shows={ movies }
      />
      <CategoryCarousel
        isType={'/tv'}
        title={ 'Top rated series' }
        shows={ series }
      />
    </HomeContainer>
  )
}

export default Home