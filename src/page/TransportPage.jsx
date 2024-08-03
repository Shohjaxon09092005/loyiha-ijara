import React from 'react'
import AllCard from '../components/AllCard'
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
import '../style/allServis.css'
import '../style/transport.css'

function TransportPage() {
  return (
    <div className='allServis transport'>
      {/* <MashinaAnimation/> */}
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
      </div>
    </div>
  )
}

export default TransportPage
