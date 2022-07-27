import "../cadastros.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import cursos from "../data/cursos";
import unidades from "../data/unidades";
export default function CadastroAlunos(props) {
  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [curso, setCurso] = useState("DSM");
  const [ra, setRa] = useState();
  const [semestreAtual, setSemestreAtual] = useState(1);

  const client = axios.create({ baseURL: "http://localhost:3000/alunos" });

  function handleNome() {
    let nomeValue = document.getElementById("name").value;
    setNome(nomeValue);
  }

  function handleNascimento() {
    let nascimentoValue = document.getElementById("date").value;
    setDataNascimento(nascimentoValue);
  }

  function handleCurso() {
    let cursoValue = document.getElementById("curso").value;
    setCurso(cursoValue);
  }

  function handleRa() {
    let raValue = document.getElementById("ra").value;
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

  const listaCursos = cursos.map((curso) => {
    return <option value={curso.abreviacao}>{curso.nome}</option>;
  });

  const listaUnidades = unidades.map((unidade) => {
    return <option value={unidade}>{unidade}</option>;
  });

  return (
    <div className="main-popUp">
      <div className="container-cadastro-popup">
        <div className="header-popUp">
          <h1 className="title-popUp">Aluno</h1>
          <img className="aluno-icon-popUp" src="./images/3.png" />
        </div>
        <h2>
          Preencha as informações abaixo e clique em atualizar para atualizar o
          registro
        </h2>
        <div className="formulario-popUp">
          <form action="/action_page.php">
            <label for="name">Nome do Aluno</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do aluno"
              onChange={handleNome}
              onBlur={handleNome}
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

            <label for="ra">RA do aluno</label>
            <input
              type="text"
              id="ra"
              name="ra"
              placeholder="RA do aluno"
              onChange={handleRa}
              onBlur={handleRa}
            />

            <label for="unidade">Unidade</label>
            <select id="unidade" name="unidade">
              {listaUnidades}
            </select>

            <label for="curso">Curso</label>
            <select
              id="curso"
              name="curso"
              onChange={handleCurso}
              onBlur={handleCurso}
            >
              {listaCursos}
            </select>

            <label for="semestre">Semestre</label>
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
          <div className="buttons-popUp">
            <button
              className="button-cadastro button-cadastro-popUp"
              onClick={submitAluno}
            >
              Atualizar
            </button>
            <button
              className="button-cadastro button-cadastro-cancelar"
              onClick={() => props.setTrigger(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
