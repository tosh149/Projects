import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './Login.css'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    
  } from '@chakra-ui/react'




export default function Login(props) {

  const API_URL ='http://127.0.0.1:8000/api/user/login/';

  const [status, setStatus] = useState([]);
  const [newForm, setForm] = useState(
      {
        username:'',
        password:'',
      });

  function validateForm() {

    return newForm.username.length > 0 && newForm.password.length > 0;

  }

  const navigate = useNavigate()

  const postData = async ()=>{
    const headers = { 'content-type': 'application/json','X-CSRFTOKEN': 'csrftoken'}
    const body =  JSON.stringify(newForm);
    
    
    console.log("the body is"+ body);
   const options= {
     headers:headers, // Enter your IP address here
     method: 'POST', 
     mode: 'cors', 
     withCredentials: true,
    //  credentials:'include',
     body: body // body data type must match "Content-Type" header
    }
   // const response = await axios.post(API_URL,body, headers );
   fetch(API_URL, options)
  .then((response) => {
   response.status == '200' ? setStatus({type:'success'}): setStatus({type:'failed'});
   if(response.status == 200){
   navigate('/home');
   }

  }).catch((error) => {
  setStatus({type:'error',error})
  });
  console.log(headers)
  
} 

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  }


  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
     setForm({...newForm,[name]:value});
     
    }

  return (

    <section className="Auth-form-container">
        {status?.type === 'success' &&  
    <Alert status='success'>
  <AlertIcon />
  Success!
</Alert>}

{status?.type === 'failed' &&  
    <Alert status='error'>
  <AlertIcon />
 Unable to login credentials don't match
</Alert>}
          <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-6">
        <img className="d-none d-md-block login-img" src="https://images.pexels.com/photos/5845680/pexels-photo-5845680.jpeg?auto=compress&cs=tinysrgb&w=800"/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center flex-column">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            className="form-control mt-1"
            placeholder="Enter username"
            onChange={ handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit"  className="btn btn-primary" disabled={!validateForm()}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
    </div>
    </div>
  </section>
  );

}