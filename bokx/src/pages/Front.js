import React, { useState } from 'react';
import Navv from './Navv';
import Big from '../assets/BIg.mp4';
import Monk from '../assets/Monk.mp4';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import { Stack, Image } from 'react-bootstrap';

export default function Front() {
  const [active, setActive] = useState('Exchange');

  const handleToggle = (value) => {
    setActive(value);
  };

  return (
    <div className='front-pg'>
      <Navv />
      <div>
        <center>
          <h1>Trade Like a Pro</h1>
          <p style={{ color: 'grey' }}>
            Get the lowest fees, fastest transactions, powerful APIs, and more.
          </p>
        </center>
        <iframe
          src={Big}
          title='Embedded Video'
          allow='autoplay; encrypted-media'
          allowFullScreen
          controls='0'
          className='ifr'
          style={{
            width: '100%',
            height: '87vh',
            border: 'none',
            
            zIndex: 1,
          }}
        ></iframe>
        <center>
          <h1 style={{ color: 'white' }}>One app. Unlimited possibilities.</h1>
        </center>

        <div className='e_toggle-container'>
          <div
            className={`e_toggle-button ${active === 'Exchange' ? 'active' : ''}`}
            onClick={() => handleToggle('Exchange')}
          >
            Exchange
          </div>
          <div
            className={`e_toggle-button ${active === 'Web3' ? 'active' : ''}`}
            onClick={() => handleToggle('Web3')}
          >
            Web3
          </div>
        </div>
        {active === 'Exchange' && (
          <div className='e_phone1'>
            <Stack direction='horizontal'>
              <Image
                src={Image1}
                width='300'
                height='500'
                alt='OKX ph1'
                fluid
              />
              <p className='e_p'>This is the Exchange section where you can trade cryptocurrencies.</p>
            </Stack>
          </div>
        )}
        {active === 'Web3' && (
          <div className='e_phone1'>
            <Stack direction='horizontal'>
              <Image
                src={Image2}
                width='300'
                height='500'
                alt='OKX ph2'
                fluid
              />
              <p className='e_p'>This is the Web3 section where you can explore decentralized applications.</p>
            </Stack>
          </div>
        )}

        <center>
          <h1>With you every step of the way</h1>
          <p>
            From your first crypto trade to your first NFT purchase, you’ll have us to guide you through the process. No stupid questions.<br />
            No sleepless nights. Have confidence in your crypto.
          </p>
        </center>
        <iframe
          src={Monk}
          title='Embedded Video'
          allow='autoplay; encrypted-media'
          allowFullScreen
          controls='0'
          className='ifr'
          style={{
            width: '100%',
            height: '87vh',
            border: 'none',
            zIndex: 1,
          }}
        ></iframe>
        <h1 className='what'>What is OKX?</h1>
        <p className='what-p'>
          Find out why we’re your new favorite crypto app with some help <br />from our world-class partners
        </p>
      </div>
    </div>
  );
}
