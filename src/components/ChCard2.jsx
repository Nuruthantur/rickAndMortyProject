// import React from 'react'
import { useState } from 'react';
import '../styles/ChCard.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChCard({ character }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card-container" style={{ display: "flex", flexDirection: "column" }}>
        <h1>{character.name}</h1>
        <img src={character.image} alt={`Picture of ${character.name}`} />
        {/* <button>learn more</button> */}
        <Button variant='primary' onClick={handleShow}>Learn more!</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ character.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ChCard







