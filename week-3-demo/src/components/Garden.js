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

function Garden(props) {
    return (
        <div>
            <h1>{props.owner}'s Garden</h1>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Plant name={"Lenny"} age={4} species={"Fern"} image={fern} />
                </Grid>
                <Grid item xs={4}>
                    <Plant name={"Monferno"} age={1} species={"Monstera"} image={monstera} />
                </Grid>
                <Grid item xs={4}>
                    <Plant name={"Juniper"} age={"<1"} species={"Monstera Deliciosa"} image={monstera_deliciosa} />
                </Grid>
                <Grid item xs={4}>
                    <Plant name={"Claus"} age={"<1"} species={"Pothos"} image={pothos} />
                </Grid>
                <Grid item xs={4}>
                    <Plant name={"Jasper"} age={1} species={"Succulent"} image={succulent} />
                </Grid>
                <Grid item xs={4}>
                    <Plant name={"Charlie"} age={1} species={"Snake Plant"} image={snake_plant} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Garden;