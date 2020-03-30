import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'

const USByCounty = lazy(() => import('../maps/us/USByCounty'))
const USByState = lazy(() => import('../maps/us/USByState'))

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <USByState />
            </Route>
            <Route exact path="/state/:reportType">
              <USByState />
            </Route>
            <Route exact path="/county/:reportType">
              <USByCounty />
            </Route>
            <Route>
              <USByState />
            </Route>
          </Switch>
        </div>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
