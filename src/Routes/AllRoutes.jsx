import { Routes, Route } from "react-router-dom";
import { MovieList,MovieDetails,Search } from "../Pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList title1="Guide for Great Movies"  apiPath="movie/now_playing"/>}  />
        <Route path="/movies/top" element={<MovieList title1="Top Rated Movies" apiPath="movie/top_rated"/>}  />
        <Route path="/movies/popular" element={<MovieList title1="Popular Movies" apiPath="movie/popular"/>}  />
        <Route path="/movies/upcoming" element={<MovieList title1="Upcoming Movies" apiPath="movie/upcoming"/>}  />
        <Route path="movie/:id" element={<MovieDetails/>} />
        <Route path="search" element={<Search apiPath="search/movie"/>} />
      </Routes>
    </>
  );
};
