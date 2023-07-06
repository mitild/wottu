import { useContext } from 'react'
import { CardContainer, Title } from "./SearchSuggestedCard.Styles"
import { DataContext } from "../../context/Context"
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

const SearchSuggestedCard = ({ text, type, category }) => {
  const { trendingSeries, upcomingMovies, series } = useContext(DataContext)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/search-results/${category}`, {state: {type: type, category: category}})
  }
  const isType = category === 'upcoming' ? upcomingMovies : category === 'trending' ? trendingSeries : series

  const randomIndex = isType ? Math.floor(Math.random() * isType.length) : 0

  if(trendingSeries.length === 0 || upcomingMovies.length === 0 || series.length === 0){
    return null
  }

  const bgImg = `https://image.tmdb.org/t/p/original${isType[randomIndex].backdrop_path}`

  return (
    <CardContainer 
      featuredimg={ bgImg }
      onClick={ handleClick }
    >
      <Title>{ text }</Title> 
    </CardContainer>  
  )
}
SearchSuggestedCard.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string
}

export default SearchSuggestedCard