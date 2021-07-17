import 'bootstrap/scss/bootstrap.scss';
import  '@fortawesome/fontawesome-free/js/all';
import './App.css';

// Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Dashboard / Recap / Statistiques / About
import Dashboard from './pages/Dashboard/Dashboard';
import Recap from './pages/Recap/Recap';
import Statistiques from './pages/Statistiques/Statistiques';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Recap" component={Recap} />
        <Route exact path="/Stats" component={Statistiques} />
        <Route exact path="/About" component={About} />
      </Switch>
    </Router>
    
  );
}

export default App;
