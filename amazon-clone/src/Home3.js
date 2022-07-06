import React, { useEffect, useState } from "react";
import './Home.css'
import Product from './Product.js';
import Crsl from './crsl.js';
import Categories from './Categories';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
const FetchProducts = () =>
{

    const [ products, setProducts ] = useState( [] );
    useEffect( () =>
    {
        prodData()
    }, [] )
    const prodData = () =>
    {

        axios( "https://young-waters-14938.herokuapp.com/api/product", {
            method: 'GET',
            withCredentials: false,
        } ).then( resp =>
        {
            console.log( resp );
            setProducts( resp.data );
        } ).catch( err =>
        {
            console.log( err );
        } )
    }


    return (
        <div className="home">
            <div className='element'>
                <Crsl />
                <Categories />
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <h3>Hot Deals</h3>
                    </Row>
                    <Row md={ 3 }>

                        { products.map( ( product ) => (
                            <Product title={ product.name } image={ product.image } price={ product.price } rating={ product.rating } />
                        ) ) }

                    </Row>
                </Container>
            </div>
        </div >
    );
}



export default FetchProducts;