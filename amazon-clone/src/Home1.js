import React from 'react'
import './Home.css'
import Product from './Product';
import Crsl from './crsl.js';
import Categories from './Categories';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function FormRow ()
{
    return (
        <React.Fragment>
            <Grid item xs={ 4 }>
                <Product title={ 'Apple iPhone 12' } price={ 1000 } image='https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg' rating={ 5 } id={ 1 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } />
            </Grid>
            <Grid item xs={ 4 }>
                <Product title={ 'Fire TV Stick Lite' } image='https://m.media-amazon.com/images/I/41pGFbSrrRL._AC_SX569_.jpg' price={ 29.99 } rating={ 4 } id={ 2 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } />
            </Grid>
        </React.Fragment>
    );
}

function Home ()
{
    return (

        <div className='home'>
            <div className='element'>
                <Crsl />
                <Categories />
            </div>
            <div className='row'>
                <Box sx={ { flexGrow: 1 } }>
                    <Grid container spacing={ 1 }>
                        <Grid container item spacing={ 3 }>
                            <FormRow />
                        </Grid>
                        <Grid container item spacing={ 3 }>
                            <FormRow />
                        </Grid>
                        <Grid container item spacing={ 3 }>
                            <FormRow />
                        </Grid>
                    </Grid>
                </Box>
            </div>


        </div>
    );
}

export default Home;