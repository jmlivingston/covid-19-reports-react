import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
const WA = lazy(() => import('../maps/us/states/WA'))
const IL = lazy(() => import('../maps/us/states/IL'))
const CA = lazy(() => import('../maps/us/states/CA'))
const AZ = lazy(() => import('../maps/us/states/AZ'))
const MA = lazy(() => import('../maps/us/states/MA'))
const WI = lazy(() => import('../maps/us/states/WI'))
const TX = lazy(() => import('../maps/us/states/TX'))
const NE = lazy(() => import('../maps/us/states/NE'))
const UT = lazy(() => import('../maps/us/states/UT'))
const OR = lazy(() => import('../maps/us/states/OR'))
const FL = lazy(() => import('../maps/us/states/FL'))
const NY = lazy(() => import('../maps/us/states/NY'))
const RI = lazy(() => import('../maps/us/states/RI'))
const GA = lazy(() => import('../maps/us/states/GA'))
const NH = lazy(() => import('../maps/us/states/NH'))
const NC = lazy(() => import('../maps/us/states/NC'))
const NJ = lazy(() => import('../maps/us/states/NJ'))
const CO = lazy(() => import('../maps/us/states/CO'))
const MD = lazy(() => import('../maps/us/states/MD'))
const NV = lazy(() => import('../maps/us/states/NV'))
const TN = lazy(() => import('../maps/us/states/TN'))
const HI = lazy(() => import('../maps/us/states/HI'))
const IN = lazy(() => import('../maps/us/states/IN'))
const KY = lazy(() => import('../maps/us/states/KY'))
const MN = lazy(() => import('../maps/us/states/MN'))
const OK = lazy(() => import('../maps/us/states/OK'))
const PA = lazy(() => import('../maps/us/states/PA'))
const SC = lazy(() => import('../maps/us/states/SC'))
const DC = lazy(() => import('../maps/us/states/DC'))
const KS = lazy(() => import('../maps/us/states/KS'))
const MO = lazy(() => import('../maps/us/states/MO'))
const VT = lazy(() => import('../maps/us/states/VT'))
const VA = lazy(() => import('../maps/us/states/VA'))
const CT = lazy(() => import('../maps/us/states/CT'))
const IA = lazy(() => import('../maps/us/states/IA'))
const LA = lazy(() => import('../maps/us/states/LA'))
const OH = lazy(() => import('../maps/us/states/OH'))
const MI = lazy(() => import('../maps/us/states/MI'))
const SD = lazy(() => import('../maps/us/states/SD'))
const AR = lazy(() => import('../maps/us/states/AR'))
const DE = lazy(() => import('../maps/us/states/DE'))
const MS = lazy(() => import('../maps/us/states/MS'))
const NM = lazy(() => import('../maps/us/states/NM'))
const ND = lazy(() => import('../maps/us/states/ND'))
const WY = lazy(() => import('../maps/us/states/WY'))
const AK = lazy(() => import('../maps/us/states/AK'))
const ME = lazy(() => import('../maps/us/states/ME'))
const AL = lazy(() => import('../maps/us/states/AL'))
const ID = lazy(() => import('../maps/us/states/ID'))
const MT = lazy(() => import('../maps/us/states/MT'))
const WV = lazy(() => import('../maps/us/states/WV'))

function StateRoutes() {
  return (
    <>
      <Route exact path={`/us/wa`}>
        <WA />
      </Route>
      <Route exact path={`/us/il`}>
        <IL />
      </Route>
      <Route exact path={`/us/ca`}>
        <CA />
      </Route>
      <Route exact path={`/us/az`}>
        <AZ />
      </Route>
      <Route exact path={`/us/ma`}>
        <MA />
      </Route>
      <Route exact path={`/us/wi`}>
        <WI />
      </Route>
      <Route exact path={`/us/tx`}>
        <TX />
      </Route>
      <Route exact path={`/us/ne`}>
        <NE />
      </Route>
      <Route exact path={`/us/ut`}>
        <UT />
      </Route>
      <Route exact path={`/us/or`}>
        <OR />
      </Route>
      <Route exact path={`/us/fl`}>
        <FL />
      </Route>
      <Route exact path={`/us/ny`}>
        <NY />
      </Route>
      <Route exact path={`/us/ri`}>
        <RI />
      </Route>
      <Route exact path={`/us/ga`}>
        <GA />
      </Route>
      <Route exact path={`/us/nh`}>
        <NH />
      </Route>
      <Route exact path={`/us/nc`}>
        <NC />
      </Route>
      <Route exact path={`/us/nj`}>
        <NJ />
      </Route>
      <Route exact path={`/us/co`}>
        <CO />
      </Route>
      <Route exact path={`/us/md`}>
        <MD />
      </Route>
      <Route exact path={`/us/nv`}>
        <NV />
      </Route>
      <Route exact path={`/us/tn`}>
        <TN />
      </Route>
      <Route exact path={`/us/hi`}>
        <HI />
      </Route>
      <Route exact path={`/us/in`}>
        <IN />
      </Route>
      <Route exact path={`/us/ky`}>
        <KY />
      </Route>
      <Route exact path={`/us/mn`}>
        <MN />
      </Route>
      <Route exact path={`/us/ok`}>
        <OK />
      </Route>
      <Route exact path={`/us/pa`}>
        <PA />
      </Route>
      <Route exact path={`/us/sc`}>
        <SC />
      </Route>
      <Route exact path={`/us/dc`}>
        <DC />
      </Route>
      <Route exact path={`/us/ks`}>
        <KS />
      </Route>
      <Route exact path={`/us/mo`}>
        <MO />
      </Route>
      <Route exact path={`/us/vt`}>
        <VT />
      </Route>
      <Route exact path={`/us/va`}>
        <VA />
      </Route>
      <Route exact path={`/us/ct`}>
        <CT />
      </Route>
      <Route exact path={`/us/ia`}>
        <IA />
      </Route>
      <Route exact path={`/us/la`}>
        <LA />
      </Route>
      <Route exact path={`/us/oh`}>
        <OH />
      </Route>
      <Route exact path={`/us/mi`}>
        <MI />
      </Route>
      <Route exact path={`/us/sd`}>
        <SD />
      </Route>
      <Route exact path={`/us/ar`}>
        <AR />
      </Route>
      <Route exact path={`/us/de`}>
        <DE />
      </Route>
      <Route exact path={`/us/ms`}>
        <MS />
      </Route>
      <Route exact path={`/us/nm`}>
        <NM />
      </Route>
      <Route exact path={`/us/nd`}>
        <ND />
      </Route>
      <Route exact path={`/us/wy`}>
        <WY />
      </Route>
      <Route exact path={`/us/ak`}>
        <AK />
      </Route>
      <Route exact path={`/us/me`}>
        <ME />
      </Route>
      <Route exact path={`/us/al`}>
        <AL />
      </Route>
      <Route exact path={`/us/id`}>
        <ID />
      </Route>
      <Route exact path={`/us/mt`}>
        <MT />
      </Route>
      <Route exact path={`/us/wv`}>
        <WV />
      </Route>
    </>
  )
}

export default StateRoutes
