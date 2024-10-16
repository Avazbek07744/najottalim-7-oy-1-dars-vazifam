import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div className='bg-pink-500 w-[100%] pb-20'>
      <div className='flex justify-center pt-10'>
        <Link className='text-white text-2xl' to='/about'>About</Link>
      </div>
      <div className='pt-20'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
