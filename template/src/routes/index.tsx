import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PATHS } from 'src/constants/paths'
import Home from 'src/pages/Home'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path={PATHS.HOME} component={Home} />
    </Switch>
  )
}

export default routes
