import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='relative max-w-[1050px] mx-auto top-0 inset-0 z-50'>
        <nav className=' pt-8  h-16 flex justify-between items-center'>
            <div className="logo text-[22px] font-bold">Maroc DH</div>
            <ul className='flex justify-between  w-[480px]'>
                <Link to="/"><li className='cursor-pointer'>Home</li></Link>
                <Link to="/Events"><li className='cursor-pointer'>Events</li></Link>
                <Link to="/Networking"><li className='cursor-pointer'>Networking</li></Link>
                <Link to="/My_Events"><li className='cursor-pointer'>My Events</li></Link>
            </ul>

            <div className='w-42 flex justify-between '>
                <Link to="/SingIn"><button className='w-20 h-8 bg-[#E5E7EB] rounded-md cursor-pointer'>Login</button></Link>

                <Link to="/SingUp"><button className='w-20 h-8 bg-[#0D9488] rounded-md text-white text-[14px] cursor-pointer'>Sing Up</button></Link>
                
            </div>

        </nav>
     </div>
  )
}

export default Navbar