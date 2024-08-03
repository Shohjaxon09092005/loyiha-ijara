import React from 'react'

function HeroCard({desc,title,subtitle,img}) {
  return (
    <div className='heroCard'>
      <div className="heroCard__content">
        <h4>{desc}</h4>
        <h2>{title}</h2>
        <h5>{subtitle}</h5>

      </div>
      <div className="heroCard_Image">
        <img  src={img} alt="img" />
      </div>
    </div>
  )
}

export default HeroCard
