import React from 'react'
import '../style/homeHero.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import rasm1 from '../image/mashina-ijara.png'
import rasm2 from '../image/yerMulk.png'
import rasm3 from '../image/Uy.png'
import rasm4 from '../image/Maishiy.png'




import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroCard from './HeroCard';
function HomeHero() {
  return (
    <section className='homeHero'>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true} pagination={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
          <SwiperSlide><HeroCard title="Transport ijarasi" desc="Transport / Toplar" subtitle="tez / oson / xavfsiz" img={rasm1}/></SwiperSlide>
          <SwiperSlide><HeroCard title="Yer mulk ijarasi" desc="Yer mulk/ Toplar" subtitle="tez / oson / xavfsiz" img={rasm2}/></SwiperSlide>
          <SwiperSlide><HeroCard title="Ko'chmas mulk ijarasi" desc="Ko'chmas mulk / Toplar" subtitle="tez / oson / xavfsiz" img={rasm3}/></SwiperSlide>
          <SwiperSlide><HeroCard title="Maishiy texnika ijarasi" desc="Maishiy texnika / Toplar" subtitle="tez / oson / xavfsiz" img={rasm4}/></SwiperSlide>
        
        </Swiper>
        
      </div>
    </section>
  )
}

export default HomeHero
