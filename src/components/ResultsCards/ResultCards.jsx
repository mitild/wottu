import { useContext } from "react"
import { ResultsContainer } from "./ResultCards.Styles"
import { useLocation } from "react-router-dom"
import useGetSearch from "../../api/useGetSearch"
import ResultCard from "./ResultCard"
import backupImg from "/placeholder-tall.png"
import useGetByGenre from "../../api/useGetByGenre"
import { DataContext } from "../../context/Context"


const ResultsCards = () => {
  const { state } = useLocation()
  const { trendingSeries, upcomingMovies, series } = useContext(DataContext)
  const inputSearch = useGetSearch(state, 1)
  const genreSearch = useGetByGenre(state.type, state.genre)
  const results = !state.type ? inputSearch : state.category === 'trending' ? trendingSeries : state.category === 'upcoming' ? upcomingMovies : state.category === 'top-series' ? series : genreSearch

  console.log(results)
  if(!results){
    return null
  }

  const searchData = results.map(({ id, media_type, title, profile_path, backdrop_path, poster_path, name, known_for_department, vote_average }, index) => {
    const image = poster_path ? poster_path : profile_path ? profile_path : !backdrop_path === null ? backdrop_path : backupImg

    return (
      <ResultCard 
        key={ index }
        id={ id }
        type={ media_type ? media_type : state.type }
        title={ title ? title : name }
        img={ image }
        hasImage={ image === backupImg ? false : true }
        known={ known_for_department ? known_for_department : '' }
        votes={ vote_average }
      />
    )
  })

  return (
    <ResultsContainer>
      { searchData }
    </ResultsContainer>
  )
}

export default ResultsCards