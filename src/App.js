import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import { useState } from "react";
import { useEffect } from "react";

import About from "./pages/About";
import LogementVerif from "./composants/Verif/Verif";

function App() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        setAppartements(data);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/location/:id"
          element={<LogementVerif appartements={appartements} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}




export default App;
