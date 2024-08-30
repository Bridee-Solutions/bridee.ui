import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Login from './pages/Login/Login';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<PaginaInicial/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
  )
}

export default App
