import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import Cadastro from './pages/Cadastro/Cadastro';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import ReenviarEmail from './pages/ReenviarEmail/ReenviarEmail';
import Error from "./pages/Error/Error"
import Painel from './pages/Painel/Painel';
import Calculadora from './pages/Calculadora/Calculadora';
import ListaConvidados from './pages/ListaConvidados/ListaConvidados';
import PlanejadorAssentos from './pages/PlanejadorAssentos/PlanejadorAssentos';
import ListaTarefas from './pages/ListaTarefas/ListaTarefas';
import Assessores from './pages/Assessores/Assessores';
import Locais from './pages/Locais/Locais';
import Fornecedores from './pages/Fornecedores/Fornecedores';
import Services from './pages/Services/Services';
import LocaisCategorias from './pages/LocaisCategorias/LocaisCategorias';
import FornecedoresCategorias from './pages/FornecedoresCategorias/FornecedoresCategorias';
import ConfirmarPresenca from './pages/ConfirmarPresença/ConfirmarPresenca';
import QuemVai from './pages/ConfirmarPresença/QuemVai/QuemVai';
import Agradecimento from './pages/ConfirmarPresença/Agradecimento/Agradecimento';


function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tela-inicial' element={<TelaInicial/>}></Route>
      <Route path='/cadastrar' element={<Cadastro/>}></Route>
      <Route path='/reenviar-email' element={<ReenviarEmail/>}></Route>
      <Route path='*' element={<Error/>}></Route>      
      <Route path='/painel' element={<Painel/>}></Route>
      <Route path='/calculadora-financeira' element={<Calculadora/>}></Route>
      <Route path='/lista-convidados' element={<ListaConvidados/>}></Route>
      <Route path='/planejador-assentos' element={<PlanejadorAssentos/>}></Route>
      <Route path='/lista-tarefas' element={<ListaTarefas/>}></Route>
      <Route path='/assessores' element={<Assessores/>}></Route>
      <Route path='/locais' element={<Locais/>}></Route>
      <Route path='/fornecedores' element={<Fornecedores/>}></Route>
      <Route path='/LocaisCategorias' element={<LocaisCategorias/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/FornecedoresCategorias' element={<FornecedoresCategorias/>}></Route>
      <Route path='/confirmarPresenca' element={<ConfirmarPresenca/>}></Route>
      <Route path='/QuemVai' element={<QuemVai/>}></Route>
      <Route path='/Agradecimentos' element={<Agradecimento/>}></Route>
     

    </Routes>
    <ToastContainer autoClose={2000}/>
   </Router>
  )
}

export default App
