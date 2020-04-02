import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}))

function Footer() {
  const classes = useStyles()
  const history = useHistory()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          <Link
            target="_blank"
            href="mailto:jmlivingston@gmail.com?subject=I saw your Covid-19 map and want to hire you!"
            onClick={(e) => {
              history.push('/contact')
              e.preventDefault()
            }}
            rel="noopener noreferrer">
            Hire Me?
          </Link>
          &nbsp;|&nbsp;
          <Link target="_blank" href="https://www.johnlivingston.io/" rel="noopener noreferrer">
            johnlivingston.io
          </Link>
          &nbsp;|&nbsp;
          <Link target="_blank" href="https://github.com/jmlivingston/covid-19-reports-react" rel="noopener noreferrer">
            Code
          </Link>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
