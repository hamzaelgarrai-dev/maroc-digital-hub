import React from 'react'



function StartupList() {
const cards = [
  { id: 1, title: "Card 1", img: "" },
  { id: 2, title: "Card 2", img: "" },
  { id: 3, title: "Card 3", img: "" },
  { id: 4, title: "Card 4", img: "" },
  { id: 5, title: "Card 5", img: "" },
  { id: 6, title: "Card 6", img: "" },
];
  return (
    <section className='bg-[#F8F7FC] w-full h-[800px] flex flex-col items-center justify-start '>

      <div className='max-w-[1050px] mx-auto flex w-full justify-between mb-12'> 

        

          <h3 className='font-medium text-[#374151] text-lg'>Startup List</h3>
          <div>1</div>
        
      
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-[1050px]">
         {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200"
          >
           
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />

            
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StartupList