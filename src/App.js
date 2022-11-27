
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './Carousels'

import {  Route, Routes, useNavigate } from 'react-router-dom';
import Study from './pages/Study';
import Tech from './pages/Tech';
import Trend from './pages/Trend'
import {Main} from './Main'




function App(){
  
  return (
    <div>
      
    <Routes>
        <Route path ='/' element={<Main></Main>}/>
        <Route path ='/study' element={<Study/>}></Route>
        <Route path ='/tech' element={<Tech/>}/>
        <Route path ='/trend' element={<Trend/>}></Route>
    </Routes>
    </div>
  )
}

export default App;
