import Carousel from 'react-bootstrap/Carousel';
import { banner ,banner1,banner2,banner3,banner4,banner5} from "./images/index";
import "./styles.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="bannerphoto" src={banner}/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="bannerphoto" src={banner1}/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="bannerphoto" src={banner2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="bannerphoto" src={banner3}/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="bannerphoto" src={banner4}/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="bannerphoto" src={banner5}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;