import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from './MovieReviews.module.css'
const MovieReviews = () => {
     const [movieReviews, setMovieReviews] = useState([]);
     const { movieId } = useParams();
     console.log(movieId);
     useEffect(() => {
       async function getMovies() {
         const options = {
           headers: {
             // Замість api_read_access_token вставте свій токен
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjZkNGU1ZTZmODYzN2RmNWM2YmYxZjgwZmRlZmIxMyIsIm5iZiI6MTcyMzkwNjI1NC40MjY3ODEsInN1YiI6IjY2YzBiMWI0MmVkZDU1YjRlZTkyMTgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFOO9NBVThnrE61EiyMKXRWS7W4VDKoWe-XvNrh3sU0",
           },
         };
         const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
           const response = await axios.get(url, options);
           console.log(response)
                setMovieReviews(response.data.results);
              
       }
       getMovies();
     }, [movieId]);
    return (
      <>
        {movieReviews.length > 0 ? (
          <ul className={css.list}>
            {movieReviews.map((movieReview) => {
              return (
                <li key={movieReview.id} className={css.listItem}>
                  <h2>Author: {movieReview.author}</h2>
                  <p>{movieReview.content}</p>
                  <p>Rating:{movieReview.author_details.rating}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>We dont have any reviews for this movie</h2>
        )}
      </>
    );
        
  
};

export default MovieReviews;
