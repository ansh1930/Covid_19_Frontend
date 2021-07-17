import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Paper, Button, Container } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import p1 from "./Images/P1.png";
import p2 from "./Images/P2.png";
import p3 from "./Images/p3.png";
import p4 from "./Images/p4.png";
import p5 from "./Images/p5.png";
import p6 from "./Images/p6.png";
import Deposits from "./Deposits";
import { color } from "@material-ui/system";
import Homepageassest from "./Homepageassest";
import Contactus from "./Contactus";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
  paper: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    marginTop:10,
    marginBottom:10,
  },
  common: {
    display: "flex",
    marginTop: "10px",
    // height:'747pxpx',
    // width:'1503px'
  },
  mobile: {
    position: "absolute",
    width: "100.39px",
    height: "217.95px",
    left: "5.83px",
    top: "5.05px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cases: {
    display: "flex",
    position:'relative',
    marginTop: "10px",
    // width: "990px",
    marginLeft: 'auto',
    marginRight:'auto',
    paddingRight:'auto',
    paddingLeft:'auto',
    // justifyContent: "center",
  },
}));

const theme = createMuiTheme({
  palette: {
    primaryy: green,
  },
});

export default function Homepage() {
  const [totaldata, settotaldata] = useState([]);

  const covid19india = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actda = await res.json();
    console.log(actda);
    // settotaldata(actda.statewise['active','confirmed','deltadeaths','recovered'])
    settotaldata(actda.statewise[0]);
  };

  const classes = useStyles();

  useEffect(() => {
    covid19india();
  }, []);
  return (
    <div>
      <Grid container spacing={3} className={classes.common}>
        <Grid item xs={12} md={6} lg={6}>
          <img className={classes.img} src={p1} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <p style={{ color: "red", fontSize: "20px" }}> <ReportProblemOutlinedIcon style={{paddingTop:5}} /> COVID-19 ALERT</p>
          <h2 style={{ fontSize: "42px" }}>
            Together we fight <br /> COVID-19
          </h2>
          <span style={{ color: "grey", fontSize: "22px" }}>
            Seque empowers you to get more done with intense focus and zero
            interruptions.Seque empowers you to get more done with intense focus
            and zero interruptions.
          </span>
          <br />
          <br />
          <br />
          <ThemeProvider theme={theme}>
            <Button style={{backgroundColor:'#4caf50'}}
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Let us help
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Paper className={classes.paper} elevation={3}>
        <Grid container className={classes.cases}>
          <Grid item xs={12} md={3}>
            <Deposits
              title={"Recovered"}
              backcolor="#40e66c"
              stat={totaldata.recovered}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Deposits
              title={"Confirmed"}
              backcolor="Red"
              stat={totaldata.confirmed}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Deposits
              title={"Death"}
              backcolor="error"
              stat={totaldata.deaths}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Deposits
              title={"Active"}
              backcolor="#56bdf5"
              stat={totaldata.active}
            />
          </Grid>
        </Grid>
          <center> <p>India</p> </center> 
      </Paper>

      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={p2} className={classes.img} />
        </Grid>
        <Grid item xs={12} md={6}>
          <h4 style={{fontSize:'35px'}}>What we do?</h4>
          <br />
          <p style={{color:'#555555',fontSize:'20px'}}>
            Covid 19 positive or Pneumonitis patient will be <br /> treated at home as
            per doctor order by GNC <br /> certified nursing staff.
          </p>
          <br />
          <ul>
            <li>Facilities of blood sugar</li>
            <li>B.P. Measurement</li>
            <li>Spo2 Measurement</li>
            <li>Ryle's tube insertion</li>
            <li>Catheterisation</li>
            <li>Dressing facilities are available 24*7</li>
          </ul>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <center>
          <h2 style={{fontSize:'36px'}}>Prevention</h2>
          <br />
          <p style={{color:'#555555',fontSize:'20px'}}>
            Protect yourself and others around you by knowing the facts and
            taking appropriate <br /> precautions. Floow advice provided by your
            local health authority.
          </p>
        </center>
      </Grid>
      <center>
      <Grid style={{marginLeft:'auto',marginRight:'auto'}} md={12} sm={12} container>
        <Grid item sm={12} md={4}>
          <Homepageassest
            image={p3}
            title={"Wear a mask"}
            desc={
              "Masks can help prevent the spread of the virus from the person wearing the mask to others."
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Homepageassest
            image={p4}
            title={"Wash your hands often"}
            desc={
              "Clean your hands with soop and water, or alcohol-based hand sanitizer."
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Homepageassest
            image={p5}
            title={"Physical distancing"}
            desc={
              "Maintain a safe distance especially from anyone who is coughinf or sneezing."
            }
          />
        </Grid>
      </Grid>
      </center>
      <br />
      <Grid item xs={12} md={12}>
        <center>
          <h2 style={{fontSize:'36px'}}>Symptoms</h2>
          <br />
          <p style={{fontSize:'20px',color:'#777777'}}>
          COVID-19 affects different people in different ways. Most infected people will <br /> develop mild to moderate illness and recover without hospitalization.
          </p>
        </center>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <center>
          <img src={p6} className={classes.img}/>
          </center>
        </Grid>
      </Grid>
      <br />
      <Contactus/>
      {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
    </div>
  );
}
