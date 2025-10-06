import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Card = ({movie}) => {
  const {id,poster_path,overview,title,vote_average,vote_count}=movie;
  const [isExpanded,setIsExpanded]=useState(false);

  const toggle=(()=>{
    setIsExpanded(!isExpanded);
  })

  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:"";
  return (
    
      <Link to={`/movie/${movie.id}`}>
        <div className="cursor-pointer hover:shadow-md hover:shadow-orange-400 mt-5 p-2 hover:scale-103 transition bg-neutral-800/80 rounded mr-5">
        <div className="flex justify-center" title={movie.title}>
          <img src={image} alt="" className="rounded object-cover" />
        </div>
        <div className="mx-5 my-3 flex flex-col gap-1">
          <h1 className="capitalize text-orange-500 text-[18px]">{movie.title}</h1>
          <p className="text-sm text-neutral-500">{isExpanded?movie.overview:movie.overview.slice(0,100)+(movie.overview.length>5?"...":"")}</p>
          <div className="flex lg:text-sm md:text-[12px] text-[9px] mt-2 justify-between">
            <Link
              onClick={toggle}
              className="capitalize border-orange-400 border  hover:bg-orange-500 px-2 py-1 rounded"
            >
              read more
            </Link>
            <div className="flex items-center gap-1">
              <Star fill="yellow" strokeWidth={0} className="size-4" />
              <p className=" text-neutral-500">
                {movie.vote_average} | {movie.vote_count} Reviews
              </p>
            </div>
          </div>
        </div>
        </div>
      </Link>
    
  );
};
