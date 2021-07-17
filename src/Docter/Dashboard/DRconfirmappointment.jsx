import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import Keys from "../../Keys";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function DRconfirmappointment() {
  const classes = useStyles();
  const [data, setdata] = useState([""]);

  const getallappointment = () => {
    axios
      .post(`${Keys.Covid_APP_API_URL}/api/users/confirmappointments`, {
        DREmail: localStorage.getItem("DRemail"),
      })
      .then((res) => {
        // console.log(res.data.dataset);
        setdata(res.data.dataset);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Appointment_Accepted = (e) => {
    console.log(e);
    axios.post(`${Keys.Covid_APP_API_URL}/api/users/AcceptAppointment`,{
      ID : e,
    }).then((res)=>{
      console.log(res)
      getallappointment();
    }).catch((err)=>{
      console.log(err)
    })
  };

  const Appointment_rejected = (e) => {
    console.log(e);
    axios.post(`${Keys.Covid_APP_API_URL}api/users/RejectAppointment`,{
      ID : e,
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    getallappointment();
  }, []);

  return (
    <div>
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
                <strong>Patient Contact no</strong>{" "}
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
            {data.map((current, indexval) => {
              return (
                <TableRow key={indexval}>
                  <TableCell>{current.Patientname}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{current.PatientEmail}</TableCell>
                  <TableCell>{current.Reason}</TableCell>
                  <TableCell>{current.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={()=>{Appointment_Accepted(current._id)}}
                      style={{ color: "Green", borderColor: "green" }}
                    >
                      Accecpt
                    </Button>{" "}
                    &nbsp; / &nbsp;
                    <Button
                      variant="outlined"
                      onClick={()=>{Appointment_rejected(current._id);}}
                      style={{ color: "red", borderColor: "red" }}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
