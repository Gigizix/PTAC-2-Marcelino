import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <Link to="/todo" className="button-link">
          Entrar / Fazer Login
        </Link>
      </div>
      <div className="introducao">
        <h2>Seja Bem-vindo à nossa Floricultura </h2>
        <p>O que procura?</p>
        <img src="imagem1.png" alt="Imagem de Introdução" />
      </div>
    </div>
  );
}