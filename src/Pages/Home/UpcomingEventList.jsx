import React from 'react'
import UpcomingEventCard from './UpcomingEventCard';
import { useSelector } from "react-redux"

function UpcomingEventList() {

 const { events, loading, error } = useSelector((state) => state.events);

  if (loading) return <p>Loading startups...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <section className='bg-[#F8F7FC] w-full min-h-screen flex flex-col items-center justify-start pt-12 pb-24'>

         <h2 className='text-center text-xl text-[#374151] mb-14'>Upcoming Events</h2>
      <div className="grid grid-cols-3 gap-6 max-w-[1050px]">
         {events.map((event) => (
          <UpcomingEventCard key={event.id} title={event.title} location={event.location} image={event.image} date={event.date}/>
        ))}
      </div>

    </section>
  )
}

export default UpcomingEventList