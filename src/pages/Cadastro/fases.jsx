import EmailSent from "../../component/Cadastro/email/Email"
import Fase2 from "../../component/Cadastro/casal/fase2/Fase2"
import Fase3 from "../../component/Cadastro/casal/fase3/Fase3"
import Fase4 from "../../component/Cadastro/casal/fase4/Fase4"
import Fase5 from "../../component/Cadastro/casal/fase5/Fase5"
import Fase6 from "../../component/Cadastro/casal/fase6/Fase6"
import Fase7 from "../../component/Cadastro/casal/fase7/Fase7"
import Fase1 from "../../component/Cadastro/casal/fase1/Fase1"

export const componenteFase = (fases, setFase, usuario) => {
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

export const definirFluxoCadastro = (window, usuario, setFase, fases) => {
    const userEmail = window.location.hash.substring(1);
    const urlWithoutHash = window.location.href.split("#")[0]
    window.history.replaceState({}, document.title, urlWithoutHash)
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

const definirTipoUsuario = (queryParams, usuario, fase) => {
    
}

export const definirObjetoUsuario = (tipo) => {
    return tipo == "assessor" ? usuarioAssessor() : usuarioCasal()
}

export const definirObjetoFase = (tipo) => {
    return tipo == "assessor" ? fasesAssessor() : fasesCasal()
}

const usuarioAssessor = () => {
    return {
        email: "",
        senha: "",
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