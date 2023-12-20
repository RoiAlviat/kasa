
import '../Gallerie/Gallerie.css'
import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Gallerie() {

    const [appartements, setAppartements] = useState([]);

    useEffect(() => {
      fetch("logements.json")
        .then((res) => res.json())
        .then((data) => {
          setAppartements(data);
        })
        .catch((error) => {
          console.error("Erreur:", error);
        });
    }, []);
  
    
    return (
        <div className="gallerie-surcontainer">
            <div className="gallerie-container">
                {appartements.map((appartement) => (
                    
                    <Link to={`/location/${appartement.id}` } key={appartement.id}><div className="gallerie-article"><img src={appartement.cover} key={appartement.id}></img><span>{appartement.title}</span></div></Link>
                ))}     
            </div>
        </div>
    )
}

export default Gallerie