import styled from 'styled-components'
import { mobileQuery } from '../../../styles-variables'

const EntranceContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  @media (min-width: ${mobileQuery}px) {
    width: 100%;
    height: 100vh;
  }
`

const EntranceImg = styled.img`
  width: 500px;
`

export { EntranceContainer, EntranceImg }