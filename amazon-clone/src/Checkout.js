import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout ()
{
    const [ { basket, user }, dispatch ] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/Events/2022/Easter/XCM_CUTTLE_ORIGIN_1413495_2224469_US_CUTTLE_1500x300_2X_en_US_Version_1.png" alt="" />

                <div>
                    <h3> Hello, { user?.email }</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>

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

            <div className='checkout__right'>
                {/* Subtotal */ }
                {/* <h2>The subtotal will go here</h2>
                 */}
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;