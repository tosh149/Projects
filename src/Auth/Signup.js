import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Login.css'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    
  } from '@chakra-ui/react'

function Signup() {

    const API_URL='http://127.0.0.1:8000/user/register/'
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState([]);
    const [newForm, setForm] = useState(
        {
         
          first_name:'',
          last_name:'',
          email:'',
          username:'',
          password:'',
          confirm_password:''
        });

    const [error, setError] = useState({
        password: '',
        confirm_password: ''
      })


        function handleChange(e) {
            const name = e.target.name;
            const value = e.target.value;
            validateInput(e);
             setForm({...newForm,[name]:value});
             
            }

     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
        
     
            case "password":
             if (newForm.confirm_password && value !== newForm.confirm_password) {
                stateObj["confirm_password"] = "Password and Confirm Password does not match.";
                setValidated(false);
              } else {
                stateObj["confirm_password"] = newForm.confirm_password ? "" : error.confirmPassword;
              }
              break;
     
            case "confirm_password":
             if (newForm.password && value !== newForm.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
                setValidated(false);
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
   
    }


    const postData = async ()=>{
        const headers = { 'content-type': 'application/json','X-CSRFTOKEN': 'csrftoken'}  
        const body =  JSON.stringify(newForm);
        
        console.log("the body is"+ body);
       const options= {
         headers:headers, // Enter your IP address here
         method: 'POST', 
         mode: 'cors', 
         withCredentials:true,
         body: body // body data type must match "Content-Type" header
        }
       // const response = await axios.post(API_URL,body, headers );
       fetch(API_URL, options)
      .then((response) => {
       response.status == '200' ? setStatus({type:'success'}): setStatus({type:'failed'});
      }).catch((error) => {
      setStatus({type:'error',error})
      });
    } 
    
        const handleSubmit = (event) => {
            event.preventDefault();
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          setValidated(true);
          postData();
          console.log(newForm)
    
        };
    


  return (

    <Container fluid style={{padding:0}}>

{status?.type === 'success' &&  
    <Alert status='success'>
  <AlertIcon />
  Success, you have been created.
</Alert>}

{status?.type === 'failed' &&  
    <Alert status='error'>
  <AlertIcon />
  Error, Kindly contact our customer care for assistance
</Alert>}

        <Row>

        <Col md lg='8'>

        <img className="d-none d-md-block login-img" src="https://images.pexels.com/photos/5845680/pexels-photo-5845680.jpeg?auto=compress&cs=tinysrgb&w=800"/>
            </Col>

            <Col md lg='4'>
                <Stack>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name='first_name' onChange={handleChange} required />
        <Form.Control.Feedback type='invalid'>First name is required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name='last_name' onChange={handleChange}  required/>
        <Form.Control.Feedback type='invalid'>Last name is required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" name='email' onChange={handleChange}  required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" name='username' onChange={handleChange}  required/>
        <Form.Control.Feedback type='invalid'>Username is required</Form.Control.Feedback>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} onBlur={validateInput}  required/>
        <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>
        <Form.Control.Feedback >{error.password && <span className='err'>{error.password}</span>}</Form.Control.Feedback>

      </Form.Group>
   

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='confirm_password' onChange={handleChange} onBlur={validateInput} required/>
        <Form.Control.Feedback type='invalid'>Confirm password is required</Form.Control.Feedback>
        <Form.Control.Feedback className='err'>  {error.confirm_password && <span className='err'>{error.confirm_password}</span>}
</Form.Control.Feedback>
      </Form.Group>
   

      <Button variant=" btn clear-btn" type="submit">
        Submit
      </Button>

    </Form>
    </Stack>
    </Col>
    </Row>
    </Container>

  );
}

export default Signup;