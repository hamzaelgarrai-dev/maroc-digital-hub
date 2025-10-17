import React from "react";
import { useNavigate } from "react-router-dom";

function PublishButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    
    const authData = localStorage.getItem("auth");

    if (!authData) {
      
    //   alert("You must be logged in to publish a startup!");
      navigate("/SignIn");
      return;
    }

    
    navigate("/AddStartup");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#0D9488] w-36 h-11 text-white text-[13px] cursor-pointer rounded-sm hover:bg-[#0B7A6F] transition"
    >
      Publish Startup
    </button>
  );
}

export default PublishButton;
