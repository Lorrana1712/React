import { useState } from "react";
import "./Dados.css"; 

function Dados() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("Lorrana");
  const [numero, setNumero] = useState(10);

  return (
    <div className="container">
      <div className="card">
        <h2>Exercício 1 – Contador</h2>
        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Somar +1
        </button>
      </div>

      <div className="card">
        <h2>Exercício 2 – Alterando Nome</h2>
        <p>{nome}</p>
        <button onClick={() => setNome("João")}>
          Alterar para João
        </button>
      </div>

      <div className="card">
        <h2>Desafio Extra</h2>
        <p>{numero}</p>
        <button onClick={() => setNumero(numero + 5)}>
          Aumentar +5
        </button>
        <button onClick={() => numero > 0 && setNumero(numero - 5)}>
          Diminuir -5
        </button>
      </div>
    </div>
  );
}

export default Dados;
