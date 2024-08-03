import React from 'react'
import '../style/ijara.css'
function IjaraPage() {
  return (
    <div className='ijara'>
      <div className="container">
        <h2>Ijara malumotlari</h2>
        <div className="ijara_wrapper">
          <form>
            <label>Ijarachi ismi</label>
            <input type="text"placeholder='' />
            <label>Ijarachi familiyasi</label>
            <input type="text"placeholder='' />
            <label>Ijarachi telefon nomeri</label>
            <input type='phone' placeholder='' />
            <label>Ijaraga qo'yayotgan viloyat</label>
            <input type="text"placeholder='' />
            <label>Ijaraning qaysi turiga kirishi </label>
            <select >
              <option >Transport</option>
              <option >Yer mulk</option>
              <option >Ko'chmas mulk</option>
              <option >Maishiy texnika</option>
              <option >Boshqa</option>
            </select>
            <label>Ijaraning malumoti </label>
            <input type="text"placeholder= '4 sotix , Gentra  va h/z' />
            <label>Ijaraning kunlik narxi</label>
            <input type="number"placeholder='' />
            <label>Ijaraning oylik narxi</label>
            <input type="number"placeholder='' />
            <label>Ijaraning yillik narxi</label>
            <input type="number"placeholder='' />
            <label >Ijara rasmlari</label>
            <input type="file" placeholder='rasm yuklash' />
            </form>
            <button>Ijaraga qo'yish</button>
          </div>
        </div>

      </div>
      
   
  )
}

export default IjaraPage
