import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/ContactMe"

import "./app.css"

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
