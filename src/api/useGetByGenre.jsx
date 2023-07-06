import { useEffect, useState, useContext } from 'react'
import axios from "axios"
import TmdbParams from '../config/tmdb'
import { DataContext } from '../context/Context'

const useGetByGenre = ( type, search ) => {
  const [ searchResults, setSearchResults ] = useState()
  const { BASE_URL } = TmdbParams()
  const { code } = useContext(DataContext)
  const page = 1

  const getByGenre = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/discover/${ type }?include_adult=false&include_video=false&language=en-${ code }&page=${page}&sort_by=popularity.desc&with_genres=${ search }`)
      console.log(response.data)
      setSearchResults(response.data.results)
    }
    catch {
      err => console.log(err)
    }
  }
  
  useEffect(() => {
    getByGenre()
  }, [search])
  
  return searchResults
}

export default useGetByGenre