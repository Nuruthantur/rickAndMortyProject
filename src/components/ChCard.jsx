// import React from 'react'
import '../styles/ChCard.css'
import Button from 'react-bootstrap/Button';

function ChCard({ character, handleShow }) {

  return (
   
      <div className="card-container" style={{ display: "flex", flexDirection: "column" }}>
        <h1>{character.name}</h1>
        <img src={character.image} alt={`Picture of ${character.name}`} />
        <Button variant='primary' onClick={() => handleShow(character)}>Learn more!</Button>
      </div>
      
  )
}

export default ChCard