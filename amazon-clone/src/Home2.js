import React from 'react'
import './Home.css'
import Product from './Product.js';
import Crsl from './crsl.js';
import Categories from './Categories';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home ()
{
    return (
        <div className='home'>
            <div className='element'>
                <Crsl />
                <Categories />
            </div>
            <div>
                <Container>
                    <Row>
                        <h3>Hot Deals</h3>
                    </Row>
                    <Row xs={ 1 } md={ 2 }>
                        <Col>
                            <Product title={ 'Fire TV Stick Lite' } image='https://m.media-amazon.com/images/I/41pGFbSrrRL._AC_SX569_.jpg' price={ 29.99 } rating={ 4 } id={ 2 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } />
                        </Col>
                        <Col>
                            <Product title={ 'Apple iPhone 12' } price={ 1000 } image='https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg' rating={ 5 } id={ 1 } description={ 'Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)' } /></Col>
                    </Row>
                    <Row xs={ 1 } md={ 2 }>
                        <Col>
                            <Product title={ 'SAMSUNG Galaxy S20 FE 5G' } image='https://m.media-amazon.com/images/I/71z2dc+XnrL._AC_SX679_.jpg' price={ 551 } rating={ 4 } id={ 2 } description={ 'Factory Unlocked Android Cell Phone 128GB' } />
                        </Col>
                        <Col>
                            <Product title={ 'JBL Clip 4' } price={ 49.95 } image='https://m.media-amazon.com/images/I/71+0EFi2hVL._AC_SX425_.jpg' rating={ 5 } id={ 1 } description={ 'Portable Mini Bluetooth Speaker, Big Audio and Punchy bass' } /></Col>
                    </Row>
                    <Row xs={ 1 } md={ 2 }>
                        <Col>
                            <Product title={ 'Logitech C920x HD Pro Webcam' } image='https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SX425_.jpg' price={ 59.99 } rating={ 4 } id={ 2 } description={ 'Full HD 1080p/30fps Video Calling, Clear Stereo Audio' } />
                        </Col>
                        <Col>
                            <Product title={ 'iRobot Roomba 694 Robot Vacuum' } price={ 179.99 } image='https://m.media-amazon.com/images/I/71kscrE0ClL._AC_SX679_.jpg' rating={ 5 } id={ 1 } description={ 'Wi-Fi Connectivity, Good for Pet Hair, Carpets, Hard Floors' } />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;