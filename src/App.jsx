import React, { useEffect, useState } from 'react';
import './App.css';
import ChCard from './components/ChCard';


function App() {
  const [characters, setCharacters] = useState([]);
  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState("");
  // console.log(characters)
  const [url, setURL] = useState("https://rickandmortyapi.com/api/character?page=2")

  const [exampleState, setExampleState] = useState(1);
  async function fetchCharactersAsync () {
    setError("");
    try {
      const response = await fetch(url);
      // console.log(response);
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setCharacters(result.results);
        setFetchResult(result);
      } else {
        setError(result.error)
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }
  
  useEffect(() => {
    // console.log("use effect has run")
    // function fetchCharacters () {
    //   fetch("https://rickandmortyapi.com/api/character")
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log(result);
    //       setCharacters(result.results);
    //     })
    //     .catch((error) => console.log(error))
    // }

    fetchCharactersAsync().catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    console.log("use effect running");
  }, [exampleState])
  

  return (
    <React.Fragment>
      { error && <h2>{error}</h2> }
      { exampleState }
      <button onClick={() => setExampleState(exampleState + 1)}>click me!</button>
      {/* { characters.map((char) => <ChCard key={char.id} character={char} />) } */}
      { (fetchResult && fetchResult.results) && fetchResult.results.map((char) => {
        return (
          <React.Fragment key={char.id}>
            <ChCard character={char} />
            {/* <Model character={char} /> */}
          </React.Fragment>
        )
      }) }
    </React.Fragment>
  )
}


export default App
