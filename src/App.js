import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import Contact from './components/Pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
