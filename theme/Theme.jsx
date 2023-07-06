import { ThemeProvider } from "styled-components"
import PropTypes from 'prop-types'

const theme = {
  colors: {
    yellow: 'rgb(255, 181, 37)',
    darkBg: 'rgb(15, 16, 25)',
    fucsia: 'rgb(252, 74, 120)',
    lightBlue: 'rgb(114, 117, 166)',
    offwhite: 'rgb(211, 211, 221)',
    cardsBg: 'rgba(15, 16, 25, .2)',
    cardsBorder: 'rgba(255, 255, 255, 0.3)'
  },
  shadows: {
    boxHard: '0 4px 30px rgba(255, 255, 255, 0.2)',
    boxSoft: '0 4px 30px rgba(0, 0, 0, 0.1)',
    textSoft: '1px 1px 4px rgba(0, 0, 0, 0.6)',
    textHard: '1px 1px 4px rgba(0, 0, 0, 0.9)'
  },
  queries: {
    mobile: '600px'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
)
Theme.propTypes = {
  children: PropTypes.any.isRequired
}

export default Theme