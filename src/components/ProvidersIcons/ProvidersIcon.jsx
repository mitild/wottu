import useGetProviders from '../../api/useGetProviders';
import { ProviderIcon, ProvidersLink } from './ProvidersIcons.Styles';
import PropTypes from 'prop-types';

const ProvidersIcons = ({ id, movieOrSeries, size }) => {
  const { providers } = useGetProviders(id, movieOrSeries)

  const icons = providers.icons && providers.icons.map((provider, index) => {
      return (
        <ProvidersLink key={ index }>
          <a href={`${ providers.link }` } target='_blank' rel='noreferrer'>
          <ProviderIcon
            src={ `https://image.tmdb.org/t/p/original${ provider }`}
            // key={ index }
            size={ size }
          />
          </a>
        </ProvidersLink>
      ) 
    })
    return icons 
}
ProvidersIcons.propTypes = {
  id: PropTypes.number.isRequired,
  movieOrSeries: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default ProvidersIcons