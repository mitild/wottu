import styled, { keyframes } from 'styled-components'

const AnimatedEntrance = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const HomeContainer = styled.div`
  animation: ${ AnimatedEntrance } 5s ease forwards;
  display: flex;
  flex-direction: column;
`

export { HomeContainer, AnimatedEntrance }

