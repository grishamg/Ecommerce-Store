import React, { useEffect, useState} from 'react'
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment ()
{
    const [ { basket, user }, dispatch ] = useStateValue();
    const history = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( true );

    const [ succeeded, setSucceeded ] = useState( false );
    const [ processing, setProcessing ] = useState( "" );
    const [ clientSecret, setClientSecret ] = useState( true );

    useEffect( () =>
    {
        // generate the special stripe secret which allows us to change a customer

        const getClientSecret = async () =>
        {
            const response = await axios( {
                method: 'post',
                // stripe expexts the total in a currencies submits 
                url: `/payment/create?total = ${ getBasketTotal( basket ) * 100 }`
            } );
            setClientSecret( response.data.clientSecret )
        }
        getClientSecret();
    }, [ basket ] )

    console.log( 'the secret is >>  ', clientSecret );
    const handleSubmit = async ( event ) =>
    {
        // stripe work 
        event.preventDefault();
        setProcessing( true );

        // magic :

        const payload = await stripe.confirmCardPayment( clientSecret, {
            payment_method: {
                card: elements.getElement( CardElement )
            }
        } ).then( ( { paymentIntent } ) =>
        {

            // paymentIntent = payment Confirmation
            setSucceeded( true );
            setError( null );
            setProcessing( false );
            
            dispatch( {
                type: 'EMPTY_BASKET'
            })

            history.replace( '/orders' );
        } )
    }

    const handleChange = event =>
    {
        // listen for changes in the CardElement (wrtie number of card / details )
        // and display any errors as the customer types their card details
        setDisabled( event.empty );
        setError( event.error ? event.error.message : "" );

    }
    return (
        // <div>Payment</div>
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout ( <Link to='/checkout'> { basket?.length } items </Link>)
                </h1>

                {/* address */ }

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p> { user?.email } </p>
                        <p> Menlo Park </p>
                        <p> California , USA </p>
                    </div>
                </div>

                {/* Review Items */ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery </h3>
                    </div>

                    <div className='payment__items'>
                        {/* show all the basket */ }
                        { basket.map( item => (
                            <CheckoutProduct
                                id={ item.id }
                                title={ item.title }
                                image={ item.image }
                                price={ item.price }
                                rating={ item.rating }
                            />
                        ) ) }
                    </div>
                </div>

                {/* Payment Method */ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* stripe  */ }
                        <form onSubmit={ handleSubmit }>
                            <CardElement onChange={ handleChange } />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat renderText={ ( value ) => (
                                    <h3> Order Total : { value }</h3>
                                ) }
                                    decimalScale={ 2 }
                                    value={ getBasketTotal( basket ) }
                                    displayType={ 'text' }
                                    thousandSeparator={ true }
                                    prefix={ '$' }
                                />
                                <button disabled={ processing || disabled || succeeded }>
                                    <span>
                                        { processing ? <p> Processing </p> : "Buy Now" }
                                    </span>
                                </button>
                            </div>

                            { error && <div> { error } </div> }
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment