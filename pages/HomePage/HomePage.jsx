import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../src/components/MovieList/MovieList";
const HomePage = () => {
  const [TrendingMovies, setTrendingMovies]= useState([])
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
       "https://api.themoviedb.org/3/trending/movie/day";
   const response = await axios.get(url, options);
   console.log(response.data.results);
   setTrendingMovies(response.data.results)
 }
  getMovies()
  },[])

 
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList TrendingMovies={TrendingMovies} />
    </div>
  );
}

export default HomePage