import React from "react";
import { useSelector } from "react-redux";

function Cabeçalho(props) {
  const contador = useSelector((state) => { //HOOK PARA ACESSAR O STATE DENTRO DO "STORE" QUE O "PROVIDER" PASSOU PARA ESSE COMPONENTE
    return state;
  });

  return (
    <div className="Cabeçalho">
      <h3>Contador:</h3>
      <h3>{contador}</h3>
    </div>
  );
}
export default Cabeçalho;
