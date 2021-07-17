import React from 'react';
import {Link} from '@material-ui/core/Link';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Box ,Grid} from '@material-ui/core';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    // flex: 1,
    
  },
  boxheight: {
    height: 140,
    display:'flex',
    justifyContent:"center"
  },
});



const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


export default function Deposits(props) {

  const classes = useStyles();
  return (
    <div classname={classes.depositContext}>
      <Grid sm={12} md={12}>
     <center>
       <br/>
      <h2 style={{color:'#555555'}}>{props.title}</h2>
      {/* <br/> */}
      <ThemeProvider theme={theme}>

      <Typography variant="h3" style={{color: props.backcolor}}>
        {props.stat}
      </Typography>
      </ThemeProvider>
     </center>
     <br/>
      </Grid>
    </div>
  );
}
