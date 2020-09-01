// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StyledCharacter = styled.div`

border: solid #1affff 4px;
width: 35%;
margin: 5%;

img{
    border: solid #ff8533 3x;
    padding: 2%;
    margin: 2%;
    width: 45%;
}

h1{
    font-size: 1.5rem;
    text-decoration: underline;
}
`

const Character = (props) => {
    return (
         <StyledCharacter>
        <img src= {props.image}/>
        <h1>Name: {props.name}</h1>
         <p>Status: {props.status}</p>
         <p>Planet: {props.planet}</p>
         <p>Species: {props.species}</p>
         <p>Gender: {props.gender}</p>
         </StyledCharacter>
    );
 };

export default Character;