import { useEffect, useState } from 'react'
import axios from "axios"
import TmdbParams from '../config/tmdb'

const useGetSearch = ( query, page ) => {
  const [ search, setSearch ] = useState()
  const { BASE_URL } = TmdbParams()

  const getSearch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search/multi?query=${ query }&include_adult=false&language=en-US&page=${page}`)
      console.log(response.data)
      setSearch(response.data.results)
    }
    catch {
      err => console.log(err)
    }
  }
  
  useEffect(() => {
    getSearch()
  }, [query])
  
  return search
}

export default useGetSearch
