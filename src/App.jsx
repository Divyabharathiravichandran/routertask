import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'; 
import Nav from "./Nav"
import Home from "./Home"
import Blog from "./Blog"
import Products from "./Products"
import Contact from "./Contact"
import {BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Nav> </Nav>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
