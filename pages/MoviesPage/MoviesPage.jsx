import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import FormSearchMovies from "../../src/components/FormSearchMovies/FormSearchMovies";
import MovieList from "../../src/components/MovieList/MovieList";
const MoviesPage = () => {
  const [searchingMovieData, setSearchingMovieData] = useState([])
  const [searchParams,setSearchParams] = useSearchParams({})

  const onSearch = value => {
setSearchParams({ query: value.searchMovie });
  }
  const queryValue = searchParams.get('query')
  useEffect(() => {
     if(!queryValue) return
     async function getMovies() {
       const options = {
         headers: {
           Authorization:
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjZkNGU1ZTZmODYzN2RmNWM2YmYxZjgwZmRlZmIxMyIsIm5iZiI6MTcyMzkwNjI1NC40MjY3ODEsInN1YiI6IjY2YzBiMWI0MmVkZDU1YjRlZTkyMTgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OFOO9NBVThnrE61EiyMKXRWS7W4VDKoWe-XvNrh3sU0",
         },
       };
       const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${queryValue}`;
       const response = await axios.get(url, options);
       console.log(response.data)
       setSearchingMovieData(response.data);
     }
     getMovies();
   }, [queryValue]);
    return (
      <div>
        <FormSearchMovies onSearch={onSearch} />
        <MovieList TrendingMovies={searchingMovieData} />
  </div>
  )
}

export default MoviesPage