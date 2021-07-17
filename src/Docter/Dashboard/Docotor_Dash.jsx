import React from 'react'
import {Grid,Button,makeStyles} from '@material-ui/core'
import Doctormain from './Doctormain'
import { useHistory, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:15,
    },
    logoutbtn:{
        marginBottom:15
    }
  }));


export default function Docotor_Dash() {
    const classes = useStyles();
    let history = useHistory();

    const DRlogout = ()=>{
        localStorage.removeItem('DRName')
        localStorage.removeItem('DRemail')
        history.push('/')
    }

    return (
        <Grid container className={classes.root}>
            <Grid item md={10} sm={10} lg={10}>
                {"Hello"+" "+localStorage.getItem("DRName")}
            </Grid>
            <Grid item className={classes.logoutbtn}  md={2} sm={2} lg={2}>
                <Button onClick={()=>{DRlogout();}} variant='outlined' color='secondary'>Logout</Button>
            </Grid>
            <Doctormain/>
        </Grid>
    )
}
