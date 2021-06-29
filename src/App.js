import 'bootstrap/scss/bootstrap.scss';
import './App.css';

// Import Header
import Header from './components/Header/Header';

// Import Footer
import Footer from "./components/Footer/Footer"

// Import Dashboard
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />

      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
