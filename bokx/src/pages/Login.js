import React from 'react'
import Navv from './Navv'
import {Stack,Col,Container,Row,Image} from 'react-bootstrap'
import Logo from '../assets/logo.png'
import Apple from '../assets/apple-logo.png'
import Google from '../assets/google.png'
import Telegram from '../assets/telegram.png'
import Wallet from '../assets/wallet.png'
import BlackCol from './BlackCol'

export default function Login() {
    const handlePhn=()=>{

    }
  return (
    <div className='login-bdy'>
        <Navv/>
        <Container>
        <Row className='d-flex flex-wrap'>
          <Col  xs={12} md={6} className='blk-col'>
          <BlackCol/>
          </Col>
          <Col xs={12} md={6} className='white-col'>
            <div className='login-container'>
              <h2>Login</h2>
              <Stack direction='horizontal' gap={3} className='mb-3'>
                <p className="p-2 " onClick={handlePhn}>Phone</p>
                <p className="p-2">Email/Sub-account</p>
                <p className="p-2">QR Code</p>
              </Stack>
              <input className='form-control mb-3' type="text" placeholder="Enter your details"/>
              <button className='btn btn-primary w-100 mb-3' disabled>Next</button>
              <p>Don't have an account? <span>Sign Up</span></p>
              <p className='text-center'>or continue with</p>
              <Stack direction='horizontal' gap={2} className='justify-content-center'>
                <button className='btn round-btn'><Image src={Google} alt='Google' roundedCircle width={20} height={20} /></button>
                <button className='btn round-btn'><Image src={Apple} alt='Apple' roundedCircle width={20} height={20} /></button>
                <button className='btn round-btn'><Image src={Telegram} alt='Telegram' roundedCircle width={20} height={20} /></button>
                <button className='btn round-btn'><Image src={Wallet} alt='Wallet' roundedCircle width={20} height={20} /></button>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
