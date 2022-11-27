

import trend0 from '../img/trend0.png'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import trend1 from '../img/trend1.png'
import trend2 from '../img/trend2.png'



const Trend=()=>{
    return(
        <>
        <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
        
        <Navbar.Brand href="/">CloudComputing</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/study">Study</Nav.Link>
          <Nav.Link href="/tech">tech</Nav.Link>
          <Nav.Link href="/trend">Trend</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        <header class="masthead" style={{backgroundImage:`url(${trend0})`,backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                          
                          <h1 style={{textAlign:"center", marginTop:"100px"}}>Trend</h1>
                            <h2 class="subheading" style={{textAlign:"center",marginBottom:"100px"}}>클라우드컴퓨팅의 최신 동향에 대해 설명합니다.</h2>
                        </div>
                    </div>
                </div>
            </div>
       </header>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading"><strong>클라우드 활용 현황</strong></h2>
                    <img src={trend1} style={{textAlign:"center"}}/>
                        <ul>
                          <li>전체의 89%가 멀티 클라우드를 활용하며, 이 중 대부분이 하이브리드 클라우드</li>
                          <li>마이크로소프트 애저와 아마존 AWS의 갭 축소</li>
                          <li>45%의 기업은 클라우드 간 애플리케이션 사일로(Silo; 부서이기주의)화</li>
                          <li>2/3 이상이 원래 계획보다 클라우드를 초과 활용</li>
                        </ul>
                        <p>관련자료 : <a href="https://slownews.kr/87378">플렉세라 보고서: 클라우드 동향과 시사점</a></p>
                        
                    
                    <h2 class="section-heading"><strong>클라우드 네이티브 기술의 상승의 이유</strong></h2>
                    <img src={trend2} style={{textAlign:"center"}}/>
                        <ul>
                          <li>자원 효율성을 높임</li>
                          <li>개발의 민첩성 확보</li>
                          <li>회복 탄력성 개선</li>
                        </ul>
                        <p>관련자료 : <a href="https://zdnet.co.kr/view/?no=20221101120801">오픈스택과 클라우드 네이티브 기술이 급성장한 이유</a></p>
                        
                    <h2 class="section-heading"><strong>결론</strong></h2>
                    
                        <p>기업들, 이제 클라우드 확산에 방점</p>
                        <ul>
                          <li>클라우드 도입 단계보다 확산 전략에 초점</li>
                          <li>대부분 조직이 멀티 클라우드로 가고 있음 - 멀티 클라우드를 얼마나 활용하는가가 관건</li>
                          <li>클라우드 네이티브</li>
                        </ul>
                    </div>
                    <div style={{textAlign:"center", margin:"30"}}>
                <Button onClick={()=>{window.scrollTo(0,0)}} >맨 위로</Button>
                </div>
                </div>
            </>
      
    )
}

export default Trend;