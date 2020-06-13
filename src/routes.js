import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'

const Routes = props => (
  <Suspense fallback={null} >
    <Switch>
      <Route exact path="/" component={routerProps => <Home {...routerProps} />} />

      <Route exact path="/login" component={routerProps => <SignIn {...routerProps} />} />
      <Route exact path="/signup" component={routerProps => <SignUp {...routerProps} />} />

    </Switch>
  </Suspense>
)

export default Routes
