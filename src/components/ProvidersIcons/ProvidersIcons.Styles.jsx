import styled from 'styled-components'

// PROVIDERS ICONS
const ProviderIcon = styled.img`
  width: ${props => props.size};
  border-radius: 50%;
  filter: ${props => `box-shadow 0 2px 4px (${props.theme.shadows.boxSoft})`};
  margin-right: .2em;
` 

const ProvidersLink = styled.div`
  text-decoration: none;
`

export { ProviderIcon, ProvidersLink}