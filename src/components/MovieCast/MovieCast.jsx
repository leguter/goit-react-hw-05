import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
        console.log(response);
        setMovieCasts(response.cast)
      }
      getMovies();
    }, [movieId]);
  return (
    <ul>
          {movieCasts.map((movieCast) => {
          console.log(movieCasts)
        return (
          <li key={movieCast.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movieCast.profile_path}`}
              alt={movieCast.character}
            />
            <h2>{movieCast.character}</h2>
            <p></p>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieCast