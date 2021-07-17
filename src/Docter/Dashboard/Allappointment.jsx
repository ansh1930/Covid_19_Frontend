import React, { useEffect, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  TablePagination,
} from "@material-ui/core/";
import Keys from '../../Keys'
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Allappointment() {
  const [Alldata, setAlldata] = useState([""]);
  const classes = useStyles();
  const [statuscolor, setstatuscolor] = useState('');
  const showallappointments = () => {
    const PatientEmail = localStorage.getItem("Email");
    axios
      .post(`${Keys.Covid_APP_API_URL}/api/users/allappoints`, {
        PatientEmail: PatientEmail,
      })
      .then((res) => {
        console.log(res.data.data);
        setAlldata(res.data.data);
        console.log(Alldata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const color = (col) => {

    if(col == "Pending") 
    {
      setstatuscolor("warning");
    } 
    else if(col == "Completed")
    {
      setstatuscolor("success");
    } 
    else if(col == "Removed")
    {
      setstatuscolor("error");
    }

  };
  useEffect(() => {
    showallappointments();
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <strong>Doctor Name</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Doctor Email</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Reason</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Doctor Date</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Status</strong>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Alldata.map((currdata, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{currdata.Doctorname}</TableCell>
                  <TableCell>{currdata.DoctorEmail}</TableCell>
                  <TableCell>{currdata.Reason}</TableCell>
                  <TableCell>{currdata.date}</TableCell>
                  <TableCell>
                    {/* {color(currdata.Status)} */}
                    <Alert severity={(currdata.Status === 'Pending') ? 'warning' : (currdata.Status === 'Completed') ? 'success' : (currdata.Status === 'Removed') ? 'error':'info'}>{currdata.Status}</Alert>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
