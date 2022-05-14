import React from 'react'
import './Home.css'
import Product from './Product';
import Crsl from './crsl.js';
import Categories from './Categories';
function Home ()
{
    return (

        <div className='home'>
            <div className='element'>
                <Crsl />
                <Categories />
                
            </div>
            <div className='home__container'>
                <div>
                    <h3 className='heading'>Hot Deals </h3>
                </div>
                <div className='home__row'>
                    <Product title={ 'Apple iPhone 12' } price={ 1000 } image='https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg' rating={ 5 } id={ 1 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } />
                    <Product title={ 'Fire TV Stick Lite' } image='https://m.media-amazon.com/images/I/41pGFbSrrRL._AC_SX569_.jpg' price={ 29.99 } rating={ 4 } id={ 2 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } />
                </div>

                <div className='home__row'>
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    {/* Product Component this has 3 */ }
                </div>

                <div className='home__row'>
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    <Product title={ 'Apple iPhone 13 mini' } image='https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg' price={ 729 } rating={ 4 } id={ 2 } />
                    {/* Product Component this has 1 */ }
                </div>
            </div>

        </div>
    );
}

export default Home;