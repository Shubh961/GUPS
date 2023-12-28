import {
  Route,
  BrowserRouter as Routerbrowser,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <>
      <Routerbrowser>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Routerbrowser>
    </>
  );
};

export default App;
