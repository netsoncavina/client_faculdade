import "./home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url("./images/background.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // filter: "brightness(0.5) sepia(0.9) hue-rotate(160deg) saturate(6)",
      }}
    >
      <div className="container">
        <img className="icon" src="./images/1.png" />
        <h1>Bem Vindo(a) à FATEC</h1>
        <p>Selecione a opção para inserir ou consultar registros</p>

        <div className="buttons">
          <Link to="/alunos" className="button">
            Alunos
          </Link>
          <Link to="/professores" className="button">
            Professores
          </Link>
          <Link to="/consulta" className="button">
            Consulta
          </Link>
        </div>
      </div>
    </div>
  );
}
