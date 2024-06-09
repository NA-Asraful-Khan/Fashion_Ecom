import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu, setMenu] = useState('Shop')

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>FASHION</p>
            </div>

            <ul className="nav-menu">
                <Link className='nav-li' onClick={() => { setMenu("Shop") }} to='/'>Shop {menu === "Shop" ? <hr /> : <></>}</Link>

                <Link className='nav-li' onClick={() => { setMenu("Mens") }} to='/Mens'>Mens {menu === "Mens" ? <hr /> : <></>}</Link>

                <Link className='nav-li' onClick={() => { setMenu("Womens") }} to='/Womens'>Womens {menu === "Womens" ? <hr /> : <></>}</Link>

                <Link className='nav-li' onClick={() => { setMenu("Kids") }} to='/Kids'>Kids {menu === "Kids" ? <hr /> : <></>}</Link>

            </ul>

            <div className="nav-login-cart">

                <Link to="/Login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <Link to="/cart">
                    <div className="nav-cart-count">0</div>
                </Link>


            </div>
        </div>

    )
}
