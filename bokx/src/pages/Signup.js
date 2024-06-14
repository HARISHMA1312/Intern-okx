import React from 'react'
import Navv from './Navv'
import {Col,Container,Row} from 'react-bootstrap'
import BlackCol from './BlackCol'

export default function Signup() {
  return (
    <div className='signup-bdy'>
         <Navv/>
        <Container>
            <Row>
            <Col className='blk-col'>
              <BlackCol/>
            </Col>
            <Col className='white-col'>
            <div className='signup-container'>
              <h2>
                Sign Up
              </h2>
            </div>
              
            </Col>
            </Row>
  </Container>
    </div>
  )
}
