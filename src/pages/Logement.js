import Header from "../composants/Header/Header";
import Footer from "../composants/Footer/Footer"
import Hebergement from "../composants/Logement/Hebergement";
import { useParams } from "react-router-dom";

function Logement() {

    return(
        <div className="App">
            <Header />
            <Hebergement/>
            <Footer />
        </div>
    )
}

export default Logement