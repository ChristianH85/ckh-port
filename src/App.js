
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
    </div>
  );
}

export default App;
