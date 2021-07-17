import React,{useEffect,useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import {TableRow} from '@material-ui/core/';
import Title from './Title';
import  TableContainer  from '@material-ui/core/TableContainer';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    // marginTop: theme.spacing(113),
    backgroundColor:'black'
  },
  container: {
    maxHeight: 440,
  },
  Title:{
    margin:15
  }
}));

export default function Orders() {
  
  const [data, setdata] = useState([])

  const getcovdData = async()=>{
    try {
      const res = await fetch('https://api.covid19india.org/data.json')
      const actualdata = await res.json();
      // console.log(actualdata.statewise)
      setdata(actualdata.statewise)
      
      
    } catch (error) {
      console.log("error "+error)
    }
  }
  useEffect(() => {
    getcovdData();
  }, [])
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className={classes.Title}>State Wise</Title>

    <TableContainer className={classes.container}>

      <Table size="small" stickyHeader aria-label="sticky table">
        <TableHead className={classes.seeMore}>
          <TableRow>
            <TableCell><strong>State</strong></TableCell>
            <TableCell><strong>Confirmed</strong></TableCell>
            <TableCell><strong>Active</strong></TableCell>
            <TableCell><strong>Recovered</strong></TableCell>
            <TableCell><strong>Deceases</strong></TableCell>
            <TableCell><strong>Last Updated Time</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((curr,ind) => {
            return(
              <TableRow key={ind}>
              <TableCell>{curr.state}</TableCell>
              <TableCell>{curr.confirmed}</TableCell>
              <TableCell>{curr.active}</TableCell>
              <TableCell>{curr.recovered}</TableCell>
              <TableCell>{curr.deaths}</TableCell>
              <TableCell>{curr.lastupdatedtime}</TableCell>
            </TableRow>
              )})}
        </TableBody>
      </Table>

      </TableContainer>
    </React.Fragment>
  );
}