import "./consulta.css";
import { useState, useEffect } from "react";
import InfoContainer from "./components/InfoContainer";
export default function Consulta() {
  const [alunoColumns, setAlunoColumns] = useState(
    <div className="columns">
      <h2 className="column">Nome do Aluno</h2>
      <h2 className="column">Data de Nascimento</h2>
      <h2 className="column">RA</h2>
      <h2 className="column">Curso</h2>
      <h2 className="column">Semestre</h2>
    </div>
  );

  const [professorColumns, setProfessorColumns] = useState(
    <div className="columns">
      <h2 className="column">Nome do Professor</h2>
      <h2 className="column">Data de Nascimento</h2>
      <h2 className="column">CPF</h2>
      <h2 className="column">E-mail</h2>
      <h2 className="column">Formação</h2>
    </div>
  );
  const [fonte, setFonte] = useState("alunos");
  const getDados = async () => {
    const response = await fetch(`http://localhost:3000/${fonte}`);
    const data = await response.json();
    setDados(data);
    return data;
  };
  const [dados, setDados] = useState([]);

  const [columns, setColumns] = useState(alunoColumns);

  useEffect(() => {
    getDados();
  });

  function handleClickColumns() {
    let alunoSelector = document.getElementById("aluno-selector");
    let professorSelector = document.getElementById("professor-selector");

    if (columns == alunoColumns) {
      setColumns(professorColumns);
      setFonte("professores");
      getDados();
      professorSelector.classList.add("selected");
      alunoSelector.classList.remove("selected");
    } else {
      setColumns(alunoColumns);
      setFonte("alunos");
      getDados();
      professorSelector.classList.remove("selected");
      alunoSelector.classList.add("selected");
    }
  }

  const rows = dados.map((cadastro, index) => {
    return (
      <InfoContainer
        key={index}
        type={fonte}
        nome={cadastro.nome}
        dataNascimento={cadastro.dataNascimento}
        ra={cadastro.ra}
        curso={cadastro.curso}
        semestre={cadastro.semestreAtual}
        cpf={cadastro.cpf}
        email={cadastro.email}
        formacao={cadastro.formacao}
      />
    );
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
      <div className="container-consulta">
        <div className="header-consulta">
          <h1 className="title">Lista de cadastro</h1>
        </div>
        <div className="selection">
          <h2
            className="selector selected"
            id="aluno-selector"
            onClick={handleClickColumns}
          >
            Aluno
          </h2>
          <h2
            className="selector"
            id="professor-selector"
            onClick={handleClickColumns}
          >
            Professor
          </h2>
        </div>
        <div className="search-filter">
          <div className="searchbar">
            <input type="search" placeholder="Pesquisar" />
            <div className="search-button">
              <button type="submit">Search</button>
            </div>
          </div>
          <div className="filter">
            <select id="semestre" name="semestre">
              <option value="0">Filtrar por</option>
              <option value="curso">curso</option>
              <option value="semestre">semestre</option>
            </select>
          </div>
        </div>
        {columns}
        {rows}
      </div>
    </div>
  );
}
