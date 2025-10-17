import React from 'react'

function StartupCard({title,image}) {
  return (
     <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  )
}

export default StartupCard