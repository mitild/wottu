import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TmdbParams from '../config/tmdb'
import { DataContext } from '../context/Context'

const useGetProviders = (id, endpoint) => {
  const { BASE_URL } = TmdbParams()
  const [ providers, setProviders ] = useState({ icons: [], link: '' })
  const { code } = useContext(DataContext)

  const getProviders = async() => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}/${id}/watch/providers`)
      const countryData = response.data.results['ES']      
      const providersIcons = countryData && countryData.flatrate.map(provider => provider.logo_path)
      const providersLink = countryData && countryData.link
      const countryCodes = Object.keys(response.data)
      const firstCountryCode = countryCodes[0]

      setProviders(
        {
          icons: providersIcons && providersIcons,
          link: providersLink || response.data[firstCountryCode].link
        }
      )
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProviders()
  },[])

  return { providers }

}

export default useGetProviders