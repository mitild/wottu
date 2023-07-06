import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetCountryCode = () => {
  const [code, setCode ] = useState('')

  const getCode = async () => {
    try {
      const response = await axios.get('http://ip-api.com/json/')
      if(!response){
        return <p>loading...</p>
      }
      else {
        const countryCode = response.data.countryCode
        setCode(countryCode ? countryCode : 'ES')
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getCode()
  }, [])
  return { code }
}

export default useGetCountryCode