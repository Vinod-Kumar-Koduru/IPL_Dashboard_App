import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/each-match/:id" component={TeamMatches} />
  </Switch>
)

export default App
