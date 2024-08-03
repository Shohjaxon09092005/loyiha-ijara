import React from 'react'
import AllCard from './AllCard'
import rasm1 from '../image/cobalt1.jpg'
import rasm from '../image/chiziq.png'
import rasm2 from '../image/lasetti2.png'
import rasm3 from '../image/gentra.jpg'
import rasm4 from '../image/nexia3.png'
import rasm5 from '../image/nexia2.png'
import rasm6 from '../image/s.jpg'
import rasm7 from '../image/kia sonet.png'
import rasm8 from '../image/kia sportage.png'
import rasm9 from '../image/kia seltos.png'
import rasm10 from '../image/byd song plus.png'
import rasm11 from '../image/chazor.png'
import rasm12 from '../image/atto.png'
import rasm13 from '../image/isuzu.jpg'
import rasm14 from '../image/isuzu2.png'
import rasm15 from '../image/Man.png'
import rasm16 from '../image/Shacman.jpg'
import rasm17 from '../image/Kamaz.jpg'
import rasm18 from '../image/Labo.png'
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
import rasm43 from "../image/Gaz plita.png"
import rasm44 from "../image/chamgyut.jpeg"
import rasm45 from "../image/mikrato'l.jpg"
import rasm46 from "../image/Blender.webp"
import rasm47 from "../image/televizor.jpg"
import rasm48 from "../image/Muz.png"
import rasm49 from "../image/Kiryuv.jpg"
import rasm50 from "../image/komp.jpg"
import rasm51 from "../image/Go'shtmay.png"
import rasm52 from "../image/Printer.jpg"
import rasm53 from "../image/Kondit.jpg"
import rasm54 from "../image/Dazmol.jpeg"

import '../style/allServis.css'
import AllCardYer from './AllCardYer'
import AllCardMulk from './AllCardMulk'
import AllCardMaishiy from './AllCardMaishiy'
function AllServis() {
  return (
    <div className='allServis'>
      <div className="container">
      <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Transport ijarasi/Yengil avtomobil</h4></span>
        <div className="allServis_grid">
            <AllCard rusum="Chevrolet" nomi="Cobalt" rasmi={rasm1} viloyat="Xorazm" />
            <AllCard rusum="Chevrolet" nomi="Lasetti" rasmi={rasm2} viloyat="Sirdaryo" />
            <AllCard rusum="Chevrolet" nomi="Gentra" rasmi={rasm3} viloyat="Farg'ona" />
            <AllCard rusum="Ravon" nomi="Nexia 3" rasmi={rasm4} viloyat="Namangan" />
            <AllCard rusum="Daewoo" nomi="Nexia 2" rasmi={rasm5} viloyat="Andijon" />
            <AllCard rusum="Chevrolet" nomi="Spark" rasmi={rasm6} viloyat="Toshkent" />
            <AllCard rusum="Kia" nomi="Sonet" rasmi={rasm7} viloyat="Jizzax" />
            <AllCard rusum="Kia" nomi="Sportage" rasmi={rasm8} viloyat="Samarqand" />
            <AllCard rusum="Kia" nomi="Seltos" rasmi={rasm9} viloyat="Navoiy" />
            <AllCard rusum="BYD" nomi="Song Plus" rasmi={rasm10} viloyat="Qashqadaryo" />
            <AllCard rusum="BYD" nomi="Chazor" rasmi={rasm11} viloyat="Surxondaryo" />
            <AllCard rusum="BYD" nomi="Atto 3" rasmi={rasm12} viloyat="Qoraqalpog'iston" />
        </div>
        <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Transport ijarasi/Yuk mashinalari</h4></span>
        <div className="allServis_grid">
            <AllCard rusum="Isuzu" nomi="Truck" rasmi={rasm13} viloyat="Xorazm" />
            <AllCard rusum="Isuzu" nomi="Low-Cap" rasmi={rasm14} viloyat="Sirdaryo" />
            <AllCard rusum="Man" nomi="Truck" rasmi={rasm15} viloyat="Farg'ona" />
            <AllCard rusum="Shacman" nomi="Truck" rasmi={rasm16} viloyat="Namangan" />
            <AllCard rusum="KAMAZ" nomi="Truck" rasmi={rasm17} viloyat="Andijon" />
            <AllCard rusum="Chevrolet" nomi="Labo" rasmi={rasm18} viloyat="Toshkent" />
           
        </div>
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
        <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Maishiy texnika</h4></span>
        <div className="allServis_grid">
        <AllCardMaishiy  nomi="Gaz plita" viloyat="Sirdaryo" rasmi={rasm43}/>
        <AllCardMaishiy  nomi="Changyutgich" viloyat="Xorazm" rasmi={rasm44}/>
        <AllCardMaishiy  nomi="Mikrato'lqinli pech" viloyat="Farg'ona" rasmi={rasm45}/>
        <AllCardMaishiy  nomi="Blender" viloyat="Namangan" rasmi={rasm46}/>
        <AllCardMaishiy  nomi="Televizor" viloyat="Andijon" rasmi={rasm47}/>
        <AllCardMaishiy  nomi="Muzlatgich" viloyat="Toshkent" rasmi={rasm48}/>
        <AllCardMaishiy  nomi="Kir yuvish mashinasi" viloyat="Jizzax" rasmi={rasm49}/>
        <AllCardMaishiy  nomi="Kompyuter" viloyat="Samarqand" rasmi={rasm50}/>
        <AllCardMaishiy  nomi="Go'sht maydalagich" viloyat="Navoiy" rasmi={rasm51}/>
        <AllCardMaishiy  nomi="Printer" viloyat="Surxondaryo" rasmi={rasm52}/>
        <AllCardMaishiy  nomi="Konditsioner" viloyat="Qashqadaryo" rasmi={rasm53}/>
        <AllCardMaishiy  nomi="Dazmol" viloyat="Qoraqalpog'iston" rasmi={rasm54}/>
        </div>
      </div>
    </div>
  )
}

export default AllServis
