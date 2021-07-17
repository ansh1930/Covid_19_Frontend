import React,{useEffect,useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";


const useStyles = makeStyles((theme)=>({

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
      },
    fixedHeight: {
        height: 140,
      },
    
      fixedHeight2: {
        height: 540,
      },


}))


function Dash() {

    const classes = useStyles();
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
        <div>
                      <Grid container spacing={3}>
            {/* Recent Deposits */}

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} elevation={10}>
                <Deposits
                  title={"Recovered"}
                  backcolor="success.main"
                  stat={totaldata.recovered}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} elevation={10}>
                <Deposits
                  title={"Confirmed"}
                  backcolor="error.main"
                  stat={totaldata.confirmed}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} elevation={10}>
                <Deposits
                  title={"Death"}
                  backcolor="text.secondary"
                  stat={totaldata.deaths}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} elevation={10}>
                <Deposits
                  title={"Active"}
                  backcolor="warning.main"
                  stat={totaldata.active}
                />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            {/* Chart */}

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper2}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}

export default Dash
