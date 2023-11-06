
import {Routes, Route} from 'react-router-dom'
import './App.css'
import './fonts/key-tab-metal-font/KeyTabMetal-MOAJ.ttf'
import './fonts/vanessa-font/VanessaRegular-VKVw.ttf'
import './fonts/the-rockers-font/TheRockers-qZnz5.ttf'
import Home from './components/Home.jsx'
import GearForm from './components/GearForm.jsx'
import Main from './views/Main.jsx'
import { useState } from 'react'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import GearList from './components/GearList.jsx'
import EditGear from './components/EditGear.jsx'
import WishList from './components/WishList.jsx'
import EditWish from './components/EditWish.jsx'
import WishPage from './components/WishPage.jsx'
import LotteryForm from './components/LotteryForm.jsx'
import LotteryList from './components/LotteryList.jsx'
import LotteryPage from './components/LotteryPage.jsx'
import EditLottery from './components/EditLottery.jsx'
import GearPage from './components/GearPage.jsx'
import WishForm from './components/WishForm.jsx'

function App() {
    
    const [errors, setErrors] = useState([]);

  return (
    <>
      
        <Routes>
          <Route index element={<Main />}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login errors={errors} setErrors={setErrors} />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/gearlist" element={<GearList/>}/>
          <Route path="/gear/:id" element={<GearPage/>}/>
          <Route path="/gearform" element={<GearForm/>}/>
          <Route path="/gear/edit/:id" element={<EditGear />}/>
          <Route path="/wishform" element={<WishForm/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/wish/edit/:id" element={<EditWish/>}/>
          <Route path="/wishpage/:id" element={<WishPage/>}/>
          <Route path="/lotteryform" element={<LotteryForm/>}/>
          <Route path="/lotterylist" element={<LotteryList/>}/>
          <Route path="/lottery/edit/:id" element={<EditLottery/>}/>
          <Route path="/lotterypage/:id" element={<LotteryPage/>}/>
        </Routes>
      
    </>
  )
}

export default App
