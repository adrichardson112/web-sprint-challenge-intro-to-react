// Write your Character component here
import React from "react";
import styled from 'styled-components'
import {Card, Col, CardText, CardTitle, CardImg} from 'reactstrap'

const Character = (props) => {
    return (
        <Col sm="3">
            <Card outline color='info' style={{padding: '3%', margin: '4%', backgroundColor: '#687'}}>
                <CardImg src={props.image} />
                <CardTitle><b>Name:</b>{props.name}</CardTitle>
                <CardText><b>Status:</b> {props.status}</CardText>
                <CardText><b>Planet:</b> {props.origin}</CardText>
                <CardText><b>Species:</b> {props.species}</CardText>
                <CardText><b>Gender:</b> {props.gender}</CardText>
            </Card>
        </Col>
    )}

export default Character;