import React from "react";
import Footer from "../composants/Footer/Footer"
import BodyImage from "../composants/Accueil/BodyImage";
import Gallerie from "../composants/Gallerie/Gallerie";
import Header from "../composants/Header/Header";

import {Routes, Route} from "react-router-dom";

function Accueil() {
    return (     
        <div className="App">
            <Header />
            <BodyImage />
            <Gallerie />
            <Footer />
        </div>
    );}

    export default Accueil