import Carousel from 'react-bootstrap/Carousel';
import c1 from './c1.jpeg'
function Carousels () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        style={{ height: "300px" }}
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Study</h3>
          <p>한 학기 동안 학습한 클라우드 컴퓨팅에 대한 전반적인 내용</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "300px" }}

          className="d-block w-100"
          src={c1}          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Technology</h3>
          <p>클라우드 컴퓨팅에 필요한 핵심 기술들</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img        
        style={{ height: "300px" }}

          className="d-block w-100"
          src={c1}          
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Trend</h3>
          <p>
            클라우드 컴퓨팅의 최신 동향들
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;