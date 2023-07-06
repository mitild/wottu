import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import EntranceLoader from '../components/EntranceLoader/EntranceLoader'
import { useState } from 'react'
import Footer from "../components/Footer/Footer"


const Layout = () => {
  // const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  // const toggleSignUp = () => {
  //   setIsSignUpVisible((prevVisible) => !prevVisible);
  // };
  const [ loading, setLoading ]  = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, 5100)

  return (
    loading
    ?
    <EntranceLoader />
    :
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout  