import React from "react"
import "./App.css"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/priyadharshan' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
