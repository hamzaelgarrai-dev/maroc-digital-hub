import { Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import SingIn from "./Pages/Auth/SingIn"
import SingUp from "./Pages/Auth/SingUp"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import Networking from "./Pages/Networking/Networking"


function App() {


  return (
    <>
      

        <Navbar />
        <Routes>
          <Route path="SingIn" element={<SingIn/>}/>
          <Route path="SingUp" element={<SingUp/>} />
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Networking" element={<Networking/>}/>
        </Routes>
        <Footer />
      


    </>
  )
}

export default App
