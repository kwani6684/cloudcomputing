
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './Carousels'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { Outlet, Route, Routes } from 'react-router-dom';
import Study from './pages/Study';

function App(){
  return (
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
    <Carousels/>
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route path ='study' element={<Study/>}></Route>
        <Route path ='tech' element={<Study/>}></Route>
        <Route path ='trend' element={<Study/>}></Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App;
