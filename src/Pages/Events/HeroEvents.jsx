import React from 'react'

import Eventimage from '../../assets/Images/EventHero.png'
import SearchBarEvent from './SearchBarEvent'

function HeroEvents() {
    return (
        <section className='bg-[#F8F7FC]  w-full min-h-screen -mt-18 flex flex-col items-center justify-center pt-20'>

            <div className='max-w-[1050px] mx-auto flex w-full justify-between   '>

                <h1 className='text-4xl font-bold z-50'>Discover Upcoming Tech Events</h1>
                <div className=' w-[320px] h-[250px] '><img src={Eventimage} alt="SignIn" className="w-full h-full object-cover rounded-md shadow-md " /></div>

            </div>

            <div className="max-w-[1050px] mx-auto flex flex-col w-full justify-between items-start space-y-4 -mt-44 mb-22">
                <p className='text-[#374151] mb-10 max-w-[500px]'>Join Morocco’s leading startups, investors, and innovators in our upcoming events and networking sessions.</p>
                <button className='bg-[#0D9488] w-36 h-11 text-white text-[13px] rounded-sm'>Publish Your Startup</button>

            </div>

            <SearchBarEvent />

        </section>
    )
}

export default HeroEvents