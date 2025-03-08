"use client";

import React, { useState, useEffect } from "react";

const ContadorIdade: React.FC = () => {
  const [idade, setIdade] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const calcularIdade = () => {
      const nascimento = new Date(2007, 11, 5); // 05/11/2007 (mês 10, pois novembro é o mês 10)
      const agora = new Date();

      let anos = agora.getFullYear() - nascimento.getFullYear();
      let meses = agora.getMonth() - nascimento.getMonth();
      let dias = agora.getDate() - nascimento.getDate();
      let horas = agora.getHours();
      let minutos = agora.getMinutes();
      let segundos = agora.getSeconds();

      // Corrigindo caso o mês e o dia ainda não tenham ocorrido neste ano
      if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses = 12 + meses;
      }

      if (dias < 0) {
        meses--;
        const ultimoDiaDoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias = ultimoDiaDoMes + dias;
      }

      setIdade({ anos, meses, dias, horas, minutos, segundos });
    };

    calcularIdade();

    const intervalo = setInterval(calcularIdade, 1000); // Atualiza o contador a cada segundo

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="text-center">
      <p className="mt-3">
        <span className="text-white font-bold">
          {idade.anos} anos, {idade.meses} meses, {idade.dias} dias, {idade.horas} horas, {idade.minutos} minutos e {idade.segundos} segundos.
        </span>
      </p>
    </div>
  );
};

export default ContadorIdade;
