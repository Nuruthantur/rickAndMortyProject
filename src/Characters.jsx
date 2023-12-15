import React, { useEffect, useState } from 'react';
import ChCard from './components/ChCard';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MainLayout from './components/layouts/MainLayouts';


function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  function filterCharactersSearchbar(searchTerm) {
    const filteredArray = [...characters].filter((character) => { return character.name.toLowerCase().includes(searchTerm.toLowerCase()) }
    ); console.log("result search bar ", filteredArray);
    setFilteredCharacters(filteredArray)
  }
  // filterCharactersSearchbar("Rick"); test function for "Rick"

  const handleClose = () => setShow(false);
  const handleShow = (character) => {
    setShow(true);
    setSelectedCharacter(character);
    // console.log(character)
  };
  // console.log(characters, info)

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
//   async function fetchCharactersAsync() {
//   const responses = await Promise.all([fetch("https://rickandmortyapi.com/api/character")
//   ])
//   const results = await Promise.all(responses.map((res) => res.json()))
//   console.log(results)
// }
  
  useEffect(() => {
    fetchCharactersAsync().catch((error) => console.log(error));
  }, [])

  return (

    <MainLayout filterCharactersSearchbar={filterCharactersSearchbar}>

      { error && <h2>{error}</h2> }
      <div className='cards-box'>
        { filteredCharacters.length===0 && characters.map((char) => {
          return (
            <React.Fragment key={char.id}>
              <ChCard character={char} handleShow={handleShow} />
            </React.Fragment>
          )
        })}
        { filteredCharacters.length > 0 && filteredCharacters.map((char) => {
          return (
            <React.Fragment key={char.id}>
              <ChCard character={char} handleShow={handleShow} />
            </React.Fragment>
          )
        })}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name: {selectedCharacter && selectedCharacter.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <p>Species: {selectedCharacter && selectedCharacter.species}</p>
          <p>Status: {selectedCharacter && selectedCharacter.status}</p>
          <p>Gender: {selectedCharacter && selectedCharacter.gender}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </MainLayout>
  )
}


export default Characters
