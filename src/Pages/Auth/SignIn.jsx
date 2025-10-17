import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import sbg from "../../assets/Images/image.png";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      
      const res = await axios.get("http://localhost:5000/users");
      const users = res.data;

     
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      
      const token = "token-" + Date.now();
      const userData = {
        token,
        user,
      };

      localStorage.setItem("auth", JSON.stringify(userData));

      
      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

      
      window.location.reload();
    } catch (err) {
      console.error("Error signing in:", err);
      setError("Login failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#C7B5F4] w-full h-[900px] -mt-18 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-3 rounded-2xl shadow-lg w-[700px] flex justify-between items-start"
      >
        

        <div className="flex flex-col justify-between p-4">
          <h3 className="font-semibold mb-10">Welcome Back 👋</h3>
          <p className="text-xs text-[#A9A9A9] mb-6">
            Sign in to continue to Maroc DH
          </p>

          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="border border-[#A9A9A9] w-72 h-14 rounded-md p-4 text-xs mb-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#8C58EC] w-28 h-10 text-white rounded-md mb-6 hover:bg-[#7a4fd2] transition"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <p className="text-xs text-[#A9A9A9]">
            Don’t have an account?{" "}
            <span
              className="text-[#8C58EC] cursor-pointer"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </span>
          </p>
        </div>
        
        <div className="w-[320px] h-[540px]">
          <img
            src={sbg}
            alt="SignIn"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
