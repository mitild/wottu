import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TmdbParams from '../config/tmdb'
import { DataContext } from '../context/Context'

const useGetDetails = (id, endpoint) => {
  const { BASE_URL } = TmdbParams()
  const [ details, setDetails ] = useState(
    {
      genre: [],
      duration: '',
      season: 0,
      episodes: 0,
      releaseDate: ''
    }
  )
  const { code } = useContext(DataContext)

  const getDetails = async() => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}/${id}?language=en-${ code }`)
      // console.log(response.data)

      const genres = response.data.genres && response.data.genres.map(genre => genre.name)
      const duration = endpoint === '/movie' ? response.data.runtime.toString() : ''
      const seasons = endpoint === '/tv' ? response.data.number_of_seasons : 0
      const episodes = endpoint === '/tv' ? response.data.number_of_episodes : 0

      const releaseDate = !endpoint === '/person' || endpoint === '/movie' ? response.data.release_date.slice(0, 4) : !endpoint === '/person' || endpoint === '/tv' ? response.data.first_air_date.slice(0, 4) : endpoint === '/person' ? response.data.birthday : null

      const overview = response.data.overview ? response.data.overview : response.data.biography
      const votes = response.data.vote_average ? response.data.vote_average.toFixed(1) : response.data.popularity ? response.data.popularity : null
      const backdropImg = response.data.backdrop_path ? response.data.backdrop_path : null
      const posterImg = response.data.poster_path ? response.data.poster_path : null
      const name = endpoint === '/movie' ? response.data.title : response.data.name
      const knownFor = response.data.known_for_department && response.data.known_for_department
      const placeOfBirth = response.data.place_of_birth && response.data.place_of_birth

      const profileImg = response.data.profile_path && response.data.profile_path

      setDetails(
        {
          genre: genres,
          duration: duration,
          seasons: seasons,
          episodes: episodes,
          releaseDate: releaseDate,
          overview: overview,
          votes: votes,
          backdropImg: backdropImg,
          posterImg: posterImg,
          profileImg: profileImg,
          name: name,
          knownFor: knownFor,
          placeOfBirth: placeOfBirth
        }
      )
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getDetails()
  },[id])

  return details 

}

export default useGetDetails