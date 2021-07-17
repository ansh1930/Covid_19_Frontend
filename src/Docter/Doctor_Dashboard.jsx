import React from "react";
import { Button } from "@material-ui/core";
import {removeuserdetail} from './Auth/auth_action'
import {useHistory,Redirect} from "react-router-dom";

function Doctor_Dashboard() {
    let history = useHistory();
    const Logout = ()=>{
        removeuserdetail();
        // history.push('/');
        <Redirect to='/'/>
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="outlined" onClick={Logout} color="secondary">
        Logout
      </Button>
      {
          console.log(localStorage.getItem('Name'))
      }
    </div>
  );
}

export default Doctor_Dashboard;
