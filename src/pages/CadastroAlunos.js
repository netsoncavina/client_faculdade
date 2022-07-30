import "./cadastros.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import cursos from "./data/cursos";
import unidades from "./data/unidades";
export default function CadastroAlunos() {
  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [curso, setCurso] = useState("DSM");
  const [ra, setRa] = useState();
  const [semestreAtual, setSemestreAtual] = useState(1);

  const client = axios.create({ baseURL: "http://localhost:3000/alunos" });

  function handleNome() {
    let nomeValue = document.getElementById("name").value;
    let nomeAlert = (document.getElementById("nome").innerHTML = "");
    setNome(nomeValue);
  }

  function handleNascimento() {
    let nascimentoValue = document.getElementById("date").value;
    let nascimentoAlert = (document.getElementById("data").innerHTML = "");
    setDataNascimento(nascimentoValue);
  }

  function handleCurso() {
    let cursoValue = document.getElementById("curso").value;
    setCurso(cursoValue);
  }

  function handleRa() {
    let raValue = document.getElementById("ra").value;
    let raAlert = (document.getElementById("alertRA").innerHtml = "");
    setRa(raValue);
  }

  function handleSemestre() {
    let semestreValue = document.getElementById("semestre").value;
    setSemestreAtual(semestreValue);
  }

  function submitAluno() {
    try {
      client.post("", {
        nome: nome,
        dataNascimento: dataNascimento,
        curso: curso,
        ra: ra,
        semestreAtual: semestreAtual,
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
    document.getElementById("ra").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("unidade").value = "";
    document.getElementById("semestre").value = "";
  }

  function showAlert() {
    Swal.fire({
      title: "Confirmar cadastro?",
      showDenyButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        submitAluno();
        Swal.fire("Aluno cadastrado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cadastro cancelado", "", "info");
      }
    });
  }

  function validaDados() {
    const nome = document.getElementById("name").value;
    const dataNascimento = document.getElementById("date").value;
    const ra = document.getElementById("ra").value;
    if (nome === "" || dataNascimento === "" || ra === "") {
      if (nome === "") {
        document.getElementById("nome").innerHTML = "Insira o nome do aluno";
      }
      if (dataNascimento === "") {
        document.getElementById("data").innerHTML =
          "Insira a data de nascimento";
      }
      if (ra === "") {
        document.getElementById("alertRA").innerHTML = "Insira o RA do aluno";
      }

      Swal.fire("Preencha todos os campos", "", "warning");
    } else {
      showAlert();
    }
  }

  const listaCursos = cursos.map((curso) => {
    return <option value={curso.abreviacao}>{curso.nome}</option>;
  });

  const listaUnidades = unidades.map((unidade) => {
    return <option value={unidade}>{unidade}</option>;
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
          <h1 className="title">Aluno</h1>
          <img className="aluno-icon" src="./images/3.png" />
        </div>
        <h2>
          Preencha as informações abaixo e clique em cadastrar para inserir um
          novo registro
        </h2>
        <div className="formulario">
          <form action="/action_page.php">
            <label htmlFor="name">Nome do Aluno</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do aluno"
              onChange={handleNome}
              onBlur={handleNome}
            />
            <p className="alert" id="nome"></p>

            <label htmlFor="date">Data de Nascimento</label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="01/01/01"
              onChange={handleNascimento}
              onBlur={handleNascimento}
            />
            <p className="alert" id="data"></p>

            <label htmlFor="ra">RA do aluno</label>
            <input
              type="text"
              id="ra"
              name="ra"
              placeholder="RA do aluno"
              onChange={handleRa}
              onBlur={handleRa}
            />
            <p className="alert" id="alertRA"></p>

            <label htmlFor="unidade">Unidade</label>
            <select id="unidade" name="unidade">
              {listaUnidades}
            </select>

            <label htmlFor="curso">Curso</label>
            <select
              id="curso"
              name="curso"
              onChange={handleCurso}
              onBlur={handleCurso}
            >
              {listaCursos}
            </select>

            <label htmlFor="semestre">Semestre</label>
            <select
              id="semestre"
              name="semestre"
              onChange={handleSemestre}
              onBlur={handleSemestre}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </form>
          <button className="button-cadastro" onClick={validaDados}>
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
