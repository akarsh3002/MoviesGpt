import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form className="flex justify-between items-center gap-6 pt-24 pb-6 px-8 bg-black">
        <input
          type="text"
          className="p-3 w-full placeholder:text-gray-400 text-gray-200 bg-gray-900 rounded"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-transparent hover:bg-[#e60304] text-[#e60304] font-semibold hover:text-white py-2 px-4 border border-[#e60304] hover:border-transparent rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
