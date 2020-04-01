import React, { lazy, Suspense, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'
import ReportContext from './ReportContext'
import StateRoutes from './StateRoutes'

const US = lazy(() => import('../reports/us/US'))

function App() {
  // category: cases / deaths
  // type: map / chart
  const [reportType, setReportType] = useState({ category: 'cases', type: 'map' })

  return (
    <ReportContext.Provider value={{ reportType, setReportType: (reportType) => setReportType(reportType) }}>
      <HashRouter>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={`/`}>
              <US />
            </Route>
            <Route exact path={`/us`}>
              <US />
            </Route>
            <Route exact path={`/about`}>
              <About />
            </Route>
            <Route exact path={`/contact`}>
              <Contact />
            </Route>
            <StateRoutes />
            <Route>
              <US />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </HashRouter>
    </ReportContext.Provider>
  )
}

export default App
