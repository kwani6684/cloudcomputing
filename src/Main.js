import mainimage from './bg1.jpeg'
import img1 from './bg.png'
import img2 from './img2.jpeg'
import img3 from './img3.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const Main=()=>{

    let navigate = useNavigate()
    return(
        <div>
        <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
        
        <Navbar.Brand href="/">CloudComputing</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/study">Study</Nav.Link>
          <Nav.Link href="/tech">Tech</Nav.Link>
          <Nav.Link href="/trend">Trend</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" style= {{alignItems:"center"}} src={mainimage} alt="..." /></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">CloudComputing Project</h1>
                    <p>한 학기 동안 배운 클라우드 컴퓨팅에 대한 전반적인 내용을 소개합니다</p>
                    
                </div>
            </div>
            <div class="row gx-4 gx-lg-5">
              <CardGroup>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Study</Card.Title>
        <Card.Text>
        클라우드컴퓨팅에 대해 학습한 내용입니다.
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate('/study')}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2}/>
      <Card.Body>
        <Card.Title>Technology</Card.Title>
        <Card.Text>
        클라우드컴퓨팅에 필요한 기술들을 소개합니다.
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate('/tech')}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Trends</Card.Title>
        <Card.Text>
        클라우드컴퓨팅의 최신 동향에 대해 설명합니다.
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate('/trend')}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
            </div>
            </div>
    
    )
}