import React from "react";
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";
import { useDentistContext } from "../Context/Context"
import "../Styles/Navbar.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>
        <button className="theme-button" onClick={() => dispatch({type: "TOGGLE_THEME"})} >Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;