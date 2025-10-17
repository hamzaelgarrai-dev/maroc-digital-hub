import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStartup } from "../../Slices/startupSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStartup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      
      const authData = JSON.parse(localStorage.getItem("auth"));
      const userId = authData?.user?.id;

      
      let uploadedImageUrl = "";
      if (data.imageFile && data.imageFile[0]) {
        const formData = new FormData();
        formData.append("file", data.imageFile[0]);
        formData.append("upload_preset", "artconnect"); 

        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dl7gjsjpa/image/upload", 
          formData
        );
        uploadedImageUrl = uploadRes.data.secure_url;
      }

      
      const newStartup = {
        id: Date.now(),
        name: data.name,
        sector: data.sector,
        description: data.description,
        image:
          uploadedImageUrl || "src/assets/Images/startupplaceholder.png",
        creatorId: userId,
        createdAt: new Date().toISOString(),
      };

      
      const res = await axios.post("http://localhost:5000/startups", newStartup);
      dispatch(addStartup(res.data));

      
      await axios.patch(`http://localhost:5000/users/${userId}`, {
        role: "startup",
      });

      
      const updatedAuth = {
        ...authData,
        user: { ...authData.user, role: "startup" },
      };
      localStorage.setItem("auth", JSON.stringify(updatedAuth));

      alert("Startup added successfully!");
      reset();
      navigate("/");

    } catch (error) {
      console.error("Error adding startup:", error);
      alert("Failed to add startup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8F7FC] w-full min-h-screen flex flex-col items-center pt-12">
      <div className="max-w-[800px] w-full bg-white shadow-lg rounded-xl p-8 border border-gray-300">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add a New Startup
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Startup Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Startup Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#0D9488]"
              placeholder="Enter startup name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Sector Dropdown */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Sector
            </label>
            <select
              {...register("sector", { required: "Sector is required" })}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#0D9488] bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select a sector
              </option>
              <option value="AI">AI</option>
              <option value="Fintech">Fintech</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Tourisme">Tourisme</option>
              <option value="Energie">Energie</option>
              <option value="Education">Education</option>
            </select>
            {errors.sector && (
              <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full border border-gray-300 rounded-md p-3 resize-none focus:ring-2 focus:ring-[#0D9488]"
              rows="4"
              placeholder="Describe your startup..."
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload an Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("imageFile")}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-medium ${
              loading ? "bg-gray-400" : "bg-[#0D9488] hover:bg-[#0b7a72]"
            }`}
          >
            {loading ? "Adding..." : "Add Startup"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddStartup;
