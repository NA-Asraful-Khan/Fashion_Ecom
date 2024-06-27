
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Shop } from './Pages/Shop'
import { ShopCatagory } from './Pages/ShopCatagory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import { Navbar } from './Components/Shared/Navbar/Navbar'
import { Footer } from './Components/Shared/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <div>
      <h2>2:12:17</h2>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<ShopCatagory banner={men_banner} category="men"/>}/>
          <Route path='/Womens' element={<ShopCatagory banner={women_banner} category="women"/>}/>
          <Route path='/Kids' element={<ShopCatagory banner={kids_banner} category="kid"/>}/>

          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
