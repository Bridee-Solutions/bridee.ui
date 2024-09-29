import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import Cadastro from './pages/Cadastro/Cadastro';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tela-inicial' element={<TelaInicial/>}></Route>
      <Route path='/cadastrar' element={<Cadastro/>}></Route>
    </Routes>
    <ToastContainer autoClose={2000}/>
   </Router>
  )
}

export default App
