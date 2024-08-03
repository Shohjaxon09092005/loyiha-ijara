import React from 'react'
import rasm1 from '../image/Facebook.png'
import rasm2 from '../image/instagram.png'
import rasm3 from '../image/twitter.png'
import rasm4 from '../image/in.png'
import rasm5 from '../image/playmarket.png'
import rasm6 from '../image/app story.png'
import '../style/footer.css'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
        <div className="footer_content">
          <h2>Yordam</h2>
          <ul className='footer_list'>
            <li>Biz bilan bog'lan</li>
            <li>Ijarani kuzatish</li>
            <li>Qaytish&To'lovlar</li>
            <li>Tez-tez so'raladigan savollar</li>
          </ul>
        </div>
        <div className="footer_content">
          <h2>Kompaniya</h2>
          <ul className='footer_list'>
            <li>Biz haqimizda</li>
            <li>Bizning blogimiz</li>
            <li>Hamkorlik</li>
            <li>Media</li>
          </ul>
        </div>
        <div className="footer_content">
          <h2>Batafsil ma'lumot</h2>
          <ul className='footer_list'>
            <li>Muddati va shartlari</li>
            <li>Maxfiylik siyosati</li>
            <li>Sayt xaritasi</li>
          </ul>
        </div>
        <div className="footer_content">
          <h2>Manzil</h2>
          <ul className='footer_list'>
            <li>e-ijara@Uzbekistan.in</li>
            <li>Sirdaryo viloyati,Guliston shahar</li>
            <li>4-mavze,Guliston Davlat Universiteti</li>
          </ul>
        </div>
        
      </div><div className="footer__logo">
        <div className="logo">
          <img src={rasm1} alt="" />
          <img src={rasm2} alt="" />
          <img src={rasm3} alt="" />
          <img src={rasm4} alt="" />
        </div>
        <div className="logo__content">
          <h2>Saytni yuklab olish</h2>
          <div className="app_logo">
            <img src={rasm5} alt="" />
            <img src={rasm6} alt="" />
          </div>
        </div>
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
