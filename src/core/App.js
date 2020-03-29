import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Routes } from 'react-router-dom'
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
          <Routes>
            <Route path="/" element={<USByState />} />
            <Route path="/state/:reportType" element={<USByState />} />
            <Route path="/county/:reportType" element={<USByCounty />} />
            <Redirect from="*" to="/" />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
