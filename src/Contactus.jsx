import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Paper, Grid, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import p7 from "./Images/p7.png";
import TextField from "@material-ui/core/TextField";
import background from './Images/footer.png'


const useStyles = makeStyles({
  root: {
    // width:1168,
    // height: 980,
    borderRadius:20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  detail: {
    marginTop: 50,
    // marginLeft: 25,
  },
  textbox:{
    marginTop:5,
    height:65,
    width:365,

  },
  bgimg:{
    backgroundImage:`url(${background})`,
  }
});

export default function Contactus() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={12}>
            <center>
              <h2 style={{fontSize:'36px'}}>Need Help!</h2>
              <br />
              <p style={{fontSize:'20px',color:'#777777'}}>
                Protect yourself and others around you by knowing the facts and
                taking appropriate <br /> precautions. Floow advice provided by
                your local health authority.
              </p>
            </center>
          </Grid>
        </Grid>
        <br />
        <Grid item xs={12} md={12}>
          <img src={p7} className={classes.img} />
        </Grid>
        <Grid style={{marginTop:'20px'}} container>
          <Grid item xs={12} md={6}>
            <p>Danish GOHEL</p>
            <p>(+91) 9157999875</p>
            <p>Danish GOHEL</p>
            <p>(+91) 9157999875</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off">
              <TextField className={classes.textbox} id="filled-basic" label="Name" variant="filled" /><br />
              <TextField className={classes.textbox} id="filled-basic" label="Number" variant="filled" /><br />
              <TextField className={classes.textbox} id="filled-basic" label="How Can we Help!!" variant="filled" /><br />
              <TextField
                id="filled-basic"
                multiline
                className={classes.textbox}
                label="Tell your problem"
                variant="filled"
              /> <br />
            </form>
            <Button color="secondary">Click to send</Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
