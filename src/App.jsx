import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage= lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage =  lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews= lazy(() => import( "./components/MovieReviews/MovieReviews"));
const Navigation= lazy(() => import("./components/Navigation/Navigation"));
const MoviesPage= lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
