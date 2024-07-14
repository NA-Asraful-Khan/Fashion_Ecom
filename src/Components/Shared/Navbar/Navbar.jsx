import './Navbar.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../../Context/ShopContext'
import nav_dropdown from '../../Assets/nav_dropdown.png'
export const Navbar = () => {
    const [menu, setMenu] = useState('')
    const {getTotalCartItems}=useContext(ShopContext)
    let location = useLocation();
    const path =location.pathname
    useEffect(() => {
        if (path === '/Mens') {
            setMenu('Mens');
        }else if(path === '/Womens') {
            setMenu('Womens');
        }else if(path === '/Kids') {
            setMenu('Kids');
        }else if(path === '/') {
            setMenu('Shop');
        }else{
            setMenu('')
        }
    }, [path]);

    const menuRef = useRef()
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>FASHION</p>
            </div>
            <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <Link className='nav-li' onClick={() => { setMenu("Shop") }} to='/'>Shop {menu === "Shop" ? <hr /> : <></>}</Link>

                <Link className='nav-li' to='/Mens'>Mens {menu === "Mens" ? <hr /> : <></>}</Link>

                <Link className='nav-li' to='/Womens'>Womens {menu === "Womens" ? <hr /> : <></>}</Link>

                <Link className='nav-li' to='/Kids'>Kids {menu === "Kids" ? <hr /> : <></>}</Link>

            </ul>

            <div className="nav-login-cart">

                <Link to="/Login" onClick={() => { setMenu("") }}>
                    <button>Login</button>
                </Link>
                <Link to="/cart" onClick={() => { setMenu("") }} >
                    <img src={cart_icon} alt="" />
                </Link>
                <Link to="/cart" onClick={() => { setMenu("") }}>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </Link>


            </div>
        </div>

    )
}
