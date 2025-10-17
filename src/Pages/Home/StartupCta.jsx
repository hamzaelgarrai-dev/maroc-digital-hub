import React from 'react'
import event from '../../assets/Images/eventCta.png'
import PublishButton from '../../components/buttons/PublishStartupBtn'

function StartupCta() {
    return (
        <section className='bg-[#C7B5F4] w-full h-[450px] flex flex-col items-center justify-start'>

            <div className='max-w-[1050px] mx-auto flex w-full justify-between pt-28  '>

                <h1 className='text-6xl font-bold z-50 max-w-[650px]'>Create your Startup to lunch your first event</h1>
                <div className=' w-[250px] h-[200px] '><img src={event} alt="SignIn" className="w-full h-full object-cover rotate-20 -ml-52" /></div>

            </div>

            <div className="max-w-[1050px] mx-auto flex flex-col w-full justify-between items-start space-y-4 -mt-12 ">
                <p className='text-[#374151] mb-4'>Increase your visibility and connect with investors & partners.</p>
                <PublishButton/>
            </div>

        </section>
    )
}

export default StartupCta