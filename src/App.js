import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAlunos from "./pages/CadastroAlunos";
import CadastroProfessores from "./pages/CadastroProfessores";
import Consulta from "./pages/Consulta";

function App() {
  return (
    <div className="App">
      <Link to="/alunos">Alunos</Link> |{" "}
      <Link to="/professores">Professores</Link> |{" "}
      <Link to="/consulta">Consulta</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alunos" element={<CadastroAlunos />} />
        <Route path="professores" element={<CadastroProfessores />} />
        <Route path="consulta" element={<Consulta />} />
      </Routes>
    </div>
  );
}

export default App;
