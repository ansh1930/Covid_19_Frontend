import axios from "axios";
import jwtDecode from "jwt-decode";


const setAuthToken = token => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };



// Check token for login
export const loginuser = (data)=>{
    // console.log(data.data.token);
    setAuthToken(data.data.token);
    const decode = jwtDecode(data.data.token);
    console.log(decode);
    setuserdetail(decode.name,decode.email)
    // removeuserdetail()
    return(
      {Login : true}
      )
    }
    
    export const setuserdetail = (name,email)=>{
      localStorage.setItem('Name',name)
      localStorage.setItem('Email',email)
    }
    export const removeuserdetail = (name,email)=>{
      localStorage.removeItem('Name')
      localStorage.removeItem('Email')
    }






// Doctor Auth

export const logindoctor = (data)=>{
    // console.log(data.data.token);
    setAuthToken(data.data.token);
    const decode = jwtDecode(data.data.token);
    console.log(decode);
    setdoctordetail(decode.name,decode.email)
    // removeuserdetail()
    return(
        {Login : true}
    )
}

export const setdoctordetail = (name,email)=>{
  localStorage.setItem('DRName',name)
  localStorage.setItem('DRemail',email)
}
export const removedoctordetail = ()=>{
  localStorage.removeItem('DRName')
  localStorage.removeItem('DRemail')
}




// var hours = 1; // to clear the localStorage after 1 hour(if someone want to clear after 8hrs simply change hours=8)
// var now = new Date().getTime();
// var setupTime = localStorage.getItem('setupTime');
// if (setupTime == null) {
//     localStorage.setItem('setupTime', now)
// } else {
//     if(now-setupTime > hours*60*60*1000) {
//         localStorage.clear()
//         localStorage.setItem('setupTime', now);
//     }
// }