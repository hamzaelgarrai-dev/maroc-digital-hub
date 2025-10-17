import React from "react";
import { useSelector } from "react-redux";
import EventCard from "./EventCard";

function EventsList() {
  const { events, loading, error, searchTerm } = useSelector(
    (state) => state.events
  );

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()),
    
  );

  return (
    <section className="bg-[#F8F7FC] w-full min-h-screen flex flex-col items-center justify-start pt-6">
      <div className="mb-12 flex flex-col space-y-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              title={event.title}
              location={event.location}
              image={event.image}
              date={event.date}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No events found.</p>
        )}
      </div>
    </section>
  );
}

export default EventsList;
