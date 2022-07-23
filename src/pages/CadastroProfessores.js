import "./cadastros.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import cursos from "./data/cursos";
import unidades from "./data/unidades";
export default function CadastroProfessores() {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [formacao, setFormacao] = useState();

  const client = axios.create({ baseURL: "http://localhost:3000/professores" });

  function handleNome() {
    let nomeValue = document.getElementById("name").value;
    setNome(nomeValue);
  }

  function handleCpf() {
    let cpfValue = document.getElementById("cpf").value;
    setCpf(cpfValue);
  }

  function handleEmail() {
    let emailValue = document.getElementById("email").value;
    setEmail(emailValue);
  }

  function handleFormacao() {
    let formacaoValue = document.getElementById("formacao").value;
    setFormacao(formacaoValue);
  }

  function handleNascimento() {
    let nascimentoValue = document.getElementById("date").value;
    setDataNascimento(nascimentoValue);
  }

  function submitProfessor() {
    try {
      client.post("", {
        nome: nome,
        formacao: formacao,
        dataNascimento: dataNascimento,
        email: email,
        cpf: cpf,
      });
    } catch (e) {
      console.log(e);
    } finally {
      clearFields();
    }
  }

  function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("email").value = "";
    document.getElementById("formacao").value = "";
  }

  const listaCursos = cursos.map((curso) => {
    return <option value={curso.abreviacao}>{curso.nome}</option>;
  });

  return (
    <div
      className="main"
      style={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url("./images/background.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-cadastro">
        <div className="header">
          <h1 className="title">Professor</h1>
          <img className="aluno-icon" src="./images/4.png" />
        </div>
        <h2>
          Preencha as informações abaixo e clique em cadastrar para inserir um
          novo registro
        </h2>
        <div className="formulario">
          <form action="/action_page.php">
            <label for="name">Nome do Professor</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do professor"
              onChange={handleNome}
              onBlur={handleNome}
            />

            <label for="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              onChange={handleCpf}
              onBlur={handleCpf}
            />

            <label for="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleEmail}
              onBlur={handleEmail}
            />

            <label for="date">Data de Nascimento</label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="01/01/01"
              onChange={handleNascimento}
              onBlur={handleNascimento}
            />

            <label for="formacao">Formação</label>
            <select
              id="formacao"
              name="formacao"
              onChange={handleFormacao}
              onBlur={handleFormacao}
            >
              <option value={"tecnologo"}>Tecnólogo(a)</option>
              <option value={"mestre"}>Mestre(a)</option>
              <option value={"doutor"}>Doutor(a)</option>
            </select>

            <label for="curso">Curso</label>
            <select id="curso" name="curso">
              {listaCursos}
            </select>
          </form>
          <button className="button-cadastro" onClick={submitProfessor}>
            Cadastrar
          </button>
          <Link to="/alunos" className="link">
            Novo(a) Aluno(a)? Registre aqui!
          </Link>
        </div>
      </div>
    </div>
  );
}
