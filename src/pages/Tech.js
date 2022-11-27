import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import tech0 from '../img/tech0.png'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'


import tech1 from '../img/tech1.png'
import tech2 from '../img/tech2.png'
import tech3 from '../img/tech3.png'
import tech4 from '../img/tech4.png'



const Tech =()=>{
    return(
        <>
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
        <header class="masthead" style={{backgroundImage:`url(${tech0})`,backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                          
                          <h1 style={{textAlign:"center", marginTop:"100px"}}>Technology</h1>
                            <h2 class="subheading" style={{textAlign:"center",marginBottom:"100px"}}>클라우드컴퓨팅에 필요한 기술들을 소개합니다.</h2>
                        </div>
                    </div>
                </div>
            </div>
       </header>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading"><strong>서버 가상화 기술</strong></h2>
                    <img src={tech1} style={{textAlign:"center"}}/>
                        <p>하나의 물리적 서버 리소스에 여러 개의 서버 환경을 할당하고, 각각의 환경에 OS 와 어플리케이션을 실행할 수 있게 한다.</p>
                        <ul>
                          <li>서버리소스를 최대한 활용한다.</li>
                          <li>공간이 절약되고, 비용도 절감할 수 있다.</li>
                          <li>각각의 가상서버는 독립상태로 존재한다.</li>
                        </ul>
                    <h2 class="section-heading"><strong>분산처리 기술</strong></h2>
                    <img src={tech2} style={{textAlign:"center"}}/>
                        <p>대량의 빅데이터를 여러 서버에 분산하여 동시에 병렬로 빠르고 효율적으로 처리하는 기술</p>
                        <ul>
                          <li>대용량 데이터 처리를 가능하게 한다.</li>
                        </ul>
                    <h2 class="section-heading"><strong>서버리스 컴퓨팅</strong></h2>
                    <img src={tech3} style={{textAlign:"center"}}/>
                        <p>클라우드 컴퓨팅 실행 모델의 하나로, AWS와 같은 클라우드 제공자가 동적으로 가상 머신 자원의 할당을 관리해 미리 설정된 서버리스 코드를 실행시키는 기술을 의미한다.</p>
                        <ul>
                          <li>사용자는 서버의 존재를 의식하지 않고 응용프로그램 실행 가능</li>
                          <li>클라우드 서비스의 각 컴포넌트와 연계, 개별 기능을 조합하여 서비스를 개발하는 방향</li>
                        </ul>
                    <h2 class="section-heading"><strong>대브옵스(DevOps)</strong></h2>
                    <img src={tech4} style={{textAlign:"center"}}/>
                        <p>개발팀(Development)이 하는일(웹 사이트 개발, 앱 개발, 알고리즘 개발), 운영팀(Operation)이 하는일(아이템을 고객들에게 전달)을 통합</p>
                        <ul>
                          <li>협력을 통해 소프트웨어를 더욱 신속하게 만듦</li>
                          <li>세분화된 제어 및 구성관리기술로 보안을 높은 수준으로 유지 가능</li>
                        </ul>
                    </div>
                    <div style={{textAlign:"center", margin:"30"}}>
                <Button onClick={()=>{window.scrollTo(0,0)}} >맨 위로</Button>
                </div>
                </div>
            </>
      
    )
}

export default Tech;