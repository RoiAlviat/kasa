import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import Logement from "./pages/Logement";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import About from "./pages/About";

function App() {
  const [appartements, setAppartements] = useState([]);
  const navigate = useNavigate();

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

function LogementVerif({ appartements }) {
  const { id } = useParams();
  const logement = appartements.find((appartement) => appartement.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  return <Logement logement={logement} />;
}



export default App;
