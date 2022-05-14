import React from 'react'
import { StateProvider, useStateValue } from './StateProvider'
import './Product1.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function Product ( { id, title, image, price, rating, description } )
{
    const [ { basket }, dispatch ] = useStateValue();
    // console.log( "this is the basket", basket );
    const addtoBasket = () =>
    {
        // dispatch the item to data layer
        dispatch( {
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        } );

    };
    return (
        <Card className='mycard' >
            <Card.Img className='myimg' variant="top" src={ image } />
            <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>
                    <>
                        <strong>$ </strong>
                        { price }
                        <br />
                        { description }
                    </>
                </Card.Text>
                <Button variant="primary" className='mybtn' onClick={ addtoBasket }>Add to Basket</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;