import React from 'react'
import rasm from '../image/basket.png'
function AllCardYer({yer,maydon,viloyat,rasmi}) {
  return (
    <div className='allCard'>
       <div className="allCard__card">
          <div className="allImg">
            <img height={200} width={350} src={rasmi} alt="" />
          </div>
          <div className="all_content">
            <div className="all_yer">
              <p>{yer}:</p>
              <h4>{maydon}</h4>
            </div>
            <div className="all_joyi">
              <p>viloyat:</p>
              <h4>{viloyat}</h4>
            </div>
            <div className="all_tell">
              <p>telefon nomer:</p>
              <h4>+9989******</h4>
            </div>
            <div className="narx">
              <p>oy/yil:</p>
              <h4>**** so'm/***so'm/***so'm</h4>
            </div>
            <div className="all_ijara">
              <p>ijaraga olish:</p>
              <img width={40} height={40} src={rasm} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AllCardYer
