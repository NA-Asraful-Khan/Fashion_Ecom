import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
export const Navbar = () => {
    const [menu,setMenu] = useState('Shop')

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>FASHION</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}>Shop {menu === "Shop"? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("Menu")}}>Menu {menu === "Menu"? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}>Women {menu === "Women"? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}>Kids {menu === "Kids"? <hr />:<></>}</li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>

  )
}
