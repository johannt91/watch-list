import { useState } from "react";

const SearchInput = ({getMovieTitle, getTvShow}) => {
  const [searchInput, setSearchInput] = useState("");
  const [mediaType, setMediaType] = useState("movie");

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const selectHandler = (e) => {
    setMediaType(e.target.value);
  }

  return (
    <div>
        <select onChange={selectHandler}>
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
        </select>
        
        <input
          type="text"
          placeholder="Search"
          onChange={inputHandler}
          value={searchInput}
        />
        <button
          onClick={() => {
            if(mediaType !== "movie") {
             getTvShow(searchInput)
            } else {
              getMovieTitle(searchInput)
            }
            setSearchInput("");
          }}
        >
          Search
        </button>
    </div>
  );
};

export default SearchInput;
