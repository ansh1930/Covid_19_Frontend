import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Dashboard  from "./Dashboard";
import Bedsavailable from './Bedsavailable'
import Header from "./Header";
import Aware from './Aware'
import Dash from "./Dash";
import Homepage from "./Homepage";
function App() {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Header component={<Homepage/>}/>
        </Route>
        <Route exact path="/beds">
          <Header component={<Bedsavailable/>} />
        </Route>
        {/* <Route exact path={user ? '/checkout' : '/login'}>
            <Header/>
            <Checkout/>
          </Route> */}
         
        <Route exact path="/Aware">
          <Header component={<Aware/>}/>
        </Route>
        <Route exact path="/Reports">
          <Header component={<Dashboard/>}/>
        </Route>
      </Switch>
    </React.Fragment>
    </Router>
  );
}

export default App;
