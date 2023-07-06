import axios from 'axios'

const TmdbParams = () => {
  const Bearer = axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`;

  const BASE_URL = "https://api.themoviedb.org/3"
  const MOVIE_endpoint =  "/movie"
  const SERIES_endpoint =  "/tv"
  const TOPRATED_endpoint = "/top_rated"
  // const HEADERS = {
  //   headers:{
  //     Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}` 
  //   }
  // }

  return { Bearer, BASE_URL, MOVIE_endpoint, SERIES_endpoint, TOPRATED_endpoint}
}

export default TmdbParams