
import study0 from '../img/study0.png'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import study1 from '../img/study1.png'
import study5 from '../img/study5.png'
import study3 from '../img/study3.png'
import study4 from '../img/study4.png'



const Study =()=>{
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
        <header class="masthead" style={{backgroundImage:`url(${study0})`,backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading ">
                          
                          <h1 style={{textAlign:"center", marginTop:"100px"}}>Study</h1>
                            <h2 class="subheading" style={{textAlign:"center",marginBottom:"100px"}}>클라우드컴퓨팅에 대해 학습한 내용입니다.</h2>
                        </div>
                    </div>
                </div>
            </div>
       </header>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading"><strong>클라우드 컴퓨팅이란?</strong></h2>
                    <img src={study1} style={{textAlign:"center"}}/>
                        <p>클라우드 컴퓨팅은 컴퓨팅 파워, 데이터베이스, 스토리지, 애플리케이션 및 기타 IT 리소스를 온디맨드로 인터넷을 통해 제공하고 사용한 만큼만 요금을 지불하는 것을 말합니다.</p>
                        <ul>
                          <li>소프트웨어로서의 인프라</li>
                          <li>유연함</li>
                          <li>획일적인 과중한 작업 해소</li>
                        </ul>
                    <h2 class="section-heading"><strong>클라우드 컴퓨팅의 특징</strong></h2>
                    
                        
                        <ul>
                          <li>주문형 셀프 서비스 - 사용자가 개별 관리</li>
                          <li>광범위한 네트워크 접속</li>
                          <li>리소스 공유</li>
                          <li>신속한 확장성- scale up/down</li>
                          <li>측정 가능한 서비스 - 종량제</li>
                        </ul>
                    <h2 class="section-heading"><strong>클라우드 컴퓨팅 모델</strong></h2>
                    <img src={study3} style={{textAlign:"center"}}/>
                        <h3>Iaas(Infrastructure as a Service)</h3>
                        <ul>
                          <li>서비스형 인프라</li>
                          <li>비즈니스 운영에 필요한 스토리지, 네트워킹 및 컴퓨팅 리소스를 제공함</li>
                          <li>ex: Linode, DigitalOcean, AWS</li>
                        </ul>
                    <img src={study4} style={{textAlign:"center"}}/>
                        <h3>Paas(Platform as a Service)</h3>
                        <ul>
                          <li>서비스형 플랫폼</li>
                          <li>애플리케이션 및 서비스를 구축할 수 있는 플랫폼을 제공함</li>
                          <li>ex: AWS Elastic Beanstalk, Windows Azure, Google App Engine </li>
                        </ul>
                    <img src={study5} style={{textAlign:"center"}}/>
                        <h3>Saas(Software as a Service)</h3>
                        <ul>
                          <li>서비스형 소프트웨어</li>
                          <li>공급업체가 모든 물리적 및 가상 핵심 인프라, 미들웨어, 데이터베이스 관리 시스템, 개발 툴 등을 제공하고 호스팅함</li>
                          <li>확장성과 유연성, 접근성이 뛰어남</li>
                          <li>ex: iCloud, Google Drive, 네이버 MYBOX</li>
                        </ul>
                    <h2 class="section-heading"><strong>클라우드 컴퓨팅의 장점</strong></h2>
                   
                        <ul>
                          <li>경제성</li>
                          <li>유연성: 리소스를 필요할 때, 필요한 만큼만 확장/축소</li>
                          <li>가용성: 장애 발생시 계속 사용 가능</li>
                          <li>빠른 구축 속도</li>
                          <li>손쉬운 글로벌 서비스</li>
                          <li>강력한 보안</li>
                        </ul>
                    </div>
                    <hr/>
                </div>
                <div style={{textAlign:"center", margin:"30"}}>
                <Button onClick={()=>{window.scrollTo(0,0)}} >맨 위로</Button>
                </div>
            </>
      
    )
}

export default Study;