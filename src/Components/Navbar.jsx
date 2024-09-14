import React from "react";
import "../Styles/Navbar.css"
import { routes } from "../util/routes";
import { Link } from "react-router-dom";
import { useDentistContext } from "../Context/Context"

const Navbar = () => {
  const {state,dispatch} = useDentistContext();
  return (
    <nav className={"navbar " + (state.theme ? "dark" : "light")}>
      <Link to={routes.home} className={"logo-link " + (state.theme ? "dark" : "light")}>
        <h2>DH Odonto</h2>
      </Link>
      <div className={"nav-links " + (state.theme ? "dark" : "light")}>
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contacto</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Destacados</h4>
        </Link>
        <button className="theme-button" onClick={() => dispatch({type: "TOGGLE_THEME"})} >
          Cambiar Tema
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
