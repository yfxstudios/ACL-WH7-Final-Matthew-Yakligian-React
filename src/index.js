import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Index from './views/index'
import Pictures from './views/pictures'
import FamilyTree from './views/family-tree'
import Interviews from './views/interviews'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Index} path="/" />
        <Route exact component={Pictures} path="/pictures" />
        <Route exact component={FamilyTree} path="/family-tree" />
        <Route exact component={Interviews} path="/interviews" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
