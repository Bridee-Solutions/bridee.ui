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
import Configuracoes from './pages/ConfiguraçõesDashboard/configuracoes';
import Convites from './pages/Convites/Convites';
import { CasalContextProvider } from './context/CasalContext';
import ConfiguracoesAssessor from './pages/ConfigurarAssessor/Configuracoes';
import { AssessorContextProvider } from './context/AssessorContext';
import { defineContext, rotasComuns } from './context/Context';
import { useState } from 'react';
import { decrypt } from './utils/criptografia';

  function App() {

    return (
      <Router>
        {defineContext()}
        <ToastContainer autoClose={2000}/>
      </Router>
    )
  }

  export default App
