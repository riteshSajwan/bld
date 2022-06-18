import TopBar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import BloodGroup from "./pages/bloodGroup/BloodGroup"
import Register from "./pages/register/Register"
import Contact from "./pages/contact/Contact"
import Footer from "./pages/footer/footer"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
} from "react-router-dom";


function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/" >
          <Home/>
          <Footer/>
        </Route>
        <Router path="/about">
          <About/>
        </Router>
        <Router path="/contact">
          <Contact/>
        </Router>
        <Router path="/getusers">
          <BloodGroup/>
        </Router>
        <Route path="/register" >
          <Register/>
        </Route>
        
        
      </Switch>

  </Router>
  );
}

export default App;
