import { Container, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Hero.css'

function CardSection() {
  return (
    <>
    <Container style={{marginTop:'20px',marginBottom:'20px' }}>
        <Stack gap={5} direction={'horizontal'}>
    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/164571/pexels-photo-164571.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '26rem'}} className="card_style">
      <Card.Img variant="top" src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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
    </>
  );
}

export default CardSection;