import React from 'react'
import { useHistory } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const history = useHistory()
  return (
    <footer>
      <a
        target="_blank"
        href="mailto:jmlivingston@gmail.com?subject=I saw your Covid-19 map and want to hire you!"
        onClick={(e) => {
          history.push('/contact')
          e.preventDefault()
        }}
        rel="noopener noreferrer">
        Hire Me?
      </a>
      &nbsp;|&nbsp;
      <a target="_blank" href="https://www.johnlivingston.io/" rel="noopener noreferrer">
        johnlivingston.io
      </a>
      &nbsp;|&nbsp;
      <a target="_blank" href="https://github.com/jmlivingston/covid-19-reports-react" rel="noopener noreferrer">
        Code
      </a>
    </footer>
  )
}

export default Footer
