import {useEffect, useState, useContext} from 'react';
import axios from "axios"
import TmdbParams from '../config/tmdb';
import { DataContext } from '../context/Context';

const useGetBySimilar = ( type, id ) => {
  const [ similars, setSimilars ] = useState()
  const { BASE_URL } = TmdbParams()
  const { code } = useContext(DataContext)
  const page = 1

  const getBySimilar = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${ type }/${ id }/similar?language=en-${ code }&page=${ page }`)
      const similarArray = response.data.results && response.data.results.map(similar => {
        return similar.title ? {...similar, type: 'movie'} : {...similar, type: 'tv'}
      })
      setSimilars(similarArray)
    }
    catch {
      err => console.log(err)
    }
  }
  
  useEffect(() => {
    getBySimilar()
  }, [ id ])
  
  return similars
}

export default useGetBySimilar