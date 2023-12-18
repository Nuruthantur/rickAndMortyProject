import React, { useEffect, useState } from 'react';
import ChCard from './components/ChCard';
import Flipcard from './components/flipcard';
import axios from 'axios';


function App() {

  const [characters, setCharacters] = useState([]);
  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState("");
  const [url, setURL] = useState("https://rickandmortyapi.com/api/character?page=2")

  const [exampleState, setExampleState] = useState(1);

  async function fetchCharactersAsync () {
    setError("");
    try {
      const response = await fetch(url);
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

//   async function getCharacterData() {
//   const responses = await Promise.all([
//     fetch(url)
//   ])
//   const results = await Promise.all(responses.map((res) => res.json()))
//   console.log(results)
// }
  
  useEffect(() => {
    fetchCharactersAsync().catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    console.log("use effect running");
  }, [exampleState])

  return (

// Option 1 - Testing
    // <React.Fragment>
    //   {error && <h2>{error}</h2>}
    //   {exampleState}
    //   <button onClick={() => setExampleState(exampleState + 1)}>click me!</button>
    // <div className="container">
    //   <div className="row h-100">
    //     <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
    //       {cards.map((char) => (
    //         <FlipCard key={char.id} card={char} />
    //       ))}
    //     </div>
    //   </div>
    //   </div>
    //   </React.Fragment>

    // Option 2 - Testing
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

// export default function App() {
//   return (
//     <div className="container">
//       <div className="row h-100">
//         <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
//           {cards.map((card) => (
//             <FlipCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }