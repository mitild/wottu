import styled from 'styled-components'
import { CatImgWrapper } from '../CategoryCarousel/CategoryCarousel.Styles'
import { mobileQuery } from '../../../styles-variables'

const CardContainer = styled(CatImgWrapper)`
  display: none;
  @media (min-width: ${mobileQuery}px) {
    display: flex;
    background-size: cover;
    width: 30%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
    padding: .3em;
    cursor: pointer;
  }
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.2;
`

export { CardContainer, Title }