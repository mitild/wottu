import { useState, useEffect } from 'react'
import axios from 'axios'
import TmdbParams from '../config/tmdb'

const useGetImages = (id, endpoint) => {
  const { BASE_URL } = TmdbParams()
  const [ logo, setLogo ] = useState('')

  const getLogo = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}/${id}/images`)
      const englishLogo = response.data.logos.filter(logo => logo.iso_639_1 === 'en')
      const finalLogo = englishLogo && englishLogo.length > 0 ? englishLogo[0].file_path : response.data.logos[0].file_path
      setLogo(finalLogo)
  
    } catch(err) {
        console.log(err)
      }
  }

  useEffect(() => {
    getLogo()
  }, [])
  return { logo }
}

export default useGetImages