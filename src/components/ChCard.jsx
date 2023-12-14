import React from 'react'
import Button from 'react-bootstrap/Button';
import cn from "classnames";
import '../styles/ChCard.css'
// import '../styles/flipcardStyles.scss'
import '../styles/ChCard.scss'


function ChCard({ character, handleShow }) {

  return (
    <div className="flip-card">
      <div className={"flip-card-inner"}>
        <div className="flip-card-front">
          <div className="card-body ">
            <h1>{character.name}</h1>
            <img src={character.image} alt={`Picture of ${character.name}`} />
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-body">
            <Button variant='primary' onClick={() => handleShow(character)}>Learn more!</Button>
          </div>
        </div>
      </div>
    </div>

      // <div className="card-container" style={{ display: "flex", flexDirection: "column" }}>
      //   <h1>{character.name}</h1>
      //   <img src={character.image} alt={`Picture of ${character.name}`} />
      //   <Button variant='primary' onClick={() => handleShow(character)}>Learn more!</Button>
      // </div>
      
  )
}

export default ChCard

