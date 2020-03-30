import { Router } from '@reach/router'
import React, { lazy, Suspense } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'

const USByCounty = lazy(() => import('../maps/us/USByCounty'))
const USByState = lazy(() => import('../maps/us/USByState'))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="content">
          <Router>
            <USByState path="/" />
            <USByState path="/state/:reportType" />
            <USByCounty path="/county/:reportType" />
            <USByState default />
          </Router>
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
