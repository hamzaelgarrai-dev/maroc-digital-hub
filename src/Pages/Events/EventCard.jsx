import React from 'react'
import EnrollEventBtn from '../../components/buttons/EnrollEventBtn'

function EventCard({image,title,location,date,event}) {
  return (
    <div className='flex justify-start space-x-6 items-start w-[900px] h-[250px] border border-gray-400 bg-white rounded-md shadow-md'>
    
                <div className=' w-[300px] h-[250px] '>
                    <img src={image} alt={title} className="w-full h-full object-cover  rounded-l-md" />
                </div>
                <div className="flex flex-col pt-6 w-full p-6">

                    <div className="flex justify-between">
                        <p className='mb-3'>Startup Name : {title}</p>
                        <p className='mb-3'>{date}</p>

                    </div>

                     <p className='mb-3'>{location}</p>

                    <p className='max-w-[600px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div className="flex w-full justify-end"><EnrollEventBtn event={event}/></div>

                    
                </div>
    
    
            </div>
  )
}

export default EventCard