import React, { lazy, Suspense, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'
import ReportContext from './ReportContext'
import StateRoutes from './StateRoutes'

const US = lazy(() => import('../maps/us/US'))

function App() {
  const [reportType, setReportType] = useState('cases')

  return (
    <ReportContext.Provider value={{ reportType, setReportType: (reportType) => setReportType(reportType) }}>
      <HashRouter>
        <Header />
        <Suspense fallback={<Loader />}>
          <div className="content">
            <Switch>
              <Route exact path={`/`}>
                <US />
              </Route>
              <Route exact path={`/us`}>
                <US />
              </Route>
              <StateRoutes />
              <Route>
                <US />
              </Route>
            </Switch>
          </div>
        </Suspense>
        <Footer />
      </HashRouter>
    </ReportContext.Provider>
  )
}

export default App
