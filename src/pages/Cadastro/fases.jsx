import EmailSent from "../../componentes/Cadastro/email/Email"
import Fase1 from "../../componentes/Cadastro/casal/fase1/Fase1"
import Fase2 from "../../componentes/Cadastro/casal/fase2/Fase2"
import Fase3 from "../../componentes/Cadastro/casal/fase3/Fase3"
import Fase4 from "../../componentes/Cadastro/casal/fase4/Fase4"
import Fase5 from "../../componentes/Cadastro/casal/fase5/Fase5"
import Fase6 from "../../componentes/Cadastro/casal/fase6/Fase6"
import Fase7 from "../../componentes/Cadastro/casal/fase7/Fase7"

export const componenteFase = (fases, setFase, usuario) => {
    if(usuario.tipo == "assessor"){
        return componentesFaseAssessor()
    }
    return componentesFaseCasal(fases, setFase, usuario)
}

const componentesFaseAssessor = (fases, setFase, usuario) => {

}

const componentesFaseCasal = (fases, setFase, usuario) => {
    if(fases.fase1){
        return <Fase1 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase2){
        return <Fase2 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase3){
        return <Fase3 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase4){
        return <Fase4 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase5){
        return <Fase5 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase6){
        return <Fase6 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase7){
        return <Fase7 setFase={setFase} usuario={usuario} fases={fases}/>
    }else if(fases.fase8){
        return <EmailSent titulo={`Confirmação de e-mail`} haveButton={false} email={usuario.email} tipo={"certo"}/>
    }
}

export const definirFaseAnterior = (fases) => {
    const fasesEntries = Object.entries(fases);
    for(let i = 0; i < fasesEntries.length; i++){            
        if(fasesEntries[i][1]){
            fases[fasesEntries[i][0]] = false
            fases[fasesEntries[i-1][0]] = true
            break
        }
    }
    return fases;
}

export const definirProximaFase = (fases) => {
    const fasesEntries = Object.entries(fases);
    for(let i = 0; i < fasesEntries.length; i++){            
        if(fasesEntries[i][1]){
            fases[fasesEntries[i][0]] = false
            fases[fasesEntries[i+1][0]] = true
        }
    }
    return fases;
}


export const definirUsuarioEFases = (window, usuario, fases, setFase) => {
    const queryParamObject = buildObjectFromQueryParam(window)
    usuario.current = definirObjetoUsuario(queryParamObject.tipo)
    fases.current = definirObjetoFase(queryParamObject.tipo)
    definirFluxoCadastro(queryParamObject.email, usuario.current, setFase, fases.current)
}

const definirFluxoCadastro = (userEmail, usuario, setFase, fases) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(userEmail && emailRegex.test(userEmail)){
        usuario.externo = true;
        usuario.email = userEmail;
        const proximaFase = definirProximaFase(fases)
        const componenteProximaFase = componenteFase(proximaFase, setFase, usuario)
        setFase(componenteProximaFase)
        return
    }
}

const buildObjectFromQueryParam = (window) => {
    const queryParam = extractQueryParams(window)
    const queryParamObject = {}
    queryParam.forEach(param => {
        queryParamObject[param[0]] = param[1]
    })
    return queryParamObject;
}

const extractQueryParams = (window) => {
    const urlArray = window.location.href.split("?");
    const queryParams = urlArray[1]
    redefineUrl(window, urlArray[0])
    if(queryParams != undefined){
        const queryParamItens = queryParams.split("&")
        if(queryParamItens != undefined){
            const queryParamsKeyValue = queryParamItens.map(queryParam => queryParam.split("="))
            return queryParamsKeyValue;
        }
    }
    return [];
}

const redefineUrl = (window, urlWithoutHash) => {
    window.history.replaceState({}, document.title, urlWithoutHash)
}

const definirObjetoUsuario = (tipo) => {
    return tipo == "assessor" ? usuarioAssessor() : usuarioCasal()
}

const definirObjetoFase = (tipo) => {
    return tipo == "assessor" ? fasesAssessor() : fasesCasal()
}

const usuarioAssessor = () => {
    return {
        email: "",
        senha: "",
        tipo: "assessor",
        confirmarSenha: "",
        nome: "",
        cnpj: "",
        emailEmpresa: "",
        externo: false
    }
}

const usuarioCasal = () => {
    return {
        email: "",
        senha: "",
        tipo: "casal",
        confirmarSenha: "",
        nome: "",
        nomeParceiro: "",
        isLocalReservado: false,
        local: "",
        dataCasamento: "",
        quantidadeConvidados: 0,
        externo: false
    }
}

const fasesAssessor = () => {
    return {
        fase1: true,
        fase2: false,
        fase3: false,
        fase4: false
    }
}

const fasesCasal = () => {
    return {
        fase1: true,
        fase2: false,
        fase3: false,
        fase4: false,
        fase5: false,
        fase6: false,
        fase7: false,
        fase8: false
    }
}