/* eslint-disable react/prop-types */
// import React from 'react'

function ChCard({ character }) {

  return (
    <div >
      <h2>{character.name}</h2>
      <img src={character.image} alt={`Picture of ${character.name}`} />
    </div>
  )
}

export default ChCard