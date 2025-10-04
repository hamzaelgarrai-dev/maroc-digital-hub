import React from 'react'

import eventcardimage from '../../assets/Images/eventcardimage.png'

const cards = [
  { id: 1, title: "Card 1", img: "" },
  { id: 2, title: "Card 2", img: "" },
  { id: 3, title: "Card 3", img: "" },
  { id: 4, title: "Card 4", img: "" },
  { id: 5, title: "Card 5", img: "" },
  { id: 6, title: "Card 6", img: "" },
];



function EventCard() {
  return (
    <div className='flex justify-start space-x-6 items-start w-[900px] h-[250px] border border-gray-400 rounded-md shadow-md'>
    
                <div className=' w-[300px] h-[250px] '>
                    <img src={eventcardimage} alt="SignIn" className="w-full h-full object-cover  rounded-l-md" />
                </div>
                <div className="flex flex-col pt-6 w-full p-6">

                    <div className="flex justify-between">
                        <p className='mb-3'>Startup Name : ThechArenna</p>
                        <p className='mb-3'>01/02/2026</p>

                    </div>

                     <p className='mb-3'>Creator : Hamza Elgarrai</p>

                    <p className='max-w-[600px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div className="flex w-full justify-end"><button className='bg-[#8C58EC] w-24 h-10 rounded-md text-white'>Enroll</button></div>

                    
                </div>
    
    
            </div>
  )
}

export default EventCard