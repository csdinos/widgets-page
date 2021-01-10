import React from 'react'
import {Overview, LanguageDropdown, NameInput} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
