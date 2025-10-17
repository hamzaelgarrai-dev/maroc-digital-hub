import { Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import SignIn from "./Pages/Auth/SignIn"
import SignUp from "./Pages/Auth/SignUp"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import Networking from "./Pages/Networking/Networking"
import MyEvents from "./Pages/My Events/MyEvents"
import Dashboard from "./Pages/Dashboard/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import AddStartup from "./Pages/FormPages/AddStartup"


function App() {


  return (
    <>
      

        <Navbar />
        <Routes>
          <Route path="SignIn" element={<SignIn/>}/>
          <Route path="SignUp" element={<SignUp/>} />
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Networking" element={<Networking/>}/>


          <Route path="/My_Events" element={<ProtectedRoute allowedRoles={["user", "admin", "startup"]}>
            <MyEvents/>
          </ProtectedRoute>}/>
          
          <Route path="/AddStartup" element={<ProtectedRoute allowedRoles={["user", "admin" , "startup"]}>
            <AddStartup/>
          </ProtectedRoute>}/>
        
          <Route path="/Dashboard" element={  <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard/>
          </ProtectedRoute>}/>
        </Routes>
        <Footer />
      


    </>
  )
}

export default App
