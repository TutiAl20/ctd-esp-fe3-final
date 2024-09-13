import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";

import { useDentistContext } from "./Context/Context";
import { routes } from "./util/routes";
import Dentist from "./Routes/Dentist";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Layout from "./Layout/Layout";

function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.dentist} element={<Dentist />} />
            <Route path={routes.favs} element={<Favs />} />
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
