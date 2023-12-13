import React, { useEffect, useState } from 'react';
import ChCard2 from './components/ChCard2';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Characters2() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  async function fetchCharactersAsync () {
    setError("");
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setCharacters(result.results);
        setInfo(result.info);
      } else {
        setError(result.error)
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }
  
  useEffect(() => {
    fetchCharactersAsync().catch((error) => console.log(error));
  }, [])

  return (
    <React.Fragment>
      { error && <h2>{error}</h2> }
      <div className='cards-box'>
        { characters.map((char) => {
          return (
            <React.Fragment key={char.id}>
              <ChCard2 character={char} />
            </React.Fragment>
          )
        }) }
      </div>
    </React.Fragment>
  )
}


export default Characters2
