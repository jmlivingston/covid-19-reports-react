import CssBaseline from '@material-ui/core/CssBaseline'
import React, { lazy, Suspense, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer2 from './Footer2'
import Header2 from './Header2'
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
        <CssBaseline />
        <Header2 />
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
        <Footer2 />
      </HashRouter>
    </ReportContext.Provider>
  )
}

export default App
