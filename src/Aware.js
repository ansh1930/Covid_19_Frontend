import React from "react";
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from "react-router-dom";
import Signup from "./Docter/Signup";
import Docotor_Sign from "./Docter/Docotor_Sign.jsx";
import Signin from "./Docter/Signin";
import Patient_Dash from "./Docter/Dashboard/Patient_Dash";
import Docotor_Dash from "./Docter/Dashboard/Docotor_Dash.jsx";
import { setuserdetail } from "./Docter/Auth/auth_action";
function Aware() {
  const checklogin = () => {
    if (localStorage.getItem("Name") !== null) {
      return <Patient_Dash />;
      // return <Redirect to="/Aware/PatientDashboard"/>
    } else if (localStorage.getItem("DRName") !== null) {
      return <Docotor_Dash />;
      // return <Redirect to="/Aware/PatientDashboard"/>
    } else {
      // return <Redirect to="/Aware/Signup"/>
      return <Signup />;
    }
  };
  return (
    <Router>
      {/* <Switch> */}
        <Route exact path="/Aware">
          {checklogin()}
        </Route>
        <Route exact path="/Aware/Signin">
          <Signin />
        </Route>
        <Route exact path="/Aware/Signup">
          <Signup />
        </Route>
        <Route exact path="/Aware/Docotor_Sign">
          <Docotor_Sign />
        </Route>
        <Route exact path="/Aware/PatientDashboard">
          <Patient_Dash />
        </Route>
        <Route exact path="/Aware/DocotorDashboard">
          <Docotor_Dash />
        </Route>
        {/* <Route exact path={user ? '/checkout' : '/login'}>
                <Header/>
                <Checkout/>
              </Route> */}
      {/* </Switch> */}
    </Router>
  );
}

export default Aware;
