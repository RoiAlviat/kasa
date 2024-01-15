import aboutImg from '../assets/img/aboutimg.png'
import Collapse from '../Collapse/Collapse'
import '../About/coreAbout.css'

function CoreAbout() {

  
    return (
        <div className='CoreAbout'>
            <img src={aboutImg} alt='image-about'/>
            <Collapse descriptionContent={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>} classNameAdapt={"Aboutsize"} h1Content={"Fiabilité"}/>
            <Collapse descriptionContent={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} classNameAdapt={"Aboutsize"} h1Content={"Respect"}/>
            <Collapse descriptionContent={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} classNameAdapt={"Aboutsize"} h1Content={"Service"}/>
            <Collapse descriptionContent={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>}classNameAdapt={"Aboutsize"} h1Content={"Sécurité"}/>
            
        </div>
    )
}

export default CoreAbout