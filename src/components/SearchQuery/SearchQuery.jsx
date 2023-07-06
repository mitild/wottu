import { SqTag } from "./SearchQuery.Styles"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

const SearchQuery = ({ id, genre, bg, type }) => {
  const navigate = useNavigate()

  const nameAsParam = genre.split(' ').join('-')
  const handleClick = () => {
    navigate(`/search-results/${nameAsParam}`, {state: {type: type, genre: id}})
  }

  return (
    <SqTag
      bg={ bg }
      onClick={ handleClick }
    >
      { genre }
    </SqTag>
  )
}
SearchQuery.propTypes = {
  genre: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default SearchQuery