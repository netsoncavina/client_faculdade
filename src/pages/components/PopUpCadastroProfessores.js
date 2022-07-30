import "../cadastros.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import cursos from "../data/cursos";

export default function PopUpCadastroProfessores(props) {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [formacao, setFormacao] = useState();

  const client = axios.create({ baseURL: "http://localhost:3000/professores" });

  function handleNome() {
    let nomeValue = document.getElementById("name").value;
    setNome(nomeValue);
  }

  function handleCpf() {
    let cpfValue = document.getElementById("cpf").value;
    setCpf(cpfValue);
  }

  function handleEmail() {
    let emailValue = document.getElementById("email").value;
    setEmail(emailValue);
  }

  function handleFormacao() {
    let formacaoValue = document.getElementById("formacao").value;
    setFormacao(formacaoValue);
  }

  function handleNascimento() {
    let nascimentoValue = document.getElementById("date").value;
    setDataNascimento(nascimentoValue);
  }

  function updateProfessor() {
    try {
      client.patch(`/${props.cpf}`, {
        nome: nome,
        formacao: formacao,
        dataNascimento: dataNascimento,
        email: email,
        cpf: cpf,
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
        updateProfessor();
        Swal.fire("Aluno atualizado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Atualização cancelada", "", "info");
      }
    });
  }

  function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("email").value = "";
    document.getElementById("formacao").value = "";
  }

  const listaCursos = cursos.map((curso) => {
    return <option value={curso.abreviacao}>{curso.nome}</option>;
  });

  return (
    <div className="main-popUp">
      <div className="container-cadastro-popUp">
        <div className="header-popUp">
          <h1 className="title-popUp">Professor</h1>
          <img className="aluno-icon-popUp" src="./images/4.png" />
        </div>
        <h2>
          Preencha as informações abaixo e clique em atualizar para atualizar o
          registro
        </h2>
        <div className="formulario-popUp">
          <form action="/action_page.php">
            <label htmlFor="name">Nome do Professor</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do professor"
              defaultValue={props.nome}
              onChange={handleNome}
              onBlur={handleNome}
            />

            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              value={props.cpf}
              onChange={handleCpf}
              onBlur={handleCpf}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={props.email}
              onChange={handleEmail}
              onBlur={handleEmail}
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

            <label htmlFor="formacao">Formação</label>
            <select
              id="formacao"
              name="formacao"
              defaultValue={props.formacao}
              onChange={handleFormacao}
              onBlur={handleFormacao}
            >
              <option value={"Tecnólogo(a)"}>Tecnólogo(a)</option>
              <option value={"Mestre(a)"}>Mestre(a)</option>
              <option value={"Doutor(a)"}>Doutor(a)</option>
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
