
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Adddetail from './Components/Adddetail'
import Navbar from './Components/Navbar'
import View from './Components/View'


function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Adddetail />} />
          <Route path='/v' element={<View />} />
        </Routes>
      </div>
    </>
  )
}

export default App
