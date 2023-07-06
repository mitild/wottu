import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3em;
  padding: 3em 0 1em;
  border-top: ${ props => `2px solid ${props.theme.colors.cardsBorder}` };
  box-shadow: 0px -9px 24px 1px rgba(255,233,253,0.06);
`

const FooterLogo = styled.img`
  width: 200px;
`

const FooterCopyright = styled.p`
  margin-top: 2em;
  font-size: .8rem;
  text-shadow: ${ props => props.theme.shadows.textSoft}
`

export { FooterContainer, FooterLogo, FooterCopyright }