import React from 'react'
import {Search} from 'lucide-react'

function SearchBarEvent() {
  return (
    <section className='bg-[#F8F7FC]  w-full  flex flex-col items-center justify-center'>

        <div className='relative max-w-[1050px] mx-auto flex w-full justify-center '>

           

            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' /><input type="text" placeholder='Search an Event' className=' pl-10 pr-4 text-[14px] w-full h-12 border border-gray-300 rounded-md shadow-md ' />

        </div>

    </section>
  )
}

export default SearchBarEvent