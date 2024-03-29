import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAlunos from "./pages/CadastroAlunos";
import CadastroProfessores from "./pages/CadastroProfessores";
import Consulta from "./pages/Consulta";
import MenuHamburguer from "./pages/components/MenuHamburguer";
function App() {
  return (
    <div className="App">
      <MenuHamburguer />
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
