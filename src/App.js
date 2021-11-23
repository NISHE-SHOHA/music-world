import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route  path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
