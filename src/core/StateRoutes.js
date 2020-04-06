import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
const NY = lazy(() => import('../reports/us/states/NY'))
const NJ = lazy(() => import('../reports/us/states/NJ'))
const MI = lazy(() => import('../reports/us/states/MI'))
const LA = lazy(() => import('../reports/us/states/LA'))
const CA = lazy(() => import('../reports/us/states/CA'))
const WA = lazy(() => import('../reports/us/states/WA'))
const IL = lazy(() => import('../reports/us/states/IL'))
const MA = lazy(() => import('../reports/us/states/MA'))
const FL = lazy(() => import('../reports/us/states/FL'))
const GA = lazy(() => import('../reports/us/states/GA'))
const CT = lazy(() => import('../reports/us/states/CT'))
const PA = lazy(() => import('../reports/us/states/PA'))
const CO = lazy(() => import('../reports/us/states/CO'))
const TX = lazy(() => import('../reports/us/states/TX'))
const IN = lazy(() => import('../reports/us/states/IN'))
const OH = lazy(() => import('../reports/us/states/OH'))
const WI = lazy(() => import('../reports/us/states/WI'))
const MD = lazy(() => import('../reports/us/states/MD'))
const AZ = lazy(() => import('../reports/us/states/AZ'))
const MO = lazy(() => import('../reports/us/states/MO'))
const VA = lazy(() => import('../reports/us/states/VA'))
const TN = lazy(() => import('../reports/us/states/TN'))
const OK = lazy(() => import('../reports/us/states/OK'))
const NV = lazy(() => import('../reports/us/states/NV'))
const AL = lazy(() => import('../reports/us/states/AL'))
const KY = lazy(() => import('../reports/us/states/KY'))
const SC = lazy(() => import('../reports/us/states/SC'))
const MS = lazy(() => import('../reports/us/states/MS'))
const NC = lazy(() => import('../reports/us/states/NC'))
const MN = lazy(() => import('../reports/us/states/MN'))
const OR = lazy(() => import('../reports/us/states/OR'))
const RI = lazy(() => import('../reports/us/states/RI'))
const KS = lazy(() => import('../reports/us/states/KS'))
const VT = lazy(() => import('../reports/us/states/VT'))
const IA = lazy(() => import('../reports/us/states/IA'))
const DC = lazy(() => import('../reports/us/states/DC'))
const AR = lazy(() => import('../reports/us/states/AR'))
const DE = lazy(() => import('../reports/us/states/DE'))
const NM = lazy(() => import('../reports/us/states/NM'))
const ME = lazy(() => import('../reports/us/states/ME'))
const ID = lazy(() => import('../reports/us/states/ID'))
const NH = lazy(() => import('../reports/us/states/NH'))
const NE = lazy(() => import('../reports/us/states/NE'))
const UT = lazy(() => import('../reports/us/states/UT'))
const MT = lazy(() => import('../reports/us/states/MT'))
const AK = lazy(() => import('../reports/us/states/AK'))
const HI = lazy(() => import('../reports/us/states/HI'))
const ND = lazy(() => import('../reports/us/states/ND'))
const WV = lazy(() => import('../reports/us/states/WV'))
const SD = lazy(() => import('../reports/us/states/SD'))
const WY = lazy(() => import('../reports/us/states/WY'))

function StateRoutes() {
  return (
    <>
      <Route exact path={`/us/ny`}>
        <NY />
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
      <Route exact path={`/us/wa`}>
        <WA />
      </Route>
      <Route exact path={`/us/il`}>
        <IL />
      </Route>
      <Route exact path={`/us/ma`}>
        <MA />
      </Route>
      <Route exact path={`/us/fl`}>
        <FL />
      </Route>
      <Route exact path={`/us/ga`}>
        <GA />
      </Route>
      <Route exact path={`/us/ct`}>
        <CT />
      </Route>
      <Route exact path={`/us/pa`}>
        <PA />
      </Route>
      <Route exact path={`/us/co`}>
        <CO />
      </Route>
      <Route exact path={`/us/tx`}>
        <TX />
      </Route>
      <Route exact path={`/us/in`}>
        <IN />
      </Route>
      <Route exact path={`/us/oh`}>
        <OH />
      </Route>
      <Route exact path={`/us/wi`}>
        <WI />
      </Route>
      <Route exact path={`/us/md`}>
        <MD />
      </Route>
      <Route exact path={`/us/az`}>
        <AZ />
      </Route>
      <Route exact path={`/us/mo`}>
        <MO />
      </Route>
      <Route exact path={`/us/va`}>
        <VA />
      </Route>
      <Route exact path={`/us/tn`}>
        <TN />
      </Route>
      <Route exact path={`/us/ok`}>
        <OK />
      </Route>
      <Route exact path={`/us/nv`}>
        <NV />
      </Route>
      <Route exact path={`/us/al`}>
        <AL />
      </Route>
      <Route exact path={`/us/ky`}>
        <KY />
      </Route>
      <Route exact path={`/us/sc`}>
        <SC />
      </Route>
      <Route exact path={`/us/ms`}>
        <MS />
      </Route>
      <Route exact path={`/us/nc`}>
        <NC />
      </Route>
      <Route exact path={`/us/mn`}>
        <MN />
      </Route>
      <Route exact path={`/us/or`}>
        <OR />
      </Route>
      <Route exact path={`/us/ri`}>
        <RI />
      </Route>
      <Route exact path={`/us/ks`}>
        <KS />
      </Route>
      <Route exact path={`/us/vt`}>
        <VT />
      </Route>
      <Route exact path={`/us/ia`}>
        <IA />
      </Route>
      <Route exact path={`/us/dc`}>
        <DC />
      </Route>
      <Route exact path={`/us/ar`}>
        <AR />
      </Route>
      <Route exact path={`/us/de`}>
        <DE />
      </Route>
      <Route exact path={`/us/nm`}>
        <NM />
      </Route>
      <Route exact path={`/us/me`}>
        <ME />
      </Route>
      <Route exact path={`/us/id`}>
        <ID />
      </Route>
      <Route exact path={`/us/nh`}>
        <NH />
      </Route>
      <Route exact path={`/us/ne`}>
        <NE />
      </Route>
      <Route exact path={`/us/ut`}>
        <UT />
      </Route>
      <Route exact path={`/us/mt`}>
        <MT />
      </Route>
      <Route exact path={`/us/ak`}>
        <AK />
      </Route>
      <Route exact path={`/us/hi`}>
        <HI />
      </Route>
      <Route exact path={`/us/nd`}>
        <ND />
      </Route>
      <Route exact path={`/us/wv`}>
        <WV />
      </Route>
      <Route exact path={`/us/sd`}>
        <SD />
      </Route>
      <Route exact path={`/us/wy`}>
        <WY />
      </Route>
    </>
  )
}

export default StateRoutes
