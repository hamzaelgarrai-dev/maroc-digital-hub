import React from 'react'

import sbg from '../../assets/Images/image.png'

function SingIn() {
  return (
    <div className='bg-[#C7B5F4] w-full h-[850px] -mt-24 flex items-center justify-center'>

        <form className="bg-white p-3 rounded-2xl shadow-lg w-[700px] flex justify-between items-start">

          <div className='flex flex-col justify-between p-4' >
            <h3 className='font-semibold mb-10'>Maroc DH</h3>
            <p className='mb-10 font-medium'>HELLO!</p>
            <p className='text-xs text-[#A9A9A9] mb-6'>Hey, Welcome back to your Place</p>
            <input type="text" placeholder='exemple@gmail.com ' id="" className='border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6' />
            <input type="password" placeholder='*************' id="" className='border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6' />
            <button type='submit' className='bg-[#8C58EC] w-28 h-10 text-white rounded-md mb-6'>Sing In</button>
            <p className='text-xs text-[#A9A9A9]'>Don’t have an account ? <span className='text-[#8C58EC]'>sign Up</span> </p>
          </div>

          <div className=' w-[320px] h-[450px] '><img src={sbg} alt="SignIn" className="w-full h-full object-cover rounded-xl" /></div>



          
        

        
      </form>

    </div>
  )
}

export default SingIn