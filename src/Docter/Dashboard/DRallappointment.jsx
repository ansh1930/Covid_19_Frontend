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
import Keys from "../../Keys";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function DRallappointment() {
  const [Alldata, setAlldata] = useState([""]);
  const classes = useStyles();
  const [statuscolor, setstatuscolor] = useState('');
  const showallappointments = () => {
    const DoctorEmail = localStorage.getItem("DRemail");
    axios
      .post(`${Keys.Covid_APP_API_URL}/api/users/drallappoints`, {
        DoctorEmail: DoctorEmail,
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
                <strong>Patient Name</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Patient Email</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Reason</strong>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <strong>Date</strong>{" "}
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
                  <TableCell>{currdata.Patientname}</TableCell>
                  <TableCell>{currdata.PatientEmail}</TableCell>
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
