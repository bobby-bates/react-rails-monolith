import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import NavBar from './components/NavBar'
import CerealsIndexContainer from './containers/CerealsIndexContainer'
import CerealShowContainer from './containers/CerealShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={CerealsIndexContainer} />
        <Route path='cereals/:id' component={CerealShowContainer} />
      </Route>
    </Router>
  )
}

export default App
