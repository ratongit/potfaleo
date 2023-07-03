import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/frontend.jpg'
import img1 from '../../assets/monogdb.png'
import img2 from '../../assets/nodejs-express.png'
import img3 from '../../assets/tailwine.png'
import img4 from '../../assets/react.jpeg'
import img5 from '../../assets/ui.jpg'
import img6 from '../../assets/firebase.avif'



function NoTransitionExample() {
  return (
    <Carousel className='w-[300px]  h-[450px]' slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[450px]"
          src={img6}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;