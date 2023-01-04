
import { Container, Row, Stack,Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import './Hero.css'
import { BsFacebook,BsGoogle,BsInstagram,BsLinkedin,BsTwitter } from "react-icons/bs";

function CardSection() {
  return (
    <>
    <Container style={{marginTop:'20px',marginBottom:'20px' }}>
        <Stack gap={5} direction={'horizontal'}>
    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/164571/pexels-photo-164571.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body className='card_body'>
        <Card.Title>Platinum Credit Card</Card.Title>
        <Card.Text>
        High spenders, this gives you an unlimited credit use 
        </Card.Text>
        <Button  variant='btn card_btn'>Apply Here</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body className='card_body'>
        <Card.Title>Gold Credit Card</Card.Title>
        <Card.Text>
          Not as fancy as the platinum but gives you a limit of up to $50,000
        </Card.Text>
        <Button  variant='btn card_btn'>Apply Here</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body className='card_body'>
        <Card.Title>Silver Credit Card</Card.Title>
        <Card.Text>
         If you are a low spender this is for you get a limit of up to $20,000 
        </Card.Text>
        <Button variant='btn card_btn'>Apply Here</Button>
      </Card.Body>
    </Card>
    </Stack>
    </Container>

    <Container>
     <Stack gap={5} direction={'horizontal'} style={{marginBottom:'40px',marginTop:'50px'}}>
        <Row>
      <div className='col-lg-6'>
        <img src='https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
      </div>
      <div className='col-lg-6 d-flex justify-content-center flex-column '>
        <h2 style={{fontSize:'25px',fontWeight:'500',marginBottom:'10px'}}>Lorem Ipsum</h2>
        <h2 style={{fontSize:'20px',fontWeight:'400',marginBottom:'10px'}}>Something about Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </Row>
     </Stack>

     <Stack gap={5} direction={'horizontal'} style={{marginBottom:'20px'}}>
        <Row>
      
      <div className='col-lg-6 d-flex justify-content-center flex-column '>
        <h2 style={{fontSize:'25px',fontWeight:'500',marginBottom:'10px'}}>Lorem Ipsum</h2>
        <h2 style={{fontSize:'20px',fontWeight:'400',marginBottom:'10px'}}>Something about Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <div className='col-lg-6'>
        <img src='https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
      </div>
      </Row>
     </Stack>

    </Container>

<div className=" my-5" style={{backgroundColor:'#f46524',marginBottom:'0px'}}>
  <footer className="text-center text-white" style={{backgroundColor: "#3f51b"}}>
    <div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">About us</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Products</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Awards</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Help</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-5" style={{display:'flex',justifyContent:'center'}}>
        <a href="" className="text-white me-4">
          <BsFacebook/>
        </a>
        <a href="" className="text-white me-4">
         <BsTwitter/>
        </a>
        <a href="" className="text-white me-4">
        <BsGoogle/>
        </a>
        <a href="" className="text-white me-4">
          <BsInstagram/>
        </a>
        <a href="" className="text-white me-4">
         <BsLinkedin/>
        </a>
       
      </section>
    </div>

    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2023 Copyright:
      <a className="text-white" href="#"
         >Larry Devs</a
        >
    </div>
  </footer>
</div>
    </>
  );
}

export default CardSection;