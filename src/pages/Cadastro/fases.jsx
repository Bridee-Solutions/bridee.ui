import Fase1 from "../../component/Cadastro/fase1/Fase1"
import Fase2 from "../../component/Cadastro/fase2/Fase2"
import Fase3 from "../../component/Cadastro/fase3/Fase3"

export const fases = {
    fase1: true,
    fase2: false,
    fase3: false,
    fase4: false,
    fase5: false,
    fase6: false
}

export const componenteFase = (fases, setFase) => {
    if(fases.fase1){
        return <Fase1 setFase={setFase}/>
    }else if(fases.fase2){
        return <Fase2 setFase={setFase}/>
    }else if(fases.fase3){
        return <Fase3/>
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