import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { render } from 'react-dom'
import App from './core/App'
import './index.css'
import theme from './theme'

render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
