import React from 'react'

import sbg from '../../assets/Images/startup.png'

function Hero() {
  return (

    <section className='bg-[#C7B5F4]  w-full min-h-screen  -mt-18 flex flex-col items-center justify-center'>

       
        <div className='max-w-[1050px] mx-auto flex w-full justify-between pt-32  '>
            
                        <h1 className='text-7xl font-bold z-50'>Showcase your<br /> startup  to the world!</h1>
                        <div className=' w-[200px] h-[190px] '><img src={sbg} alt="SignIn" className="w-full h-full object-cover rotate-20 -ml-44" /></div>
            
        </div>

        



        <div className="max-w-[1050px] mx-auto flex flex-col w-full justify-between items-start space-y-4 ">
            <p className='text-[#374151] mb-10'>Increase your visibility and connect with investors & partners.</p>
            <button className='bg-[#0D9488] w-36 h-11 text-white text-[13px] rounded-sm'>Publish Your Startup</button>
        </div>
        

        

    </section>

  )
}

export default Hero