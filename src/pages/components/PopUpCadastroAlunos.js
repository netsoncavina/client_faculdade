import "../cadastros.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import cursos from "../data/cursos";
import unidades from "../data/unidades";
export default function CadastroAlunos(props) {
  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [curso, setCurso] = useState("DSM");
  const [ra, setRa] = useState();
  const [semestreAtual, setSemestreAtual] = useState(3);

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
    let semestreValue = document.getElementById("semestreAtual").value;
    setSemestreAtual(semestreValue);
  }

  function updateAluno() {
    try {
      client.patch(`/${props.ra}`, {
        nome: nome,
        dataNascimento: dataNascimento,
        curso: curso,
        ra: ra,
        semestreAtual: semestreAtual,
      });
    } catch (e) {
      console.log(e);
    } finally {
      props.setTrigger(false);
    }
  }

  function showAlert() {
    Swal.fire({
      title: "Confirmar edição?",
      showDenyButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        updateAluno();
        Swal.fire("Aluno atualizado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Atualização cancelada", "", "info");
      }
    });
  }

  const listaCursos = cursos.map((curso, index) => {
    return (
      <option key={index} value={curso.abreviacao}>
        {curso.nome}
      </option>
    );
  });

  const listaUnidades = unidades.map((unidade, index) => {
    return (
      <option key={index} value={unidade}>
        {unidade}
      </option>
    );
  });

  const listaSemestres = [1, 2, 3, 4, 5, 6].map((semestre, index) => {
    return (
      <option key={index} value={semestre}>
        {semestre}
      </option>
    );
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
            <label htmlFor="name">Nome do Aluno</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do aluno"
              defaultValue={props.nome}
              onChange={handleNome}
              onBlur={handleNome}
            />

            <label htmlFor="date">Data de Nascimento</label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="01/01/01"
              defaultValue={props.dataNascimento}
              onChange={handleNascimento}
              onBlur={handleNascimento}
            />

            <label htmlFor="ra">RA do aluno</label>
            <input
              type="text"
              id="ra"
              name="ra"
              placeholder="RA do aluno"
              value={props.ra}
              onChange={handleRa}
              onBlur={handleRa}
            />

            <label htmlFor="unidade">Unidade</label>
            <select id="unidade" name="unidade">
              {/* <option value="" selected disabled hidden>
                Selecione a unidade
              </option> */}

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
              id="semestreAtual"
              name="semestre"
              onChange={handleSemestre}
              onBlur={handleSemestre}
            >
              {listaSemestres}
            </select>
          </form>
          <div className="buttons-popUp">
            <button
              className="button-cadastro button-cadastro-popUp"
              onClick={showAlert}
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
