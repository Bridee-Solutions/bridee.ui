import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import Error from "./pages/Error/Error"
import Painel from './pages/Painel/Painel';
import Calculadora from './pages/Calculadora/Calculadora';
import ListaConvidados from './pages/ListaConvidados/ListaConvidados';
import PlanejadorAssentos from './pages/PlanejadorAssentos/PlanejadorAssentos';
import ListaTarefas from './pages/ListaTarefas/ListaTarefas';
import Assessores from './pages/Assessores/Assessores';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tela-inicial' element={<TelaInicial/>}></Route>
      <Route path='*' element={<Error/>}></Route>      
      <Route path='/painel' element={<Painel/>}></Route>
      <Route path='/calculadora-financeira' element={<Calculadora/>}></Route>
      <Route path='/lista-convidados' element={<ListaConvidados/>}></Route>
      <Route path='/planejador-assentos' element={<PlanejadorAssentos/>}></Route>
      <Route path='/lista-tarefas' element={<ListaTarefas/>}></Route>
      <Route path='/assessores' element={<Assessores/>}></Route>

    </Routes>
   </Router>
  )
}

export default App
