import React from 'react'
import './Categories.css';
import Carousel from 'react-bootstrap/Carousel'
import sofa from './SVGIcons/sofa.png';
import tshirt from './SVGIcons/tshirt.png';
import mobile from './SVGIcons/phone.svg';
import bicycle from './SVGIcons/bicycle.svg'
import laptop from './SVGIcons/laptop.svg';
import headphone from './SVGIcons/headphones.svg';
import game from './SVGIcons/controller.svg';
import watch from './SVGIcons/smartwatch.svg'
import camera from './SVGIcons/camera.svg';
import speaker from './SVGIcons/speaker.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Categories ()
{
  return (
    <div className='slider'>
      <div className='items'>
        <Container >
          <Row>
            <h3 className='head' >Popular Categories</h3>
            <Col >
              <img src={ sofa } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ tshirt } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ mobile } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ bicycle } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ laptop } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ headphone } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ game } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ watch } alt="" height="70" className='icon' />
            </Col>
            <Col>
              <img src={ camera } alt="" height="70" className='icon' />
            </Col>
            {/* <Col>
              <img src={ speaker } alt="" height="70" className='icon' />
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Categories