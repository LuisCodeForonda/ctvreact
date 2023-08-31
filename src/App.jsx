import Counter from "./components/Counter"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Programacion from './components/Programacion'

function App() {

  return (
    <>
      <h1 className='text-2xl'>Hellow</h1>
      <Counter />
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
