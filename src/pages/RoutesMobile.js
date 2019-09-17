// packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// constants
import {
  PAGE_HOME
} from 'constants/ROUTES'
import PageHomeMobile from './PageHome/mobile/PageHomeMobile'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesMobile
