import Fase1 from "../../component/Cadastro/fase1/Fase1"
import Fase2 from "../../component/Cadastro/fase2/Fase2"
import Fase3 from "../../component/Cadastro/fase3/Fase3"
import Fase4 from "../../component/Cadastro/fase4/Fase4"
import Fase5 from "../../component/Cadastro/fase5/Fase5"
import Fase6 from "../../component/Cadastro/fase6/Fase6"
import Fase7 from "../../component/Cadastro/fase7/Fase7"
import { fases } from "./Cadastro"


export const componenteFase = (fases, setFase, usuario) => {
    if(fases.fase1){
        return <Fase1 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase2){
        return <Fase2 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase3){
        return <Fase3 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase4){
        return <Fase4 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase5){
        return <Fase5 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase6){
        return <Fase6 setFase={setFase} usuario={usuario}/>
    }else if(fases.fase7){
        return <Fase7 setFase={setFase} usuario={usuario}/>
    }
}

export const definirFaseAnterior = () => {
    var fasesEntries = Object.entries(fases);
    for(var i = 0; i < fasesEntries.length; i++){            
        if(fasesEntries[i][1]){
            fases[fasesEntries[i][0]] = false
            fases[fasesEntries[i-1][0]] = true
        }
    }
    return fases;
}

export const definirProximaFase = () => {
    var fasesEntries = Object.entries(fases);
    for(var i = 0; i < fasesEntries.length; i++){            
        if(fasesEntries[i][1]){
            fases[fasesEntries[i][0]] = false
            fases[fasesEntries[i+1][0]] = true
        }
    }
    return fases;
}

export const definirFluxoCadastro = (window, usuario, setFase) => {
    const userEmail = window.location.hash.substring(1);
    const urlWithoutHash = window.location.href.split("#")[0]
    window.history.replaceState({}, document.title, urlWithoutHash)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(userEmail && emailRegex.test(userEmail)){
        usuario.externo = true;
        usuario.email = userEmail;
        setFase(componenteFase(definirProximaFase(), setFase, usuario))
        return
    }
}