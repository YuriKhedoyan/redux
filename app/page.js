"use client"
import Main from "./pages/main/";
import Login from "./pages/login/";
import Register from "./pages/register/";
import Dashboard from "./pages/dashboard/";
import {BrowserRouter, Routes, Route} from 'react-router'

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="*" element={<Main/>} />
				<Route path="/" element={<Main/>} />
				{/* <Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>} />
				<Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Home;