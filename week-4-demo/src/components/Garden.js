import React, { Component } from 'react';
import Plant from './Plant';
import './Garden.css';
// npm install @mui/material @emotion/react @emotion/styled
import { Grid } from '@mui/material';
import apple_tree from '../assets/apple_tree.jpg';

const plantInfo = [
    { species: 'Sunflowers', age: '3', name: "Remy", img: apple_tree },
    { species: 'Palm tree', age: '7', name: 'Kaia', img: apple_tree },
    { species: 'Apple tree', age: 100, name: "Bob", img: apple_tree },
    { species: 'Orange tree', age: 40, name: "Joe", img: apple_tree },
    { species: 'Another Orange tree', age: '44', name: "Florida", img: apple_tree },
    { species: 'Lily', age: 1, name: "Sam", img: apple_tree },
    { species: 'Monstera', age: 2, name: "Rebecca", img: apple_tree },
    { species: 'Snake plant', age: 1, name: "Olivia", img: apple_tree },
    { species: 'Fern', age: '2', name: "Arvin", img: apple_tree },
    { species: 'Peach tree', age: '10', name: "Georgia", img: apple_tree },
    { species: 'Rose Bush', age: '5', name: "Penelope", img: apple_tree },
    { species: 'Cactus', age: '12', name: 'Happy', img: apple_tree },
]

function Garden(props) {
    return (
        <div className="section">
            <h1>{props.owner}'s Garden</h1>
            <Grid container spacing={3}>
                {plantInfo.map((plant) => (
                    <Grid item xs={4}>
                        <Plant species={plant.species} age={plant.age} name={plant.name} image={plant.img} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Garden;

