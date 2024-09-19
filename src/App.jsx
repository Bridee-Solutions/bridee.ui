import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import Error from "./pages/Error/Error"

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tela-inicial' element={<TelaInicial/>}></Route>
      <Route path='/404' element={<Error/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
