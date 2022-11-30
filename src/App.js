import { useState } from "react";
import { getMovieList } from "./api/utils";
import MovieList from "./components/MovieList";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const findShow = async (tvShow) => {
    console.log(tvShow)
  }

  const findMovie = async (movieTitle) => {
    if(!movieTitle || movieTitle === '') { 
      alert("You have to enter in a movie title")
      return
    }
    setIsLoading(true);
    const movies = await getMovieList(movieTitle);
    setData(movies);
    setIsLoading(false)
  }
  
  const movieList = data;

  return (
    <div>
      <Header />
      <SearchInput getMovieTitle={findMovie} getTvShow={findShow}/>
      {isLoading ? <h4>...LOADING</h4> : <MovieList searchResults={movieList} />}
    </div>
  );
}

export default App;
