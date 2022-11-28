import Placeholder from "../assets/images/placeholder.jpg"

const Card = ({movie}) => {

    let baseURL = "https://image.tmdb.org/t/p/w300/";

  return (
        <div>
            <img src={movie.poster_path !== null ? baseURL + movie.poster_path : Placeholder} alt={`Movie poster for ${movie.title}`}/>
            <h4>{movie.title}</h4>
        </div>
  );
};

export default Card;