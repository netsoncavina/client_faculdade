import "./menuHamburguer.css";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
    color: "white",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "rgba(27, 48, 97,0.8)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
export default function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu
      styles={styles}
      right
      width={"190px"}
      isOpen={isOpen}
      onStateChange={(isMenuOpen) => setIsOpen(isMenuOpen.isOpen)}
    >
      <Link to="/" className="links" onClick={handleClick}>
        Home
      </Link>
      <Link to="/alunos" className="links" onClick={handleClick}>
        Alunos
      </Link>
      <Link to="/professores" className="links" onClick={handleClick}>
        Professores
      </Link>
      <Link to="/consulta" className="links" onClick={handleClick}>
        Consultas
      </Link>
    </Menu>
  );
}
