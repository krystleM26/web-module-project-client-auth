import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Friends Database</h2>
      <nav>

      <Link to="/login">Login</Link>
      </nav>
     

    </div>
      </Router>
  );
}

export default App;
