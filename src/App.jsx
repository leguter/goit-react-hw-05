import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies/:movieId"
          element={ <MovieDetailsPage />}
        />
      </Routes>
    </>
  );
}

export default App
