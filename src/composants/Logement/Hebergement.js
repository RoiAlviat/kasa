import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import '../Logement/Hebergements.css'

function Hebergement() {
  const { id } = useParams();
  const [appartements, setAppartements] = useState([]);
  const [idPictures, setIdPictures] = useState([]);
  const [namesPictures, setNamePictures] = useState()
  const [locationPictures, setLocationPictures] = useState()
  const [tagsPictures, setTagsPictures] = useState([])
  const [hostPictures, setHostPictures] = useState({})
  const [equipmentsPictures, setEquipmentsPicutres] = useState([])
  const [descriptionPictures, setDescritptionPictures] = useState()
  const [isEquipementOpen, setEquipementOpen] = useState(true)
  const [isDescriptionOpen, setDescriptionOpen] = useState(true)
  const [imgIndex, setImgIndex] = useState(0)

  const images = []

  const test = document.querySelector("footer")

  const toggleEquipement = () => {
    setEquipementOpen((equipOpen) => !equipOpen);
  };
  
  const toggleDescription = () => {
    setDescriptionOpen((descOpen) => !descOpen);
  };
  
  useEffect(() => {
    fetch("../logements.json")
    .then((res) => res.json())
    .then((data) => {
      setAppartements(data);
      const dataFind = data.find((appartement) => appartement.id === id);
      if (dataFind) {
        setIdPictures(dataFind.pictures);
        setNamePictures(dataFind.title);
        setLocationPictures(dataFind.location)
        setTagsPictures(dataFind.tags)
        setHostPictures(dataFind.host)
        setEquipmentsPicutres(dataFind.equipments)
        setDescritptionPictures(dataFind.description)
      }
      
    });
  }, [id]);
  
  const nextSlide = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % idPictures.length )
  }

  const prevSlide = () => {
    setImgIndex((prevIndex) => (prevIndex - 1 + idPictures.length) % idPictures.length)
  }
  

  

  return (
    <div className='hebergement-main'>
      <div className="logement-img-container">
          <img
            className={"imghebergement"}
            src={idPictures[imgIndex]}
            alt={`Appartement ${imgIndex + 1}`}
          />
          <span>{imgIndex + 1}/{idPictures.length}</span>

        <i onClick={nextSlide} className="fa-solid fa-chevron-right"></i>
        <i onClick={prevSlide} className="fa-solid fa-chevron-left"></i>
      </div>
      <div className='upper-host-container'>
    <div className='h1-tag-container'>

      <div className='h1-location-container'>
        <h1>{namesPictures}</h1>
        <h2>{locationPictures}</h2>
      </div>
      <div className='tag-container'>
      {tagsPictures.map((tag, index) => (
              <span key={index} className='tags'>{tag}</span>
            ))}
      </div>
    </div>
      <div className='account-container'>
        <div className='host-container'>
          <h3>{hostPictures.name}</h3>
        <img src={hostPictures.picture} alt='Image du propriétaire'/> 
        </div>
        <div className='star-container'>
          <i className="fa-solid star fa-star"></i>
          <i className="fa-solid star fa-star"></i>
          <i className="fa-solid star fa-star"></i>
          <i className="fa-solid star fa-star"></i>
          <i className="fa-solid star fa-star"></i>
        </div>
        </div>
      </div>
        <div className='Collapse-Composant-Container'>
          <Collapse h1Content={"Description"} descriptionContent={<p>{descriptionPictures}</p>}/>
          <Collapse h1Content={"Equipements"} descriptionContent={<ul>{equipmentsPictures.map((equips, index) => (<li key={index}>{equips}</li>))}</ul>}/> 
        </div>
      
      </div>

        
  );
}

export default Hebergement;
