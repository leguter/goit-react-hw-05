import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from './MovieCast.module.css'
const MovieCast = () => {
    const [movieCasts, setMovieCasts] = useState([])
    const { movieId } = useParams();
    console.log(movieId)
    useEffect(() => {
      async function getMovies() {
        const options = {
          headers: {
            // Замість api_read_access_token вставте свій токен
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjZkNGU1ZTZmODYzN2RmNWM2YmYxZjgwZmRlZmIxMyIsIm5iZiI6MTcyMzkwNjI1NC40MjY3ODEsInN1YiI6IjY2YzBiMWI0MmVkZDU1YjRlZTkyMTgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFOO9NBVThnrE61EiyMKXRWS7W4VDKoWe-XvNrh3sU0",
          },
        };
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
        const response = await axios.get(url, options);
        setMovieCasts(response.data.cast)
      }
      getMovies();
    }, [movieId]);
  const defaultImg = 'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster'
  return (
    <ul className={css.list}>
      {movieCasts.map((movieCast) => {
        return (
          <li key={movieCast.id}>
            <img
              src={
                movieCast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${movieCast.profile_path}`
                  : defaultImg
              }
              width={300}
              alt="poster"
            />
            <h4>{movieCast.character}</h4>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieCast