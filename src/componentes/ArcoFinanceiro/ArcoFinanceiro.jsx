import React from "react";
import "./ArcoFinanceiro.module.css";
import { GaugeComponent } from "react-gauge-component";

const ArcoFinanceiro = ({ gasto = 0, total = 10000 }) => {
  const gastoValidado = isNaN(gasto) || gasto < 0 ? 0 : gasto;
  const totalValidado = isNaN(total) || total <= 0 ? 10000 : total;

  // Valor para o gauge
  const gaugeValue = (gastoValidado / totalValidado) * 100;

  return (
    <div className="orcamento-gauge-container">
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          subArcs: [
            {
              limit: 60, // Valor máximo de gasto (60% do total)
              color: "#DD7B78", // Cor do gasto
              showTick: true,
            },
            {
              limit: 100, // Cor de alerta
              color: "#CCC",  // Amarelo para alerta
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
            formatTextValue: (value) => `R$ ${gastoValidado}`,
          },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) =>
                `R$ ${(value * (totalValidado / 100)).toFixed(0)}`, // Exibindo os valores em reais
              style: { fontSize: 10 },
            },
            ticks: [
              { value: 0 },
              { value: 50 }, // 50% de R$ 10000 = R$ 5000
              { value: 100 }, // 100% de R$ 10000 = R$ 10000
            ],
          },
        }}
        value={gaugeValue} // Passa o valor proporcional ao gasto
        minValue={0}
        maxValue={100} // Representa 100% do total
      />
      
    </div>
  );
};

export default ArcoFinanceiro;
