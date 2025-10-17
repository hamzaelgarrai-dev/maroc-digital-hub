
import Eventimage from '../../assets/Images/EventHero.png'
import SearchBarEvent from './SearchBarEvent'
import PublishButton from '../../components/buttons/PublishStartupBtn'

function HeroEvents() {
    return (
        <section className='bg-[#F8F7FC]  w-full h-[700px] -mt-18 flex flex-col items-center justify-center pt-22'>

            <div className='max-w-[1050px] mx-auto flex w-full justify-between mb-16   '>
                <div className="">
                    <h1 className='text-4xl font-bold z-50'>Discover Upcoming Tech Events</h1>
                    <p className='text-[#374151] mb-10 max-w-[500px]'>Join Morocco’s leading startups, investors, and innovators in our upcoming events and networking sessions.</p>

                    <PublishButton />
                </div>

                <div className=' w-[320px] h-[250px] '><img src={Eventimage} alt="SignIn" className="w-full h-full object-cover rounded-md shadow-md " /></div>



            </div>



            <SearchBarEvent />

        </section>
    )
}

export default HeroEvents