import  Container  from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import './Hero.css'
import  Button  from 'react-bootstrap/Button';
import CardSection from './Cards';
function HeroContent() {
  return (
   <>
    <Carousel fade controls={false}>
      <Carousel.Item>
        <div className='carousel_bg'>

        <Stack gap={5} className="carousel_content">
      <div>
        <h3 className='carousel_title'>One Stop Banking Solution</h3>
      </div>
      <div>
        <p className='carousel_body'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam placerat pharetra. 
Aenean a tempus velit. Fusce sollicitudin, mauris a semper viverra, ligula neque pulvinar ligula,</p>
      </div>
      <div>
        <Button variant='outline-light'> Learn More</Button>
      </div>
    </Stack>
        </div>
        <img
          className="d-block w-100 carousel_img"
          src="https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>

      <div className='carousel_bg'>

<Stack gap={5} className="carousel_content">
<div>
<h3 className='carousel_title'>One Stop Banking Solution</h3>
</div>
<div>
<p className='carousel_body'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam placerat pharetra. 
Aenean a tempus velit. Fusce sollicitudin, mauris a semper viverra, ligula neque pulvinar ligula,</p>
</div>
<div>
<Button variant='outline-light'> Learn More</Button>
</div>
</Stack>
</div>

        <img
          className="d-block w-100 carousel_img"
          src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>

      <div className='carousel_bg'>

<Stack gap={5} className="carousel_content ">
<div>
<h3 className='carousel_title'>One Stop Banking Solution</h3>
</div>
<div>
<p className='carousel_body'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam placerat pharetra. 
Aenean a tempus velit. Fusce sollicitudin, mauris a semper viverra, ligula neque pulvinar ligula,</p>
</div>
<div>
<Button variant='outline-light'> Learn More</Button>
</div>
</Stack>
</div>


        <img
          className="d-block w-100 carousel_img"
          src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
   
   <CardSection/>
   </>
  );
}

export default HeroContent;