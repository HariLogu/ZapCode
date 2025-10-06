import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { timeFormat } from "../../utils/Utils";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const params = useParams();

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  });

  useEffect(() => {
    document.title = `${movie.title}`;
  });

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : null;
  return (
    <main className="container">
      <h1 className="text-red-400 text-xl mb-5">{movie.title}</h1>
      <div className="lg:flex md:flex gap-10">
        <div className="">
          <img src={image} alt="" className="w-180 rounded h-120" />
        </div>
        <div className="flex flex-col gap-5 mt-3">
          <h1 className="text-orange-500 font-medium">{movie.title}</h1>
          <p className="text-sm text-balance text-neutral-500">
            {movie.overview}
          </p>
          {/* genre */}
          {movie.genres ? (
            <div className="flex gap-2">
              {movie.genres.map((i) => (
                <p
                  key={i.id}
                  className="bg-red-600 w-fit text-xs p-1 capitalize rounded-lg"
                >
                  {i.name}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}

          {/* rating */}
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <Star className="size-4" fill="yellow" strokeWidth={0} />
              <p className="text-sm">{movie.vote_average} |</p>
            </div>
            <div className="flex gap-1 items-center">
              <Users className="size-4" fill="blue" strokeWidth={0} />
              <p className="text-sm">{movie.vote_count} reviews</p>
            </div>
          </div>
          {/* table */}
          <table className="w-70">
            <tbody>
              <tr className="">
                <th className="text-left capitalize font-medium">runtime</th>
                <td className="">{timeFormat(movie.runtime)}</td>
              </tr>
              <tr>
                <th className="text-left capitalize font-medium">popularity</th>
                <td>{movie.popularity }</td> 
              </tr>
              <tr>
                <th className="text-left capitalize font-medium">budget</th>
                <td>{movie.budget }</td> 
              </tr>
              <tr>
                <th className="text-left capitalize font-medium">revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th className="capitalize font-medium text-left">release date</th>
                <td>{movie.release_date}</td>
              </tr>
  
                
                
            </tbody>
          </table>
          {/* imdb link */}
          <div>
            <Link
              to={`https://www.imdb.com/title/${movie.imdb_id}`}
              className="bg-yellow-500 text-black capitalize w-fit p-1 text-xs rounded-lg font-medium"
            >
              view in <span className="uppercase">imdb</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
