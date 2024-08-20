import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import css from './MovieDetailsPage.module.css'
const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    async function getMovies() {
      const options = {
        headers: {
          // Замість api_read_access_token вставте свій токен
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjZkNGU1ZTZmODYzN2RmNWM2YmYxZjgwZmRlZmIxMyIsIm5iZiI6MTcyMzkwNjI1NC40MjY3ODEsInN1YiI6IjY2YzBiMWI0MmVkZDU1YjRlZTkyMTgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFOO9NBVThnrE61EiyMKXRWS7W4VDKoWe-XvNrh3sU0",
        },
      };
      const url =
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
      const response = await axios.get(url, options);
      setMovieData(response.data)
         
    }
    getMovies();
  }, [movieId]);
  return (
    <div className={css.container}>
      <Link to="/">
        <button type="button" className={css.btnBack}>
          Back to home
        </button>
      </Link>

      <img
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        width={400}
      />
      <div className={css.details}>
        <h1>{movieData.title}</h1>
        <p>User score:{movieData.vote_count}%</p>
        <h2>Overview</h2>
        <p>{movieData.overview}</p>
        <h2>Genres</h2>

        <p>{movieData?.genres?.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className={css.links}>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          reviews
        </Link>
      </div>
      <div className={css.linkDetails}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
