import React from 'react'
import rasm43 from "../image/R zargar.webp"
import rasm44 from "../image/2-zargarlik buyumi.jpg"
import rasm45 from "../image/3-zargar.jpeg"
import rasm46 from "../image/1-bolalar o'yinchog'i.webp"
import rasm47 from "../image/2-bolalar o'yinchog'i.jpg"
import rasm48 from "../image/3-bolalar o'yinchog'i.jpg"
import rasm49 from "../image/1-kelin.webp"
import rasm50 from "../image/2-kelin.jpg"
import rasm51 from "../image/3-kelin.jpg"
import rasm52 from "../image/1-kostyum.webp"
import rasm53 from "../image/2-kostyum.jpg"
import rasm54 from "../image/3-kostyum.webp"
import '../style/allServis.css'
import '../style/maishiy.css'
import rasm from '../image/chiziq.png'
import AllCardMaishiy from '../components/AllCardMaishiy'
function BoshqaPage() {
  return (
    <div className='allServis maishiy'>
    <div className="container">
    <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Boshqa ijaralar</h4></span>
       <div className="allServis_grid">
       <AllCardMaishiy nomi="Zargarlik buyumi" viloyat="Sirdaryo" rasmi={rasm43}/>
       <AllCardMaishiy  nomi="Zargarlik buyumi" viloyat="Xorazm" rasmi={rasm44}/>
       <AllCardMaishiy  nomi="Uzuklar" viloyat="Farg'ona" rasmi={rasm45}/>
       <AllCardMaishiy  nomi="Bolalar o'yinchog'i" viloyat="Namangan" rasmi={rasm46}/>
       <AllCardMaishiy  nomi="Bolalar o'yinchog'i" viloyat="Andijon" rasmi={rasm47}/>
       <AllCardMaishiy  nomi="Bolalar o'yinchog'i" viloyat="Toshkent" rasmi={rasm48}/>
       <AllCardMaishiy  nomi="Kelin ko'ylak" viloyat="Jizzax" rasmi={rasm49}/>
       <AllCardMaishiy  nomi="Kelin ko'ylak" viloyat="Samarqand" rasmi={rasm50}/>
       <AllCardMaishiy  nomi="Kelin ko'ylak" viloyat="Navoiy" rasmi={rasm51}/>
       <AllCardMaishiy  nomi="Kastyum shim" viloyat="Surxondaryo" rasmi={rasm52}/>
       <AllCardMaishiy  nomi="Kastyum shim" viloyat="Qashqadaryo" rasmi={rasm53}/>
       <AllCardMaishiy  nomi="Kastyum shim" viloyat="Qoraqalpog'iston" rasmi={rasm54}/>
       </div>
    </div>
   </div>
  )
}

export default BoshqaPage
