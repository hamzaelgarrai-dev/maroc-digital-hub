import React from 'react'

function CarouselStartup() {

    const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
  { id: 5, text: "Card 5" },
  { id: 6, text: "Card 6" },
  { id: 7, text: "Card 7" },
  { id: 8, text: "Card 8" },
];
  return (

    <section className='bg-[#F8F7FC] w-full h-[500px] pt-10'>
        <h2 className='text-center text-xl text-[#374151] mb-14'>Explore Recent Startups</h2>

       <div className="flex w-max animate-scroll group">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-none w-64 h-60 mx-4 flex items-center justify-center 
                       bg-white shadow-lg rounded-2xl text-lg font-semibold group-hover:pause"
          >
            {card.text}
          </div>
        ))}

        
        {cards.map((card, index) => (
          <div
            key={`dup-${index}`}
            className="flex-none w-64 h-60 mx-4 flex items-center justify-center 
                       bg-white shadow-lg rounded-2xl text-lg font-semibold group-hover:pause"
          >
            {card.text}
          </div>
        ))}
      </div>



    </section>

  )
}

export default CarouselStartup