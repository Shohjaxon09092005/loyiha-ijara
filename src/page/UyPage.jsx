import React from 'react'
import rasm31 from "../image/Sirdaryo uy.webp"
import rasm32 from "../image/Buxoro uy.webp"
import rasm33 from "../image/Xorazm uy.webp"
import rasm34 from "../image/Jizzax uy.webp"
import rasm35 from "../image/samarqand uy.webp"
import rasm36 from "../image/Farg'ona uy.webp"
import rasm37 from "../image/Surxondaryo uy.webp"
import rasm38 from "../image/Qashqadaryo uy.jpg"
import rasm39 from "../image/Navoiy uy.jpg"
import rasm40 from "../image/Namangan uy.jpg"
import rasm41 from "../image/Qoraqalpoq uy.webp"
import rasm42 from "../image/Andijon uy.webp"
import AllCardMulk from '../components/AllCardMulk'
import '../style/allServis.css'
import '../style/mulk.css'
import rasm from '../image/chiziq.png'
function UyPage() {
  return (
    <div className='allServis mulk'>
     <div className="container">
     <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Ko'chmas mulk</h4></span>
        <div className="allServis_grid">
          <AllCardMulk  yer="Hovlili uy" maydon="6 sotix" viloyat="Sirdaryo" rasmi={rasm31} />
          <AllCardMulk  yer="Hovlili uy" maydon="4 sotix" viloyat="Buxoro" rasmi={rasm32} />
          <AllCardMulk  yer="Hovlili uy" maydon="6 sotix" viloyat="Xorazm" rasmi={rasm33} />
          <AllCardMulk  yer="Ko'p qavatli uy" maydon="3 xona" viloyat="Jizzax" rasmi={rasm34} />
          <AllCardMulk  yer="Ko'p qavatli uy" maydon="4 xona" viloyat="Samarqand" rasmi={rasm35} />
          <AllCardMulk  yer="Ko'p qavatli uy " maydon="4 xona" viloyat="Farg'ona" rasmi={rasm36} />
          <AllCardMulk  yer="Ko'p qavatli uy" maydon="4 xona" viloyat="Surxondaryo" rasmi={rasm37} />
          <AllCardMulk  yer="Ko'p qavatli uy" maydon="2 xona" viloyat="Qashqadaryo" rasmi={rasm38} />
          <AllCardMulk  yer="Hovlili uy" maydon="2 sotix" viloyat="Navoiy" rasmi={rasm39} />
          <AllCardMulk  yer="Hovlili uy" maydon="4 sotix" viloyat="Namangan" rasmi={rasm40} />
          <AllCardMulk  yer="Hovlili uy" maydon="2 sotix" viloyat="Qoraqalpog'iston" rasmi={rasm41} />
          <AllCardMulk  yer="Hovlili uy" maydon="6 sotix" viloyat="Andijon" rasmi={rasm42} />
        </div>
     </div>
    </div>
  )
}

export default UyPage
