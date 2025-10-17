import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMessage } from "../../Slices/messageSlice";
import PostMessageBtn from "../../components/buttons/PostMessageBtn";
import { useNavigate } from "react-router-dom";

function MessageForm() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const authData = localStorage.getItem("auth");
    if (!authData) {
      navigate("/SignIn");
      return;
    }

    if (!message.trim()) return alert("Message cannot be empty!");

    dispatch(postMessage(message));
    setMessage(""); 
  };

  return (
    <section className="bg-[#F8F7FC] w-full h-[400px] flex justify-center pt-12">
      <div className="max-w-[1050px] w-full flex flex-col justify-start items-start">
        <h2 className="text-3xl font-semibold mb-3">Networking Hub</h2>
        <p className="text-[#374151] mb-8">
          Join the conversation, connect with startups & investors.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            className="border border-black resize-none w-full rounded-md shadow-sm p-4 pt-6 mb-6 focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            rows="4"
            placeholder="What's on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <PostMessageBtn  />
        </form>
      </div>
    </section>
  );
}

export default MessageForm;
