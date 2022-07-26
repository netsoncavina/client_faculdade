export default function InfoContainer(props) {
  let data = props.dataNascimento.substring(0, 10);
  data = data.split("-").reverse().join("/");
  if (props.type == "alunos") {
    return (
      <div className="container-info">
        <div className="infos">
          <h3 className="info">{props.nome}</h3>
          {/* <h3 className="info">{props.dataNascimento}</h3> */}
          <h3 className="info">{data}</h3>
          <h3 className="info">{props.ra}</h3>
          <h3 className="info">{props.curso}</h3>
          <h3 className="info">{props.semestre}</h3>
        </div>
        <div className="icons">
          <img className="edit-delete-icon" src="./images/edit.png"></img>
          <img className="edit-delete-icon" src="./images/delete.png"></img>
        </div>
      </div>
    );
  } else if (props.type == "professores") {
    return (
      <div className="container-info">
        <div className="infos">
          <h3 className="info">{props.nome}</h3>
          <h3 className="info">{data}</h3>
          <h3 className="info">{props.cpf}</h3>
          <h3 className="info">{props.email}</h3>
          <h3 className="info">{props.formacao}</h3>
        </div>
        <div className="icons">
          <img className="edit-delete-icon" src="./images/edit.png"></img>
          <img className="edit-delete-icon" src="./images/delete.png"></img>
        </div>
      </div>
    );
  }
}
