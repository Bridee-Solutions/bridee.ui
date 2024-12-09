import { element } from "prop-types";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import ReenviarEmail from "../pages/ReenviarEmail/ReenviarEmail";
import Painel from "../pages/Painel/Painel";
import Calculadora from "../pages/Calculadora/Calculadora";
import PlanejadorAssentos from "../pages/PlanejadorAssentos/PlanejadorAssentos";
import ListaTarefas from "../pages/ListaTarefas/ListaTarefas";
import Assessores from "../pages/Assessores/Assessores";
import Locais from "../pages/Locais/Locais";
import Convites from "../pages/Convites/Convites";
import Fornecedores from "../pages/Fornecedores/Fornecedores";
import Configuracoes from "../pages/ConfiguraçõesDashboard/configuracoes";
import { CasalContextProvider } from "./CasalContext";
import { Route, Routes } from "react-router-dom";
import SimpleBar from "simplebar-react";
import ConfiguracoesAssessor from "../pages/ConfigurarAssessor/Configuracoes";
import { AssessorContextProvider } from "./AssessorContext";
import { decrypt } from "../utils/criptografia";
import Error from "../pages/Error/Error";
import Calendario from "../pages/Calendario/Calendario";
import ConfirmarPresenca from "../pages/ConfirmarPresenca/ConfirmarPresenca";


export const rotasComuns = [{
    path: "/",
    element: <LandingPage/>
},
{
    path: "/login",
    element: <Login/>
},
{
    path: "/cadastrar",
    element: <Cadastro/>
},
{
    path: "/reenviar-email",
    element: <ReenviarEmail/>
},
{
    path: "*",
    element: <Error/>
},
{
    path: "/confirmar-presenca",
    element: <ConfirmarPresenca/>
},
]

export const casalRotas = [
{
    path: "/painel",
    element: <Painel/>
},
{
    path: "/calculadora-financeira",
    element: <Calculadora/>
},
{
    path: "/planejador-assentos",
    element: <PlanejadorAssentos/>
},
{
    path: "/lista-tarefas",
    element: <ListaTarefas/>
},
{
    path: "/assessores",
    element: <Assessores/>
},
{
    path: "/locais",
    element: <Locais/>
},
{
    path: "/lista-convidados",
    element: <Convites/>
},
{
    path: "/fornecedores",
    element: <Fornecedores/>
},
{
    path: "/configuracoes-casal",
    element: <Configuracoes/>
},
...rotasComuns
]

export const assessorRotas = [
    {
        path: "/configuracoes-assessor",
        element: <ConfiguracoesAssessor/>
    },
    {
        path: "/assessores/calendario",
        element: <Calendario/>
    },
    ...rotasComuns
]

export const rotas = [...rotasComuns, ...casalRotas, ...assessorRotas]