import { element } from "prop-types";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import { patch } from "@mui/material";
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


export const defineContext = () => {
    const tipoUsuario = decrypt(localStorage.getItem("tipoUsuario"));
    const authenticated = decrypt(localStorage.getItem("isAuthenticated"))
    const casamentoId = decrypt(localStorage.getItem("casamentoId"));
    if(tipoUsuario == "ASSESSOR"){
        return assessorContext(tipoUsuario, authenticated, casamentoId);
    }
    return casalContext(tipoUsuario, authenticated, casamentoId)
}

const casalContext = (type, authenticated, casamentoId) => {
    
    return <CasalContextProvider tipoUsuario={type} authenticated={authenticated} casamentoId={casamentoId}>
        <SimpleBar style={{ maxHeight: '100vh' }}>
        <Routes>
            <Route>
                {casalRotas?.map(rota => {
                    return <Route path={rota.path} element={rota.element}></Route>
                })}
            </Route>
        </Routes>
        </SimpleBar>
    </CasalContextProvider>
}

const assessorContext = (type, authenticated, casamentoId) => {
    return <AssessorContextProvider tipoUsuario={type} authenticated={authenticated} casamentoId={casamentoId}>
        <SimpleBar style={{ maxHeight: '100vh' }}>
            <Routes>
                {assessorRotas?.map((rota) => {
                    return <Route path={rota.path} element={rota.element}></Route>
                })}
            </Routes>
        </SimpleBar>
    </AssessorContextProvider>
}

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
}]

const casalRotas = [
    ...rotasComuns,
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
    path: "/convites/:casamentoId",
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
{
    path: "*",
    element: <Error/>
}
]

const assessorRotas = [
    ...rotasComuns,
    {
        path: "/configuracoes-assesssor",
        element: <ConfiguracoesAssessor/>
    }
]