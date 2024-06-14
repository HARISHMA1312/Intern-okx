import React from 'react'
import Navv from './Navv.js'
import { Image } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='bdy'>
      <Navv />
      <h1 className="b_h1"><b>Faster, better, <br></br>stronger than your <br></br>average crypto <br></br>exchange</b></h1>
      <p><input className="b_input" type="text" placeholder="  Email address"></input><button className="b_try">Try OKX</button></p>

      <div className='b_container'>
        <div className='image-wrapper'>
          <Image
            src='https://www.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png'
            width='105'
            height='50' alt='OKX Logo'
            fluid
          />
          <Image
            src='https://www.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png?x-oss-process=image/format,webp/ignore-error,1'
            width='150'
            height='50'
            alt='OKX Logo'
            fluid
          />
          <Image
            src='https://www.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png?x-oss-process=image/format,webp/ignore-error,1'
            width='65'
            height='65'
            alt='OKX Logo'
            fluid
          />
        </div>
      </div>
      <div class="container mt-5">
        <div class="embed-responsive embed-responsive-16by9 align-right">
          <iframe class="embed-responsive-item"
            src="https://www.okx.com/cdn/assets/files/243/79620084DA93114F.webm?autoplay=1&mute=1&loop=1"
            title="Embedded Video"
            allow="autoplay; encrypted-media"
            allowfullscreen
            controls="0">
          </iframe>
        </div>
      </div>

    </div>


  )
}
