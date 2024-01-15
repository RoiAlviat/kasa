import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logement from "../../pages/Logement";



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

  export default LogementVerif