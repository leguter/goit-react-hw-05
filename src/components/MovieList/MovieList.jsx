import { Link } from "react-router-dom";
const MovieList = ({ TrendingMovies }) => {
  return (
    <ul>
          {TrendingMovies.map((TrendingMovie) => {
              return (
                <li key={TrendingMovie.id}>
                  <Link to={`/movies/${TrendingMovie.id}`}>
                    {" "}
                    <p>{TrendingMovie.title}</p>
                  </Link>
                </li>
              );
        
      })}
    </ul>
  );
};

export default MovieList