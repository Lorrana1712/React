import { useState } from "react";
import Button from "./Button";
import "./Form.css";





  // Função para limpar formulário
  const resetForm = () => {
    setNome("")
    setSobrenome("")
    setEmail("")
    setIdade("")
    setTelefone("")
    setPais("")
    setBio("")
    setFuncao("Usuário")
    setSenha("")
    setTermos(false)
  }

const Form = () => {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");
  const [bio, setBio] = useState("");
  const [funcao, setFuncao] = useState("");
  const [senha, setSenha] = useState("");
  const [termos, setTermos] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const limparFormulario = () => {
    setNome("");
    setSobrenome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setPais("");
    setBio("");
    setFuncao("");
    setSenha("");
    setTermos(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErro("");
    setSucesso("");

    if (!nome) {
      setErro("Nome é obrigatório");
      return;
    }

    if (!email) {
      setErro("Email é obrigatório");
      return;
    }

    if (senha.length < 6) {
      setErro("Senha deve ter no mínimo 6 caracteres");
      return;
    }

    if (!termos) {
      setErro("Você deve aceitar os termos");
      return;
    }

    setSucesso("Cadastro realizado com sucesso ✅");
    limparFormulario();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>

        <h1>Cadastro de Usuário</h1>

        {erro && <p className="erro">{erro}</p>}
        {sucesso && <p className="sucesso">{sucesso}</p>}

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <input
          type="text"
          placeholder="País"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <select
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
        >
          <option value="">Selecione a função</option>
          <option>Administrador</option>
          <option>Usuário</option>
          <option>Visitante</option>
        </select>

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
          />
          Aceitar termos
        </label>

   
        <Button
          text="Enviar Cadastro"
          type="submit"
          disabled={!termos}
        />

        <Button
          text="Limpar"
          type="button"
          onClick={resetForm}
        />

      </form>
    </div>
  );
};

export default Form;