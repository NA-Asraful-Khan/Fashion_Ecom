
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Shop } from './Pages/Shop'
import { ShopCatagory } from './Pages/ShopCatagory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'

function App() {

  return (
    <div>
      <h2>1:05:38</h2>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<ShopCatagory category="men"/>}/>
          <Route path='/Womens' element={<ShopCatagory category="women"/>}/>
          <Route path='/Kids' element={<ShopCatagory category="kid"/>}/>

          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
