import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
