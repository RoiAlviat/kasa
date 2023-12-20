import '../Error/BodyError.css'
import { Link } from "react-router-dom"

function BodyError() {
    return(
        <div className="BodyError-container">
          
                <span>404</span>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/"><h3>Retourner sur la page d'accueil</h3></Link>

        </div>
    )
}

export default BodyError