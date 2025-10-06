import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../Components";
import { cardInfo } from "../constants";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ title1, apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = title1;
  });
  return (
    <div>
      <main className="m">
        {/* intro */}
        {title1 === "Guide for Great Movies" ? (
          <div className="flex justify-center mb-5">
            <div className="w-full md:w-2/3 lg:w-2/3 bg-neutral-800/30 p-5 rounded border border-gray-600/40">
              <p className="text-orange-500 capitalize text-2xl">
                welcome to movie hunt
              </p>
              <p className="text-sm my-2 mb-5 text-neutral-400">
                Discover movies you'll love with personalized suggestions,
                curated collections, and quick searches - your guide to finding
                great films.
              </p>
              <NavLink
                to="/movies/upcoming"
                className=" bg-orange-500 p-1.5 rounded text-sm hover:scale-105"
              >
                Explore Now
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* label */}
        <p>{title1}</p>

        <div className="flex flex-wrap">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="w-full md:w-1/2 lg:w-1/3">
                <Card movie={movie} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
