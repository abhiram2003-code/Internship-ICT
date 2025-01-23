import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Well from './Components/Well'
import Api from './Components/Api'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1>Btech</h1>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/s' element={<Signup />} />
          <Route path='/c' element={<Counter />} />
          <Route path='/w' element={<Well />} />
          <Route path='/site' element={<Api />} />
        </Routes>
      </div>
    </>
  )
}

export default App