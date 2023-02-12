import { useState } from "react";

const SearchImage = ({ searchText }) => {
  const [text, setText] = useState("");

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={(e) => {
        e.preventDefault()
        searchText(text)
      }} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-gray-800 py-2">
          <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 font-semibold leading-tight focus:outline-none" placeholder="Search Image" type="text" />
          <button type="submit" className="bg-green-500 px-2 py-1 rounded text-white font-semibold flex-shrink-0 hover:bg-green-400">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;