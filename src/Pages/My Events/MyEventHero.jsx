import React from 'react'
import SearchBarEvent from '../Events/SearchBarEvent'

function MyEventHero() {
  return (
    <section className='bg-[#F8F7FC]  w-full min-h-screen -mt-18 flex  items-center justify-start '>

            <div className='max-w-[1050px] mx-auto flex flex-col w-full justify-between   '>

                <h1 className='text-4xl font-bold mb-6 '>My Events</h1>

              <p className='text-[#374151] mb-10 max-w-[500px]'>Here are all the events you’ve registered for</p>
                <SearchBarEvent />
            </div>

            

        </section>
  )
}

export default MyEventHero