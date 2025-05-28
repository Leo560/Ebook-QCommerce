import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from  'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Loginpage from './components/Loginpage'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {
  const [authUser,setAuthUser]=useAuth()
console.log(authUser)
  return (
    
    <>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Loginpage/>}/>
    </Routes>
          <Toaster />


    </>
 
  )
}

export default App