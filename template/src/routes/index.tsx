import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default routes