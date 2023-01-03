import { Col, Container, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './App.css'  

function CreditCard() {

    const API_URL='http://127.0.0.1:8000/api/user/'
    const [status, setStatus] = useState([]);
    const [newForm, setForm] = useState(
        {
         
            SSN: '',
            income: '',
            address1: '',
            address2: '',
            zip_code: '',
            city: '',
            Username: 1
        });




        function handleChange(e) {
            const name = e.target.name;
            const value = e.target.value;
             setForm({...newForm,[name]:value});
             
            }



    const postData = async ()=>{
        const headers = { 'content-type': 'application/json'}  
        const body =  JSON.stringify(newForm);
        
        console.log("the body is"+ body);
       const options= {
         headers:headers, // Enter your IP address here
         method: 'POST', 
         mode: 'cors', 
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
          postData();
          console.log(newForm)
    
        };
    


  return (

    <Container fluid style={{padding:0}} >
        <Row className='d-flex justify-content-center'>

            <Col md lg='8'>
                <Stack>
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="SSN">
        <Form.Label>SSN</Form.Label>
        <Form.Control type="text" placeholder="Enter 9 digit ssn" name='SSN' onChange={handleChange} required />
        <Form.Control.Feedback type='invalid'>SSN is required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="income">
        <Form.Label>Income:</Form.Label>
        <Form.Control type="text" placeholder="Enter income" name='income' onChange={handleChange}  required/>
        <Form.Control.Feedback type='invalid'>Income is required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address1' onChange={handleChange}  required/>
        <Form.Control.Feedback type='invalid'>Address 1 required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address2' onChange={handleChange}  required/>
        <Form.Control.Feedback type='invalid'>Address 2 required</Form.Control.Feedback>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="zip_code">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter zip code" name='zip_code' onChange={handleChange} required/>
        <Form.Control.Feedback type='invalid'>Zip Code is required</Form.Control.Feedback>
        
      </Form.Group>
   

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="password" placeholder="Enter city" name='city' onChange={handleChange}required/>
        <Form.Control.Feedback type='invalid'>City is required</Form.Control.Feedback>
      </Form.Group>
   

      <Button variant="success" type="submit">
        Submit
      </Button>

    </Form>
    </Stack>
    </Col>
    </Row>
    </Container>

  );
}

export default CreditCard;