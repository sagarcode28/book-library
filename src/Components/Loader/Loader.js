import React from 'react'
import './Loader.css';


function Loader() {

  const imgsrc = 'https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif';

  return (
    <div className='loader flex flex-c'>
      <img src={imgsrc} alt="loader" />
    </div>
  )
}

export default Loader
