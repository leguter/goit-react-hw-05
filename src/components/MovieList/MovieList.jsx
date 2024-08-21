import { Link, useLocation } from "react-router-dom";
import css from './MovieList.module.css'
const MovieList = ({ TrendingMovies }) => {
  const location = useLocation()
  return (
    <ul className={css.list}>
          {TrendingMovies.map((TrendingMovie) => {
              return (
                <li key={TrendingMovie.id}>
                  <Link state={{from: location}} to={`/movies/${TrendingMovie.id}`}>
                    <p>{TrendingMovie.title}</p>
                  </Link>
                </li>
              );
        
      })}
    </ul>
  );
};

export default MovieList