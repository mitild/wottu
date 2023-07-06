import { createContext, useState, useEffect } from "react"
import axios from "axios"
import TmdbParams from "../config/tmdb"
import getData from "../api/getData"
import getGenres from "../api/getGenres"
import PropTypes from 'prop-types'
import useGetCountryCode from "../hooks/useGetCountryCode";
import getUpcoming from "../api/upcomingApi"
import getTrending from "../api/trendingApi"

export const DataContext = createContext()
const watchlistStored = JSON.parse(localStorage.getItem('watchlist'))

const DataContextProvider = ({ children }) => {
  const [ movies, setMovies ] = useState([])
  const [ series, setSeries ] = useState([])
  const [ movieGenres, setMovieGenres ] = useState([])
  const [ tvGenres, setTvGenres ] = useState([])
  const [ upcomingMovies, setUpcomingMovies ] = useState([])
  const [ upcomingSeries, setUpcomingSeries ] = useState([])
  const [ trendingMovies, setTrendingMovies ] = useState([])
  const [ trendingSeries, setTrendingSeries ] = useState([])
  const [ isMovie, setIsMovie ] = useState(true)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ watchlist, setWatchlist ] = useState(watchlistStored ? watchlistStored : [])
  const { code } = useGetCountryCode()
  const { MOVIE_endpoint, SERIES_endpoint, } = TmdbParams()

  axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`;

  useEffect(() => {
    getData(MOVIE_endpoint, setMovies)
    getData(SERIES_endpoint, setSeries)
    getGenres(MOVIE_endpoint, setMovieGenres)
    getGenres(SERIES_endpoint, setTvGenres)
    getUpcoming(MOVIE_endpoint, setUpcomingMovies)
    getUpcoming(SERIES_endpoint, setUpcomingSeries)
    getTrending(MOVIE_endpoint, setTrendingMovies)
    getTrending(SERIES_endpoint, setTrendingSeries)
  }, [])
  
  return (
    <DataContext.Provider value={
      { 
        movies,
        setMovies, 
        MOVIE_endpoint, 
        series, setSeries, 
        isMovie, 
        code, 
        movieGenres, 
        tvGenres, 
        isLoading, 
        setIsLoading, 
        watchlist, 
        setWatchlist, 
        upcomingMovies,
        upcomingSeries,
        trendingMovies,
        trendingSeries
      }
    }>
      { children }
    </DataContext.Provider>
  )
}
DataContextProvider.propTypes = {
  children: PropTypes.object
}
export default DataContextProvider