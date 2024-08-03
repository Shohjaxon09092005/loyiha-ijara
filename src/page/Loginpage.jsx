import React from 'react'

import { NavLink } from 'react-router-dom'
import '../style/login.css'

function Loginpage() {
  return (
    <div className='login'>
      <div className="header__wrapper ">
        <span><NavLink to="/">e-ijara</NavLink></span>

        <form >
          <select className='login_list' >
            <option >o'zbek tili</option>
            <option >rus tili</option>
            <option >ingliz tili</option>
          </select>
        </form>
        <div className="login__con1">
          <span className='login_span'><NavLink to="/">e-ijara</NavLink></span>

          <form >
            <select className='login_list1' >
              <option >o'zbek tili</option>
              <option >rus tili</option>
              <option >ingliz tili</option>
            </select>
          </form>
        </div>
        <div className="login__con2">
          <NavLink to="/login"> <button className='kirish1'>Kirish</button></NavLink>
          <NavLink to="/ro'yxat"><button className="royxat1">Ro'yxatdan o'tish</button></NavLink>
        </div>

        <NavLink to="/login"> <button className='kirish'>Kirish</button></NavLink>
        <NavLink to="/ro'yxat"><button className="royxat">Ro'yxatdan o'tish</button></NavLink>


      </div>
      <div className="container">
        <div className="login_grid">

          <div className="login_content">
            <h2>Tizimga kirish</h2>

            <form className='content_form' >
              <h4>Ism familiya yoki email manzil</h4>
              <input type="text" />
              <h4 >Parol</h4>
              <input type="password" />
            </form>
            <button className="royxat"><NavLink to="/ro'yxat">Ro'yxatdan o'tish</NavLink></button>
            <button className="royxat"><NavLink to="/">Kirish</NavLink></button>

          </div>

        </div>
      </div>



    </div>
  )
}

export default Loginpage
