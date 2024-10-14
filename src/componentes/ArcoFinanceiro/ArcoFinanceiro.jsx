import React from "react";
import { GaugeComponent } from "react-gauge-component";

const ArcoFinanceiro = ({ gasto = 0, total = 10000 }) => {
  const gastoValidado = isNaN(gasto) || gasto < 0 ? 0 : gasto;
  const totalValidado = isNaN(total) || total <= 0 ? 10000 : total;

  // Valor para o gauge
  const gaugeValue = (gastoValidado / totalValidado) * 100;
  const restante = totalValidado - gastoValidado;

  const containerStyle = {
    textAlign: "center",
    position: "relative"
  };

  const tickContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-10px", // Ajuste a distância entre a barra e os ticks
    width: "100%",
    padding: "0 20px",
    position: "absolute",
    bottom: "0",
  };
 

  return (
    <div style={containerStyle}>
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.1, 
          padding: 0.005,
          cornerRadius: 1,
          subArcs: [
            {
              limit: 50, // Proporção de gasto
              color: "#DD7B78", // Cor do gasto
              showTick: true,
            },
            {
              limit: 100, // Restante
              color: "#E5E5E5", // Cor cinza clara para o restante
              showTick: true,
            },
          ],
        }}
        pointer={{
          color: "#FFFFFF",
          length: 0.8,
          width: 1,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => "",
            style: {display: "none" }, // Ocultando o valor do gauge
          },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) =>
                `R$ ${(value * (totalValidado / 100)).toFixed(0)}`, // Exibindo os valores em reais
              style: { fontSize: 14, color: "#000000" },
            },
            ticks: [
              { value: 0 },
              { value: 100 }, // 100% de R$ 10000 = R$ 10000
            ],
          },
        }}
        value={gaugeValue} // Passa o valor proporcional ao gasto
        minValue={0}
        maxValue={100} // Representa 100% do total
      />

      {/* Texto adicional para o restante e gasto */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div style={{ fontSize: "15px", fontWeight: "500", color: "#333", fontFamily: "Montserrat" }}>
          R$ {gastoValidado.toFixed(0)}
        </div>
        <div style={{ fontSize: "13px", color: "#999", fontFamily: "Montserrat", padding: "0px 0px 20px 0px" }}>Gasto</div>
        {restante > 0 && (
          <>
            <div style={{ fontSize: "15px", fontWeight: "500", color: "#333", fontFamily: "Montserrat"  }}>
              R$ {restante.toFixed(0)}
            </div>
            <div style={{ fontSize: "13px", color: "#999", fontFamily: "Montserrat"  }}>Restante</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArcoFinanceiro;
