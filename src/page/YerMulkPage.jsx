import React from 'react'
import '../style/allServis.css'
import rasm from '../image/chiziq.png'
import rasm19 from '../image/Buxora yer.png'
import rasm20 from '../image/Xorazm.jpeg'
import rasm21 from '../image/Sirdaryo yer.jpg'
import rasm22 from '../image/Navoiy yer.jpg'
import rasm23 from '../image/Jizzax yer.jpg'
import rasm24 from "../image/Farg'ona yer.jpg"
import rasm25 from "../image/Andijon yer.jpeg"
import rasm26 from "../image/Namangan yer.jpg"
import rasm27 from "../image/Surxondaryo yer.jpg"
import rasm28 from "../image/Qashqadaryo yer.jpg"
import rasm29 from "../image/Toshkent yer.jpg"
import rasm30 from "../image/Qoraqalpoq  yer.jpg"
import AllCardYer from '../components/AllCardYer'
import '../style/Yer.css'
function YerMulkPage() {
  return (
    <div className='allServis yer'>
     <div className="container">
     <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Yer mulk</h4></span>
        <div className="allServis_grid">
        <AllCardYer yer="Lalmi yer" maydon="5 gektar" viloyat="Buxoro" rasmi={rasm19}/>
        <AllCardYer yer="Lalmi yer" maydon="10 gektar" viloyat="Xorazm" rasmi={rasm20}/>
        <AllCardYer yer=" Qora tuproqli yer" maydon="8 gektar" viloyat="Sirdaryo" rasmi={rasm21}/>
        <AllCardYer yer="Lalmi yer" maydon="6 gektar" viloyat="Navoiy" rasmi={rasm22}/>
        <AllCardYer yer="Unumdor yer" maydon="15 gektar" viloyat="Jizzax" rasmi={rasm23}/>
        <AllCardYer yer="Qora tuproqli yer" maydon="12 gektar" viloyat="Farg'ona" rasmi={rasm24}/>
       
        <AllCardYer yer="Lalmi yer" maydon="16 gektar" viloyat="Andijon" rasmi={rasm25}/>
        <AllCardYer yer="Qora tuproqli yer" maydon="5 gektar" viloyat="Namangan" rasmi={rasm26}/>
        <AllCardYer yer="Lalmi yer" maydon="10 gektar" viloyat="Surxondaryo" rasmi={rasm27}/>
        <AllCardYer yer="Qora tuproqli yer" maydon="8 gektar" viloyat="Qashqadaro" rasmi={rasm28}/>
        <AllCardYer yer="Lalmi yer" maydon="12 gektar" viloyat="Toshkent" rasmi={rasm29}/>
        <AllCardYer yer="Lalmi" maydon="7 gektar" viloyat="Qoraqalpog'iston" rasmi={rasm30}/>
           
        </div>
     </div>
    </div>
  )
}

export default YerMulkPage
