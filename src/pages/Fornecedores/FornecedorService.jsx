import vestidos from "../../assets/fornecedores/vestidos.png"
import fotografo from "../../assets/fornecedores/fotógrafo.png"
import florista from "../../assets/fornecedores/floristas.png"
import buffet from "../../assets/fornecedores/buffetGastronomia.png"
import transporte from "../../assets/fornecedores/transporte.png"
import decoracao from "../../assets/fornecedores/decoracao.png"
import locais from "../../assets/fornecedores/locais.png"
import padeiro from "../../assets/fornecedores/padeiro.png"
import moda from "../../assets/fornecedores/modabeleza.png"
import videografos from "../../assets/fornecedores/videografos.png"
import papelaria from "../../assets/fornecedores/papelaria.png"
import entretenimento from "../../assets/fornecedores/entretenimento.png"
import praia from "../../assets/locais/praia.svg";
import arlivre from "../../assets/locais/arlivre.svg";
import castelo from "../../assets/locais/castelo.svg";
import hotel from "../../assets/locais/hotel.svg";
import industria from "../../assets/locais/industria.svg";
import igreja from "../../assets/locais/igreja.svg";
import salao from "../../assets/locais/salaãoDeFestas.svg";
import sitio from "../../assets/locais/sitio.svg";

const fornecedorImages = {
    "Vestidos": vestidos,
    "Fotógrafo": fotografo,
    "Florista": florista,
    "Buffet & Gastronomia": buffet,
    "Decoração": decoracao,
    "Locais": locais,
    "Transporte & acomodação": transporte,
    "Padeiro de bolos & Sobremesas": padeiro,
    "Moda e Beleza": moda,
    "Videógrafos": videografos,
    "Papelaria": papelaria,
    "Entretenimento": entretenimento
}

export const fornecedorImage = (content) => {
    content.imagemUrl = fornecedorImages[content.nome];
    content?.subcategorias?.forEach(sub => {
        sub.imagemUrl = defineLocalImage(sub.nome)
    })
}

const categorias = [
    { nome: "Praia", imagem: praia },
    { nome: "Espaços Industriais", imagem: industria },
    { nome: "Espaços de Eventos", imagem: salao },
    { nome: "Castelos", imagem: castelo },
    { nome: "Ar Livre", imagem: arlivre },
    { nome: "Hotéis", imagem: hotel },
    { nome: "Sítios", imagem: sitio },
    { nome: "Igrejas", imagem: igreja },
  ];

export const defineLocalImage = (nomeSubcategoria) => {    
    const categoria = categorias.filter(categoria => categoria.nome == nomeSubcategoria)[0];
    if(categoria != undefined){
      const imagem = categoria.imagem;
      return imagem;
    }
  }