import { useState } from "react";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";
import PopUp from "./PopUp";
import PopUpCadastroAlunos from "./PopUpCadastroAlunos";
import PopUpCadastroProfessores from "./PopUpCadastroProfessores";
export default function InfoContainer(props) {
  const [showPopUp, setShowPopUp] = useState(false);

  function handleDelete(fonte, registro) {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/${fonte}/${registro}`, requestOptions).then(
      (response) => {
        return response.json();
      }
    );
  }

  function handleClick() {
    if (props.type === "professores") {
      handleDelete(props.type, props.cpf);
    } else if (props.type === "alunos") {
      handleDelete(props.type, props.ra);
    }
  }

  function showAlertExclusao() {
    Swal.fire({
      title: "Excluir cadastro?",
      showDenyButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        handleClick();
        Swal.fire(`Cadastro excluido`, "", "success");
      } else if (result.isDenied) {
        Swal.fire("Exclusão cancelada", "", "info");
      }
    });
  }

  let data = props.dataNascimento.substring(0, 10);

  data = data.split("-").reverse().join("/");
  if (props.type == "alunos") {
    return (
      <div className="container-info">
        <div className="infos">
          <h3 data-tip={props.nome} className="info">
            {props.nome}
          </h3>
          <h3 className="info">{data}</h3>
          <h3 className="info">{props.ra}</h3>
          <h3 className="info">{props.curso}</h3>
          <h3 className="info">{props.semestre}</h3>
        </div>
        <div className="icons">
          <img
            className="edit-delete-icon"
            src="./images/edit.png"
            onClick={() => setShowPopUp(true)}
          ></img>
          <img
            className="edit-delete-icon"
            src="./images/delete.png"
            onClick={showAlertExclusao}
          ></img>
          <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
            {props.type === "alunos" ? (
              <PopUpCadastroAlunos
                setTrigger={setShowPopUp}
                nome={props.nome}
                dataNascimento={data}
                ra={props.ra}
                semestre={props.semestre}
              />
            ) : null}
          </PopUp>
          <ReactTooltip place="top" type="dark" effect="float" />
        </div>
      </div>
    );
  } else if (props.type == "professores") {
    return (
      <div className="container-info">
        <div className="infos">
          <h3 data-tip={props.nome} className="info">
            {props.nome}
          </h3>
          <h3 className="info">{data}</h3>
          <h3 className="info">{props.cpf}</h3>
          <h3 data-tip={props.email} className="info">
            {props.email}
          </h3>
          <h3 className="info">{props.formacao}</h3>
        </div>
        <div className="icons">
          <img
            className="edit-delete-icon"
            src="./images/edit.png"
            onClick={() => setShowPopUp(true)}
          ></img>
          <img
            className="edit-delete-icon"
            src="./images/delete.png"
            onClick={showAlertExclusao}
          ></img>
          <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
            {props.type === "professores" ? (
              <PopUpCadastroProfessores
                setTrigger={setShowPopUp}
                nome={props.nome}
                dataNascimento={data}
                cpf={props.cpf}
                email={props.email}
                formacao={props.formacao}
              />
            ) : null}
          </PopUp>
          <ReactTooltip place="top" type="dark" effect="float" />
          <ReactTooltip place="top" type="dark" effect="float" />
        </div>
      </div>
    );
  }
}
