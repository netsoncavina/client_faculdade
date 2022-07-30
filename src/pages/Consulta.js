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
  const [columns, setColumns] = useState(alunoColumns);

  const [fonte, setFonte] = useState("alunos");
  const getDados = async (nome) => {
    if (nome !== "" && nome !== undefined && nome !== null && nome !== " ") {
      setPesquisa(nome);
      if (fonte === "alunos") {
        getAluno(nome);
      } else {
        getProfessor(nome);
      }
    } else {
      const response = await fetch(`http://localhost:3000/${fonte}`);
      const data = await response.json();
      setDados(data);
      return data;
    }
  };

  async function getAluno(nome) {
    const response = await fetch(`http://localhost:3000/alunos/aluno/${nome}`);
    const data = await response.json();
    setDados(data);
    return data;
  }

  async function getProfessor(nome) {
    const response = await fetch(
      `http://localhost:3000/professores/professor/${nome}`
    );
    const data = await response.json();
    setDados(data);
    return data;
  }

  const [dados, setDados] = useState([]);

  const [pesquisa, setPesquisa] = useState(null);

  useEffect(() => {
    getDados(pesquisa);
  });

  function handleClickColumns() {
    let alunoSelector = document.getElementById("aluno-selector");
    let professorSelector = document.getElementById("professor-selector");
    let searchBar = document.getElementById("search-input");

    if (columns == alunoColumns) {
      setColumns(professorColumns);
      setFonte("professores");
      setPesquisa(null);
      getDados();
      professorSelector.classList.add("selected");
      alunoSelector.classList.remove("selected");
      searchBar.value = "";
      searchBar.placeholder = "Pesquisar professor";
    } else {
      setColumns(alunoColumns);
      setFonte("alunos");
      setPesquisa(null);

      getDados();
      professorSelector.classList.remove("selected");
      alunoSelector.classList.add("selected");
      searchBar.value = "";

      searchBar.placeholder = "Pesquisar aluno";
    }
  }

  function handleSearch() {
    let searchValue = document.getElementById("search-input").value;
    if (searchValue == "" || searchValue == null || searchValue == undefined) {
      setPesquisa(null);
      getDados();
    } else {
      getDados(searchValue);
    }
    console.log(searchValue);
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
            className="selector selected "
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
            <input type="search" placeholder="Pesquisar" id="search-input" />
            <div className="search-button">
              <button type="submit" onClick={handleSearch}>
                Search
              </button>
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
