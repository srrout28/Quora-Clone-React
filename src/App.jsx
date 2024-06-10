//--import Route--
import { Route, Routes } from 'react-router-dom';
//--import components--
import Signup from './components/Signup';
import Main from './components/Main';

function App() {
 
  return (
   <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
   </>
  )
}

export default App
