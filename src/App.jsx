import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";

import { useDentistContext } from "./Context/Context";
import { routes } from "./util/routes";
import Dentist from "./Routes/Dentist";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Layout from "./Layout/Layout";

function App() {
  return (
      <div>          

          <Routes>
            <Route path={routes.home} element={<Layout />} >
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.dentist} element={<Dentist />} />
              <Route path={routes.favs} element={<Favs />} />
            </Route>
          </Routes>
          
      </div>
  );
}

export default App;
