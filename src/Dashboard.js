import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import INDIA from './Images/INDIA.jpg'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(0),
    // display: "flex",
    // overflow: "auto",
    // flexDirection: "column",
  },
  fixedHeight: {
    height: 140,
  },
  cases: {
    display: "flex",
    position: "relative",
    marginTop: "10px",
    // width: "990px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: "auto",
    paddingLeft: "auto",
  },
  fixedHeight2: {
    height: 540,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);

  const [totaldata, settotaldata] = useState([]);
  const covid19india = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actda = await res.json();
    console.log(actda);
    // settotaldata(actda.statewise['active','confirmed','deltadeaths','recovered'])
    settotaldata(actda.statewise[0]);
  };

  useEffect(() => {
    covid19india();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* All over india data */}
            <Grid style={{marginLeft:'auto',marginRight:'auto'}} item md={12}>

            
            <Paper className={classes.paper} elevation={3}>
              <Grid container className={classes.cases}>
                <Grid style={{marginLeft:'auto'}} item xs={6} md={3}>
                  <Deposits
                    title={"Recovered"}
                    backcolor="#00a152"
                    stat={totaldata.recovered}
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <Deposits
                    title={"Confirmed"}
                    backcolor="Red"
                    stat={totaldata.confirmed}
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <Deposits
                    title={"Death"}
                    backcolor="Grey"
                    stat={totaldata.deaths}
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <Deposits
                    title={"Active"}
                    backcolor="blue"
                    stat={totaldata.active}
                  />
                </Grid>
              </Grid>


              {/* <img src={INDIA} style={{height:25,width:25}} /> */}
              <center>
                {" "}
                <p>India</p>{" "}
              </center>
            </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
