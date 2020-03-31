import React, { lazy, Suspense, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'
import ReportContext from './ReportContext'
import StateRoutes from './StateRoutes'

const Country = lazy(() => import('../maps/us/Country'))

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
                <Country />
              </Route>
              <Route exact path={`/us`}>
                <Country />
              </Route>
              <StateRoutes />
              <Route>
                <Country />
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
