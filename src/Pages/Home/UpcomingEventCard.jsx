import React from 'react'
import EnrollEventBtn from '../../components/buttons/EnrollEventBtn'

function UpcomingEventCard({image,title,location,date}) {
  return (
   <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between">

        <div className="p-4 text-start">
        <h3 className=" font-medium mb-2">{title}</h3>
        <p>{location}</p>
        <p>{date}</p>
        
      </div>
      <div className="p-4 pt-16 text-end">
        <EnrollEventBtn/>
      </div>
      </div>
      
    </div>
  )
}

export default UpcomingEventCard