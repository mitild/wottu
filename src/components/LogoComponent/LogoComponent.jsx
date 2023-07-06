import PropTypes from 'prop-types'
import { Logo } from './LogoComponent.Styles'
import useGetImages from '../../api/useGetImages'
import { CatTitle } from '../CategoryCarousel/CategoryCarousel.Styles'

const LogoComponent = ({ isLogo, movieOrSeries, title, width, desktop_width }) => {
  const { logo } = useGetImages(isLogo, movieOrSeries)
  
  return (
    logo
    ?
    <Logo
      width={ width }
      desktop_width={ desktop_width }
      src={`https://image.tmdb.org/t/p/original${logo}`} 
    />
    :
    <CatTitle>{ title }</CatTitle>
  )
}
LogoComponent.propTypes = {
  isLogo: PropTypes.number.isRequired,
  movieOrSeries: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.any,
  desktop_width: PropTypes.any,
}

export default LogoComponent