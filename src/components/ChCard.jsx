/* eslint-disable react/prop-types */
// import React from 'react'
import '../styles/ChCard.css';

function ChCard({ character }) {

  return (
    <div className="card-container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={`Picture of ${character.name}`} />
      <button>learn more</button>
    </div>
  )
}

export default ChCard