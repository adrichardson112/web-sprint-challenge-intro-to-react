// Write your Character component here
import React from "react";
// import styled from 'styled-components'

const Character = (props) => {
    return (
      <div>
        <img src= {props.image}/>
        <h1>Name: {props.name}</h1>
         <p>Status: {props.status}</p>
         <p>Planet: {props.planet}</p>
         <p>Species: {props.species}</p>
         <p>Gender: {props.gender}</p>
       </div>
    );
 };

export default Character;