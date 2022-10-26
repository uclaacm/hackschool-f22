import React from 'react';
import Plant from './Plant';
import './Garden.css';
// npm install @mui/material @emotion/react @emotion/styled
import { Grid } from '@mui/material';
import apple_tree from '../assets/apple_tree.jpg';
import fern from '../assets/fern.jpg';
import monstera from '../assets/monstera.jpg';
import monstera_deliciosa from '../assets/monstera_deliciosa.jpg';
import pothos from '../assets/pothos.jpg';
import snake_plant from '../assets/snake_plant.jpg';
import succulent from '../assets/succulent.jpg';

const plantInfo = [
    { name: "Lenny", age: 4, species: "Fern", image: fern },
    { name: "Monferno", age: 1, species: "Monstera", image: monstera },
    { name: "Juniper", age: "<1", species:"Monstera Deliciosa", image: monstera_deliciosa },
    { name: "Claus", age: "<1", species: "Pothos", image: pothos, },
    { name: "Jasper", age: 1, species: "Succuelent", image: succulent },
    { name: "Charlie", age: 1, species: "Snake Plant", image: snake_plant }
]

function Garden(props) {
    return (
        <div className="section">
            <h1>{props.owner}'s Garden</h1>
            <Grid container spacing={3}>
                {plantInfo.map((plant) => (
                    <Grid item xs={4}>
                        <Plant species={plant.species} age={plant.age} name={plant.name} image={plant.image} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Garden;

