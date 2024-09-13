import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { useDentistContext } from "../Context/Context";

const LayOut = () => {
  const { state } = useDentistContext();
  return (
    <div>
      <Navbar />
      <div className={"main-container " + (state.theme ? "dark" : "light")}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;
