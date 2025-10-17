import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import sbg from "../../assets/Images/image.png";


function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, password, confirmPassword } = formData;

    // ✅ Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      
      const newUser = {
        name,
        email,
        password,
        role: "user",
      };

      
      const res = await axios.post("http://localhost:5000/users", newUser);

      
      const token = "token-" + Date.now();
      const userData = {
        token,
        user: res.data,
      };
      localStorage.setItem("auth", JSON.stringify(userData));

      // ✅ Redirect and reload to refresh Navbar
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Error registering user:", err);
      setError("Registration failed. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#C7B5F4] w-full h-[900px] -mt-18 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-3 rounded-2xl shadow-lg w-[700px] flex justify-between items-start"
      >
        {/* Left image */}
        <div className="w-[320px] h-[540px]">
          <img
            src={sbg}
            alt="SignIn"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right form */}
        <div className="flex flex-col justify-between p-4">
          <h3 className="font-semibold mb-10">Maroc DH</h3>

          <p className="text-xs text-[#A9A9A9] mb-6">
            Hey, Welcome back to your Place
          </p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6"
          />

          {error && (
            <p className="text-red-500 text-xs mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="bg-[#8C58EC] w-28 h-10 text-white rounded-md mb-6"
          >
            Sign Up
          </button>

          <p className="text-xs text-[#A9A9A9]">
            You have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#8C58EC] cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
