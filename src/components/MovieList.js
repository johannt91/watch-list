import Card from "./Card";

const MovieList = ({ searchResults }) => {
let results = searchResults.map((movieResult, i ) => movieResult.id)
console.log(results)
  return (
    <div>
      {searchResults.map((movieResult) => <Card movie = {movieResult} key={movieResult.id} />)}
    </div>
  )
}

export default MovieList