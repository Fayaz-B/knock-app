import './App.css'
import Home from './components/pages/Home'
import List from './components/pages/List'
import NavBar from './components/layouts/Navbar'
import NotFound from './components/pages/NotFound'
import Footer from './components/layouts/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UnderConstruction from './components/pages/UnderConstruction'

function App() {
  return (
    <Router>
          <div className='App'>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/list' component={List} />
              <Route exact path='/survey' component={UnderConstruction} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
    </Router>
  )
}

export default App
