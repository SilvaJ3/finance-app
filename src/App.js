import 'bootstrap/scss/bootstrap.scss';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Import Dashboard / Budget / Statistiques
import Dashboard from './pages/Dashboard/Dashboard';
import Budget from './pages/Budget/Budget';
import Statistiques from './pages/Statistiques/Statistiques';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Budget" component={Budget} />
        <Route exact path="/Stats" component={Statistiques} />
      </Switch>
    </Router>
    
  );
}


// V1
// function App() {
//   return (
//     <div className="App">
//       <Header />

//       <Dashboard />

//       <Footer />
//     </div>
//   );
// }

export default App;
