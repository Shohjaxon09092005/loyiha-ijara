import React, { useRef } from 'react'
import '../style/header.css'
import { NavLink } from 'react-router-dom'
import savat from '../image/savat.png'
import search from '../image/search.png'
import user from '../image/user.png'
import burger from "../image/Hamburger_icon.svg.webp"
function Header() {
  let burger_logo =useRef()
  async function logo(){
    burger_logo.current.classList.add("open")

  }
  function del(){
    burger_logo.current.classList.remove("open")
  }
  return (
    <header className='header'>
      <div ref={burger_logo}  className="modal">
        <span  onClick={del}>X</span>
      <ul  className="modal__list">
          <li><NavLink to="/Transport">Transport vositalari</NavLink></li>
          <li><NavLink to='/yer'>Yer mulk</NavLink></li>
          <li><NavLink to='/uy'>Ko'chmas mulk</NavLink></li>
          <li><NavLink to='/Maishiy'>Maishiy texnika</NavLink></li>
          <li><NavLink to='/boshqa'>Boshqalar</NavLink></li>
          <li><NavLink to='/ijara'>Ijaraga qo'yish</NavLink></li>
          <button><NavLink>qidirish</NavLink></button>

        </ul>
      </div>
      <div className="header__wrapper">
        <img onClick={logo}  width={50} height={50} className='burger' src={burger} alt="" />
        <span><NavLink to="/">e-ijara</NavLink></span>
        <ul className="header__list">
          <li><NavLink to="/Transport">Transport vositalari</NavLink></li>
          <li><NavLink to='/yer'>Yer mulk</NavLink></li>
          <li><NavLink to='/uy'>Ko'chmas mulk</NavLink></li>
          <li><NavLink to='/Maishiy'>Maishiy texnika</NavLink></li>
          <li><NavLink to='/boshqa'>Boshqalar</NavLink></li>
          <li><NavLink to='/ijara'>Ijaraga qo'yish</NavLink></li>
          <button><NavLink><img src={search} alt="" /> <p>Search</p></NavLink></button>

        </ul>
        <div className="header__btn">
          <button><NavLink><img src={savat} alt="" /></NavLink></button>
          <button><NavLink to="/login"><img src={user} alt="" /></NavLink></button>

        </div>

      </div>

    </header>
  )
}

export default Header
