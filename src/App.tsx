import React from 'react'
import {Overview, LanguageDropdown, NameInput} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Container} from '@material-ui/core'

function App() {
  return (
    <Container className="App" maxWidth="xl">
      <Router>
        <Switch>
          <Route path="/create/language">
            <LanguageDropdown/>
          </Route>
          <Route path="/create/name">
            <NameInput/>
          </Route>
          <Route path="/">
            <Overview/>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
