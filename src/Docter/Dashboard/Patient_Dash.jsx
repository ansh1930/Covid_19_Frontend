import React from "react";
import PropTypes from 'prop-types';
import { Button,Grid,Container,Tab,Tabs,AppBar,Typography,Box,makeStyles } from "@material-ui/core";
import { removeuserdetail } from "../Auth/auth_action";
import { useHistory, Redirect,Link } from "react-router-dom";
import Patientmain from './Patientmain'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:15,
  },
  logoutbtn:{
    marginBottom:20
  }
}));

export default function Patient_Dash() {
  const classes = useStyles();
        let history = useHistory();
        const Logout = ()=>{
            removeuserdetail();
            history.push("/");
            // <Redirect to exact ='/' />
        }

    
  return (
    // <div >
    //   <h1>Patient Dashboard</h1>
    //   <Button variant="outlined" onClick={Logout} color="secondary">
    //     Logout
    //   </Button>
    //   {console.log(localStorage.getItem("Name"))}
    // </div>
    <Grid container className={classes.root}>
    <Grid item md={10} sm={10} lg={10}>
        {"Hello"+" "+localStorage.getItem("Name")}
    </Grid>
    <Grid item className={classes.logoutbtn}  md={2} sm={2} lg={2}>
        <Button onClick={()=>{Logout();}} variant='outlined' color='secondary'>Logout</Button>
    </Grid>

    <Patientmain/>
</Grid>
  );
}
