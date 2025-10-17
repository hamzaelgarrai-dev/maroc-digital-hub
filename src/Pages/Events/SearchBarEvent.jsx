import React from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../Slices/eventsSlice";
function SearchBarEvent() {
 const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.events.searchTerm);

  return (
    <section className="bg-[#F8F7FC] w-full flex flex-col items-center justify-center py-6">
      <div className="relative max-w-[1050px] mx-auto flex w-full justify-center">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search an Event"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="pl-10 pr-4 text-[14px] w-full h-12 border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-[#0D9488]"
        />
      </div>
    </section>
  );
}

export default SearchBarEvent