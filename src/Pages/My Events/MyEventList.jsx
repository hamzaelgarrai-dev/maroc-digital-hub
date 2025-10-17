import React from 'react';
import MyEventCard from './MyEventCard';
import { useSelector } from 'react-redux';

function MyEventList() {
  const { events, loading, error } = useSelector((state) => state.events);

  
 const storedUser = localStorage.getItem('auth');
const auth = storedUser ? JSON.parse(storedUser) : null;
const userId = auth?.id || auth?.user?.id;

const userEvents = events.filter(event =>
  event.participants.some(
    participantId => participantId.toString() === userId.toString()
  )
);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
 



  return (
    <section className="bg-[#F8F7FC] w-full min-h-screen flex flex-col items-center justify-start pt-2">
      <div className="grid grid-cols-3 gap-6 max-w-[1050px] mb-22">
        {userEvents.length > 0 ? (
          userEvents.map(event => (
            <MyEventCard
              key={event.id}
              title={event.title}
              location={event.location}
              image={event.image}
              date={event.date}
            />
          ))
        ) : (
          <p className=''>You are not enrolled in any events yet.</p>
        )}
      </div>
    </section>
  );
}

export default MyEventList;
