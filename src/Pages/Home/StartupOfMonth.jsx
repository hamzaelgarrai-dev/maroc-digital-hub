import React from 'react'
import Act from '../../assets/Images/Act.png'

function StartupOfMonth() {
  return (
    <section className='bg-[#F8F7FC] w-full h-[450px] flex flex-col items-center justify-start'>

        <h2 className='text-center text-xl text-[#374151] mb-14'>Startup of the Month</h2>

        <div className='bg-white flex justify-start space-x-6 items-start w-[800px] h-[300px] border border-gray-400 rounded-md shadow-md'>

            <div className=' w-[250px] h-[300px] '>
                <img src={Act} alt="SignIn" className="w-full h-full object-cover " />
            </div>
            <div className="flex flex-col pt-6 ">
                <p className='mb-3'>Startup Name : ACT</p>
                <p className='mb-3'>Creator : Hamza Elgarrai</p>
                <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
            </div>


        </div>

    </section>
  )
}

export default StartupOfMonth