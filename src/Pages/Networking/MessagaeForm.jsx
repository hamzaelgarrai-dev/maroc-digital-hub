import React from 'react'

function MessagaeForm() {
  return (
    <section className='bg-[#F8F7FC] w-full h-[400px] flex justify-center pt-12 '>

        <div className=" max-w-[1050px] w-full flex flex-col justify-start items-start">
            <h2 className='text-3xl font-semibold mb-3' >Networking Hub</h2>
            <p className='text-[#374151] mb-8'>Join the conversation, connect with startups & investors.</p>
            <textarea className='border border-black resize-none w-full rounded-md shadow-sm p-4 pt-6 ' rows="4" placeholder="What's on your mind ?" name="" id=""></textarea>
        </div>

    </section>
  )
}

export default MessagaeForm