
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Notes from './Pages/Note'
import { Navbar } from './Pages/Navbar'


function App() {
 

  return (
   <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/note' element={<Notes/>}/>
        </Routes>
      </BrowserRouter>                                        
    </>
     
     
  

  )
}
export default App
