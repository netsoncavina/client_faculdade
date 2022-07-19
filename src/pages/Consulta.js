import "./consulta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Consulta() {
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
          <h2 className="selector">Aluno</h2>
          <h2 className="selector">Professor</h2>
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
      </div>
    </div>
  );
}
