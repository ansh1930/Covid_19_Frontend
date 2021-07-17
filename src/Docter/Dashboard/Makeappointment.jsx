import React, { useState ,useEffect} from "react";
import axios from "axios";
import Keys from "../../Keys";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core/";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Makeappointment() {
  const [Reasonn , setReasonn] = useState('--');
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState([]);
  const [bookdata , setbookdata] =useState([]);
  
  const handleClickOpen = (e) => {
    setOpen(true);
    // console.log(e);
    setbookdata(e)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmappointment = ()=>{
      return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      )
  }
  const getdoctordata = () => {
    axios
      .get(`${Keys.Covid_APP_API_URL}/api/users/alldocotor`)
      .then((res) => {
        // console.log(res.data.data);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newappointment = (DName,DEmail,Satat)=>{
    const Patientname = localStorage.getItem('Name');
    const Doctorname = DName;
    const PatientEmail = localStorage.getItem('Email');
    const DoctorEmail = DEmail;
    // const Datee = '';
    // const Repot = '';
    const Reason = Reasonn;
    const Status = Satat;
    console.log(PatientEmail,Patientname,DoctorEmail,Doctorname,Status)
    axios.post(`${Keys.Covid_APP_API_URL}/api/users/appointmets`,{
       Patientname : Patientname,
       Doctorname : Doctorname,
       PatientEmail : PatientEmail,
       DoctorEmail : DoctorEmail,
       Reason:Reason,
      // const Datee = '';
      // const Repot = '';
     Status : Status
    }).then((res)=>{

    }).catch((err)=>{
      console.log("ERROR : "+err)
    })
  }
  useEffect(() => {
      getdoctordata();
      confirmappointment();
  }, [])
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <strong>Doctor Name </strong>
                </TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Contact no</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Book</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((curr, indx) => {
                return (
                  <TableRow key={indx}>
                    <TableCell>{curr.Fullname}</TableCell>
                    <TableCell>{curr.Specialist}</TableCell>
                    <TableCell>{curr.Mobile}</TableCell>
                    <TableCell>{curr.email}</TableCell>
                    <TableCell>{curr.Location}</TableCell>
                    <TableCell>
                    <Button variant="contained" color="secondary" onClick={()=>{handleClickOpen(curr);console.log(bookdata);}}>Book</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Confirm Your Appointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="Reason"
              name="Reason"
              label="Reason"
              type="text"
              fullWidth
              multiline
              value={Reasonn}
              onChange={(e)=>{setReasonn(e.target.value)}}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={()=>{
              handleClose();
              newappointment(bookdata.Fullname,bookdata.email,'Pending');
            }} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
