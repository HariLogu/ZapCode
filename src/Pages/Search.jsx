import { useSearchParams } from "react-router-dom"
import { Card } from "../Components/Card"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryterm=searchParams.get("q");
  const {data:movies}=useFetch(apiPath,queryterm)
  useEffect(()=>{
    document.title=`Search result for ${queryterm}`;
  })
  return 
  (
    <main className="container">
      <h5>{movies.length==0?`No results found for ${queryterm}`:`Resuts for ${queryterm}`}</h5>
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
  )
}