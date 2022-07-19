import "./cadastros.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function CadastroProfessores() {
  function logValue() {
    let nameValue = document.getElementById("name").value;
    console.log(nameValue);
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
              placeholder="Nome do aluno"
            />

            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" placeholder="CPF" />

            <label for="unidade">Unidade</label>
            <select id="unidade" name="unidade">
              <option value="FatecZL">Fatec Zona Leste</option>
              <option value="FatecTatuape">Fatec Tatuapé</option>
              <option value="FatecItaquera">Fatec Itaquera</option>
            </select>

            <label for="curso">Curso</label>
            <select id="curso" name="curso">
              <option value="DSM">
                Desenvolvimento de Software Multiplataforma
              </option>
              <option value="COMEX">Comércio Exterior</option>
            </select>
          </form>
          <button className="button-cadastro" onClick={logValue}>
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
