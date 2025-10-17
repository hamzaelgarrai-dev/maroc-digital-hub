import React, { useState } from "react";
import { useSelector } from "react-redux";
import StartupCard from "./StartupCard";

function StartupList() {
  const { startups, loading, error } = useSelector((state) => state.startups);
  const [selectedSector, setSelectedSector] = useState("All");

  if (loading) return <p>Loading startups...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Filter startups by selected sector
  const filteredStartups =
    selectedSector === "All"
      ? startups
      : startups.filter((startup) => startup.sector === selectedSector);

  // Extract counts per sector dynamically
  const sectorCounts = startups.reduce((acc, startup) => {
    acc[startup.sector] = (acc[startup.sector] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="bg-[#F8F7FC] w-full min-h-[800px] flex flex-col items-center justify-start py-10">
      <div className="max-w-[1050px] mx-auto flex w-full justify-between items-center mb-10">
        <h3 className="font-medium text-[#374151] text-lg">Startup List</h3>

        <div className="flex border border-gray-400 rounded-md bg-white overflow-hidden">
          {/* “All” button */}
          <button
            className={`px-6 py-2 font-medium border-r border-gray-400 cursor-pointer ${
              selectedSector === "All"
                ? "bg-[#0D9488] text-white"
                : "text-gray-800 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedSector("All")}
          >
            All ({startups.length})
          </button>

          {/* Dynamic buttons for each sector */}
          {Object.keys(sectorCounts).map((sector) => (
            <button
              key={sector}
              className={`px-6 py-2 font-medium border-r border-gray-400 cursor-pointer ${
                selectedSector === sector
                  ? "bg-[#0D9488] text-white"
                  : "text-gray-800 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedSector(sector)}
            >
              {sector} : {sectorCounts[sector]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of startups */}
      <div className="grid grid-cols-4 gap-6 max-w-[1050px]">
        {filteredStartups.map((startup) => (
          <StartupCard key={startup.id} title={startup.name} image={startup.image} />
        ))}
      </div>
    </section>
  );
}

export default StartupList;
