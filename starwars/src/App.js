import React, {useState, useEffect} from 'react';
import {Row} from 'reactstrap'
import './App.css';
import axios from 'axios'
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="display-3" className="text-center">Characters</h1>
      <Row>
        {characters.map(char => {
          return (
            <Character
              name= {char.name}
              status= {char.status}
              species= {char.species}
              gender= {char.gender}
              origin= {char.origin.name}
              image= {char.image}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
