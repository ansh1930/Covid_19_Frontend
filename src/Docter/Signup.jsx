import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import { Menu, MenuItem, Button,Snackbar } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Keys from "../Keys";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Ggender = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
];

export default function SignUp() {
  const [mes, setmes]  = useState('');
  const [col, setcol]  = useState('');
    const classes = useStyles();
//   const [gender, setgender] = React.useState("");


const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password1: '',
    password2: '',
    DOB:'',
    Gender:'',
});
const { firstName, lastName , DOB , Gender , email, password1, password2 } = formData;
const handleChange2 = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && lastName && email && password1 && DOB)
    {
        if(password1 === password2){
            console.log(firstName,lastName,email,password2,Gender,DOB)
            axios.post(`${Keys.Covid_APP_API_URL}/api/users/register`,{
              firstName : firstName,
              lastName : lastName,
              email : email,
              DOB : DOB,
              Gender : Gender,
              password1 : password1
            }).then((res)=>{
              console.log(res.data)
              setmes(res.data.message)
              setcol=(res.data.color)
            }).catch((err)=>{
              console.log(err)
            })
            
          }else{
            setmes('Password Does Not Match ')
            setcol('error')
          }
    }
    else{
      
        setmes('Please Write all the Detials')
        setcol('error')
        
    }
};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Alert severity={col}>{mes}</Alert>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange2('firstName')}
                value={firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange2('lastName')}
                value={lastName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={handleChange2('email')}
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Gender"
                name='Gender'
                select
                label="Select"
                value={Gender}
                onChange={handleChange2('Gender')}
                helperText="Please select your Gender"
              >
                {Ggender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="DOB"
                onChange={handleChange2('DOB')}
                value={DOB}
                type="date"
                id="DOB"
                helperText="Please select your DOB"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password1"
                label="Password"
                type="password"
                id="password1"
                onChange={handleChange2('password1')}
                value={password1}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                onChange={handleChange2('password2')}
                value={password2}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/Aware/Signin" style={{textDecoration: 'none',color: '#140078'}} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
