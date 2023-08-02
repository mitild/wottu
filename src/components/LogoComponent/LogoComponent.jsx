import PropTypes from 'prop-types'
import { Logo } from './LogoComponent.Styles'
import useGetImages from '../../api/useGetImages'
import { CatTitle } from '../CategoryCarousel/CategoryCarousel.Styles'

const LogoComponent = ({ isLogo, movieOrSeries, title, width, desktop_width, height, desktop_height }) => {
  const { logo } = useGetImages(isLogo, movieOrSeries)
  
  return (
    logo
    ?
    <Logo
      width={ width }
      desktop_width={ desktop_width }
      height={ height }
      desktop_height={ desktop_height }
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
  desktop_width: PropTypes.string.isRequired,
  height: PropTypes.string,
  desktop_height: PropTypes.string,
  title: PropTypes.any,
}

export default LogoComponent