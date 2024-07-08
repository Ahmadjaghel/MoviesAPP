import React from "react";
import { useMoviesContext } from "../Context/context";
import WatchCard from "./watchCard";
const Watched = () => {
  const moviesContext = useMoviesContext();
  return (
    <div className="container px-10 pt-8">
      <div className=" flex justify-between">
        <div className=" text-3xl font-bold">My Watched</div>
        <div className="  bg-green-400 px-3 py-1 text-white rounded-3xl">
          {moviesContext.watched.length > 1
            ? `${moviesContext.watched.length} movies`
            : `${moviesContext.watched.length} movie`}
        </div>
      </div>
      <div>
        {moviesContext.watched.length ? (
          <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3 w-5/6 m-auto sm:w-auto">
            {moviesContext.watched.map((ele, ind) => (
              <WatchCard props={ele} key={ind} work="watched" />
            ))}
          </div>
        ) : (
          <div className=" mt-14 w-fit m-auto text-zinc-400 font-bold text-5xl">
            NO Movies You Watched!
          </div>
        )}
      </div>
    </div>
  );
};

export default Watched;
