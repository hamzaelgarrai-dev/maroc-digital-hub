import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnrollEventBtn({ event }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    const authData = localStorage.getItem("auth");

    if (!authData) {
      navigate("/SignIn");
      return;
    }

    const parsedAuth = JSON.parse(authData);
    const userId =
       parsedAuth?.user?.id ||  null;

    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    try {
      const alreadyJoined = event.participants.includes(userId);
      if (alreadyJoined) {
        alert("You are already enrolled in this event!");
        return;
      }

      // Update participants array
      const updatedEvent = {
        ...event,
        participants: [...event.participants, userId],
      };

      await axios.put(`http://localhost:5000/events/${event.id}`, updatedEvent);

      alert("Successfully enrolled!");
    } catch (err) {
      console.error("Error enrolling:", err);
      alert("Error enrolling in event");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#8C58EC] w-22 h-9 rounded-md text-white cursor-pointer"
    >
      Enroll
    </button>
  );
}

export default EnrollEventBtn;
