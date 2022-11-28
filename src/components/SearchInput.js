import { useState } from "react";

const SearchInput = ({getMovieTitle}) => {
  // searchInput = 'something else'
  const [searchInput, setSearchInput] = useState("");
  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
        <input
          type={"text"}
          placeholder={"Search"}
          onChange={inputHandler}
          value={searchInput}
        />
        <button
          onClick={() => {
            getMovieTitle(searchInput)
            setSearchInput("");
          }}
        >
          Search
        </button>
    </div>
  );
};

export default SearchInput;
