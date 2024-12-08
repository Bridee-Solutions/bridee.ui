import React, { useState } from "react";
import InputConvite from "../../componentes/InputConvite/InputConvite";
import QuemVai from "../../componentes/QuemVai/QuemVai";
import MensagemAgradecimento from "../../componentes/MensagemAgradecimento/MensagemAgradecimento";

function ConfirmarPresenca() {
  const [etapa, setEtapa] = useState("inserirPin");
  const [pin, setPin] = useState("");
  const [erro, setErro] = useState('');
  const [convidados, setConvidados] = useState([
    { nome: "Elizeu Duarte", status: "" },
    { nome: "Amanda Geovanna", status: "" },
    { nome: "Beatriz Rocha", status: "" },
    { nome: "Enzo Martins", status: "" },
    { nome: "Ian Silva", status: "" },
  ]);

  const handleReiniciarEtapas = () => {
    setEtapa("inserirPin");
    setPin(""); 
    setErro("");
  };

  const handleVerificarPin = (valor) => {
    if (valor === "1234") {
      setEtapa("quemVai");
    } else {
      setErro("Convite não encontrado. Verifique o PIN informado.");
    }
  };

  const handleResposta = (nome, status) => {
    const novosConvidados = convidados.map((convidado) =>
      convidado.nome === nome ? { ...convidado, status } : convidado
    );
    setConvidados(novosConvidados);
  };

  const handleFinalizar = () => {
    setEtapa("agradecimento");
  };

  return (
    <div className="container">
      {etapa === "inserirPin" && (
        <InputConvite
          onVerificarPin={handleVerificarPin}
          pin={pin}
          setPin={setPin}
          erro={erro}
        />
      )}

      {etapa === "quemVai" && (
        <QuemVai
          convidados={convidados}
          onResposta={handleResposta}
          onFinalizar={handleFinalizar}
          onVoltar={() => setEtapa("inserirPin")}
        />
      )}

      {etapa === "agradecimento" && (
        <MensagemAgradecimento onFinalizar={handleReiniciarEtapas} />
      )}
    </div>
  );
}

export default ConfirmarPresenca;
