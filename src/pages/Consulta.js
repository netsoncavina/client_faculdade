import "./consulta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
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

  function handleClickColumns() {
    if (columns == alunoColumns) {
      setColumns(professorColumns);
    } else {
      setColumns(alunoColumns);
    }
  }

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
          <h2 className="selector" onClick={handleClickColumns}>
            Aluno
          </h2>
          <h2 className="selector" onClick={handleClickColumns}>
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
        <div className="container-info">
          <div className="infos">
            <h3 className="info">Netson Cavina</h3>
            <h3 className="info">04/01/1998</h3>
            <h3 className="info">111122223333</h3>
            <h3 className="info">Fatec Zona Leste</h3>
            <h3 className="info">DSM</h3>
          </div>
          <div className="icons">
            <img className="edit-delete-icon" src="./images/edit.png"></img>
            <img className="edit-delete-icon" src="./images/delete.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
