// import React from 'react'
// import '../styles/ChCard.css'
import '../styles/flipcardStyles.scss'
import Button from 'react-bootstrap/Button';

function ChCard({ character, handleShow }) {

  return (
    <div className="flip-card-outer">
      <div className="flip-card-inner">
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <h1>{character.name}</h1>
            <img src={character.image} alt={`Picture of ${character.name}`} />
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
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

