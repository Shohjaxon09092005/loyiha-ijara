import React from 'react'
import mashina from '../image/mashina balonsiz.png'
import ballon from '../image/ballon.png'
import '../style/mashinaAnimation.css'
function MashinaAnimation() {
    
  return (
    <div className='mashina'>
      <img  className='ballon2' width={160} height={160} src={ballon} alt="" />
      <img   width={800} src={mashina} alt="" />
      <img className='ballon1' width={150} height={150} src={ballon} alt="" />
    </div>
  )
}

export default MashinaAnimation
