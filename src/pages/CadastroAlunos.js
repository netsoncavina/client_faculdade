import "./cadastros.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function CadastroAlunos() {
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
          <h1 className="title">Aluno</h1>
          <img className="aluno-icon" src="./images/3.png" />
        </div>
        <h2>
          Preencha as informações abaixo e clique em cadastrar para inserir um
          novo registro
        </h2>
        <div className="formulario">
          <form action="/action_page.php">
            <label for="name">Nome do Aluno</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do aluno"
            />

            <label for="date">Data de Nascimento</label>
            <input type="text" id="date" name="date" placeholder="01/01/01" />

            <label for="ra">RA do aluno</label>
            <input type="text" id="ra" name="ra" placeholder="RA do aluno" />

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

            <label for="semestre">Semestre</label>
            <select id="semestre" name="semestre">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </form>
          <button className="button-cadastro" onClick={logValue}>
            Cadastrar
          </button>
          <Link to="/professores" className="link">
            Novo(a) professor(a)? Registre aqui!
          </Link>
        </div>
      </div>
    </div>
  );
}
