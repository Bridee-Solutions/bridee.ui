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
  import SimpleBar from 'simplebar-react';
  import 'simplebar-react/dist/simplebar.min.css';
  import Fornecedores from './pages/Fornecedores/Fornecedores';
  function App() {

    return (
      <Router>
       <SimpleBar style={{ maxHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tela-inicial' element={<TelaInicial />} />
          <Route path='/cadastrar' element={<Cadastro />} />
          <Route path='/reenviar-email' element={<ReenviarEmail />} />
          <Route path='*' element={<Error />} />
          <Route path='/painel' element={<Painel />} />
          <Route path='/calculadora-financeira' element={<Calculadora />} />
          <Route path='/lista-convidados' element={<ListaConvidados />} />
          <Route path='/planejador-assentos' element={<PlanejadorAssentos />} />
          <Route path='/lista-tarefas' element={<ListaTarefas />} />
          <Route path='/assessores' element={<Assessores />} />
          <Route path='/locais' element={<Locais />} />
          <Route path='/fornecedores' element={<Fornecedores />} />
        </Routes>
      </SimpleBar>
      <ToastContainer autoClose={2000}/>
    </Router>
    )
  }

  export default App
