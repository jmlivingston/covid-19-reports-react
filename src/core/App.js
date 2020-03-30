import React, { lazy, Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'

const USByCounty = lazy(() => import('../maps/us/USByCounty'))
const USDeathsByCounty = lazy(() => import('../maps/us/USDeathsByCounty'))
const USByState = lazy(() => import('../maps/us/USByState'))
const USDeathsByState = lazy(() => import('../maps/us/USDeathsByState'))

function App() {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="content">
          <Switch>
            <Route exact path={`/state/cases`}>
              <USByState />
            </Route>
            <Route exact path={`/state/deaths`}>
              <USDeathsByState />
            </Route>
            <Route exact path={`/county/deaths`}>
              <USDeathsByCounty />
            </Route>
            <Route exact path={`/county/cases`}>
              <USByCounty />
            </Route>
            <Route>
              <USByState />
            </Route>
          </Switch>
        </div>
      </Suspense>
      <Footer />
    </HashRouter>
  )
}

export default App
