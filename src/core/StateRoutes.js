import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
const NY = lazy(() => import('../reports/us/states/NY'))
const WA = lazy(() => import('../reports/us/states/WA'))
const NJ = lazy(() => import('../reports/us/states/NJ'))
const MI = lazy(() => import('../reports/us/states/MI'))
const LA = lazy(() => import('../reports/us/states/LA'))
const CA = lazy(() => import('../reports/us/states/CA'))
const GA = lazy(() => import('../reports/us/states/GA'))
const IL = lazy(() => import('../reports/us/states/IL'))
const FL = lazy(() => import('../reports/us/states/FL'))
const MA = lazy(() => import('../reports/us/states/MA'))
const CO = lazy(() => import('../reports/us/states/CO'))
const PA = lazy(() => import('../reports/us/states/PA'))
const TX = lazy(() => import('../reports/us/states/TX'))
const OH = lazy(() => import('../reports/us/states/OH'))
const CT = lazy(() => import('../reports/us/states/CT'))
const IN = lazy(() => import('../reports/us/states/IN'))
const VA = lazy(() => import('../reports/us/states/VA'))
const AZ = lazy(() => import('../reports/us/states/AZ'))
const WI = lazy(() => import('../reports/us/states/WI'))
const SC = lazy(() => import('../reports/us/states/SC'))
const NV = lazy(() => import('../reports/us/states/NV'))
const OK = lazy(() => import('../reports/us/states/OK'))
const OR = lazy(() => import('../reports/us/states/OR'))
const MS = lazy(() => import('../reports/us/states/MS'))
const MD = lazy(() => import('../reports/us/states/MD'))
const MO = lazy(() => import('../reports/us/states/MO'))
const TN = lazy(() => import('../reports/us/states/TN'))
const VT = lazy(() => import('../reports/us/states/VT'))
const KY = lazy(() => import('../reports/us/states/KY'))
const AL = lazy(() => import('../reports/us/states/AL'))
const MN = lazy(() => import('../reports/us/states/MN'))
const KS = lazy(() => import('../reports/us/states/KS'))
const DC = lazy(() => import('../reports/us/states/DC'))
const DE = lazy(() => import('../reports/us/states/DE'))
const ID = lazy(() => import('../reports/us/states/ID'))
const AR = lazy(() => import('../reports/us/states/AR'))
const IA = lazy(() => import('../reports/us/states/IA'))
const NC = lazy(() => import('../reports/us/states/NC'))
const MT = lazy(() => import('../reports/us/states/MT'))
const NM = lazy(() => import('../reports/us/states/NM'))
const RI = lazy(() => import('../reports/us/states/RI'))
const UT = lazy(() => import('../reports/us/states/UT'))
const ND = lazy(() => import('../reports/us/states/ND'))
const NE = lazy(() => import('../reports/us/states/NE'))
const ME = lazy(() => import('../reports/us/states/ME'))
const NH = lazy(() => import('../reports/us/states/NH'))
const AK = lazy(() => import('../reports/us/states/AK'))
const SD = lazy(() => import('../reports/us/states/SD'))
const WV = lazy(() => import('../reports/us/states/WV'))
const WY = lazy(() => import('../reports/us/states/WY'))
const HI = lazy(() => import('../reports/us/states/HI'))

function StateRoutes() {
  return (
    <>
      <Route exact path={`/us/ny`}>
        <NY />
      </Route>
      <Route exact path={`/us/wa`}>
        <WA />
      </Route>
      <Route exact path={`/us/nj`}>
        <NJ />
      </Route>
      <Route exact path={`/us/mi`}>
        <MI />
      </Route>
      <Route exact path={`/us/la`}>
        <LA />
      </Route>
      <Route exact path={`/us/ca`}>
        <CA />
      </Route>
      <Route exact path={`/us/ga`}>
        <GA />
      </Route>
      <Route exact path={`/us/il`}>
        <IL />
      </Route>
      <Route exact path={`/us/fl`}>
        <FL />
      </Route>
      <Route exact path={`/us/ma`}>
        <MA />
      </Route>
      <Route exact path={`/us/co`}>
        <CO />
      </Route>
      <Route exact path={`/us/pa`}>
        <PA />
      </Route>
      <Route exact path={`/us/tx`}>
        <TX />
      </Route>
      <Route exact path={`/us/oh`}>
        <OH />
      </Route>
      <Route exact path={`/us/ct`}>
        <CT />
      </Route>
      <Route exact path={`/us/in`}>
        <IN />
      </Route>
      <Route exact path={`/us/va`}>
        <VA />
      </Route>
      <Route exact path={`/us/az`}>
        <AZ />
      </Route>
      <Route exact path={`/us/wi`}>
        <WI />
      </Route>
      <Route exact path={`/us/sc`}>
        <SC />
      </Route>
      <Route exact path={`/us/nv`}>
        <NV />
      </Route>
      <Route exact path={`/us/ok`}>
        <OK />
      </Route>
      <Route exact path={`/us/or`}>
        <OR />
      </Route>
      <Route exact path={`/us/ms`}>
        <MS />
      </Route>
      <Route exact path={`/us/md`}>
        <MD />
      </Route>
      <Route exact path={`/us/mo`}>
        <MO />
      </Route>
      <Route exact path={`/us/tn`}>
        <TN />
      </Route>
      <Route exact path={`/us/vt`}>
        <VT />
      </Route>
      <Route exact path={`/us/ky`}>
        <KY />
      </Route>
      <Route exact path={`/us/al`}>
        <AL />
      </Route>
      <Route exact path={`/us/mn`}>
        <MN />
      </Route>
      <Route exact path={`/us/ks`}>
        <KS />
      </Route>
      <Route exact path={`/us/dc`}>
        <DC />
      </Route>
      <Route exact path={`/us/de`}>
        <DE />
      </Route>
      <Route exact path={`/us/id`}>
        <ID />
      </Route>
      <Route exact path={`/us/ar`}>
        <AR />
      </Route>
      <Route exact path={`/us/ia`}>
        <IA />
      </Route>
      <Route exact path={`/us/nc`}>
        <NC />
      </Route>
      <Route exact path={`/us/mt`}>
        <MT />
      </Route>
      <Route exact path={`/us/nm`}>
        <NM />
      </Route>
      <Route exact path={`/us/ri`}>
        <RI />
      </Route>
      <Route exact path={`/us/ut`}>
        <UT />
      </Route>
      <Route exact path={`/us/nd`}>
        <ND />
      </Route>
      <Route exact path={`/us/ne`}>
        <NE />
      </Route>
      <Route exact path={`/us/me`}>
        <ME />
      </Route>
      <Route exact path={`/us/nh`}>
        <NH />
      </Route>
      <Route exact path={`/us/ak`}>
        <AK />
      </Route>
      <Route exact path={`/us/sd`}>
        <SD />
      </Route>
      <Route exact path={`/us/wv`}>
        <WV />
      </Route>
      <Route exact path={`/us/wy`}>
        <WY />
      </Route>
      <Route exact path={`/us/hi`}>
        <HI />
      </Route>
    </>
  )
}

export default StateRoutes
