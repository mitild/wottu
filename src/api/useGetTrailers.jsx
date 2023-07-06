import { useState, useEffect } from 'react'
import axios from 'axios'
import TmdbParams from '../config/tmdb'

const useGetTrailer = (id, endpoint) => {
  const { BASE_URL } = TmdbParams()
  const [ trailer, setTrailer ] = useState('')

  const getTrailer = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}/${id}/videos`)

      const officialVideos = response.data.results.find(video => video.official === true)

      const officialTrailer = officialVideos && officialVideos.length > 0 ? officialVideos.find(video => video.type === 'Trailer') : officialVideos ? officialVideos : response.data.results[0]

      if(!officialTrailer) { return null }
      
      setTrailer(officialTrailer ? officialTrailer.key : officialVideos ? officialVideos.key : response.data.results[0].key)

    } catch(err) {
        console.log(err)
      }
  }

  useEffect(() => {
    getTrailer()
  }, [])

  return { trailer }
}

export default useGetTrailer
