import React from 'react'

import HeroBg from '../../assets/Images/NetworkingHero.webp'

function NetworkingHero() {
  return (
    <section className='w-full min-h-screen  -mt-18 flex flex-col items-center justify-center'>

        <div className='w-full h-full'><img src={HeroBg} alt="hero" className="w-full h-full object-cover" /></div>

    </section>
  )
}

export default NetworkingHero