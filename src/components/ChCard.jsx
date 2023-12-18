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

// STYLING

// const Main = styled.div`  
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-flow: row wrap;

// `;

// Flip Card Container: 
// const FlipCardWrapper = styled.div `
//     background-color: transparent;
//     width: 300px;
//     height: 300px;
//     perspective: 1000px;
//     margin: 2em;
// `;


// FlipCardInner: Needed to position the front and back side and to create the 3D effect
// Creates a horizontal flip when you move over the flip box container => hover
// const FlipCardInner = styled.div `
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     transition: transform .8s;
//     transform-style: preserve-3d;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     border-radius: .2em;
//     _border: 1px solid #bbb;

//     &:hover {
//         transform: rotateY(180deg);  
//     }
// `;





// const Button = styled.button`
//     margin: .2em 0 .4em;
//     background-color: var(--text-color-dark);
//     color: var(--color-accent);
//     cursor: pointer;
//     padding: 1em 1.5em;
//     border: none;
//     font-size: 1rem;
//     font-weight: 600;
//     border-radius: .5em;
//     text-transform: uppercase;
//     transition: 0.4s;
//     box-shadow: var(--box-shadow);

//     &:hover {

//         transform: scale(1.05);
//         transition: 0.4s;

//     }
// `;





