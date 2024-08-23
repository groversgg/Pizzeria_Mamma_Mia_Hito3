import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import React, {useState} from "react";
import productos from "../pizzas.json"
import Cart from "./components/Cart/Cart";


function App() {
  const [email, setEmail] = useState ("")
  const [password1, setPassword1] = useState ("")
  const [password2, setPassword2] = useState("")
  

  return (
    <>
      <Navbar />
      {/*<Home productos = {productos}/>*/}
      <Cart productos = {productos}/>
      <Footer />
    </>
      
    
  
      

  )
}

export default App
