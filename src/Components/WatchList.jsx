import React from "react";
import { useMoviesContext } from "../Context/context";
import WatchCard from "./watchCard";

const WatchList = () => {
  const moviesContext = useMoviesContext();
  return (
    <div className="container px-10 pt-8">
      <div className=" flex justify-between">
        <div className=" text-3xl font-bold">My Watchlist</div>
        <div className="  bg-green-400 px-3 py-1 text-white rounded-3xl">
          {moviesContext.watchlist.length > 1
            ? `${moviesContext.watchlist.length} movies`
            : `${moviesContext.watchlist.length} movie`}{" "}
        </div>
      </div>
      <div>
        {moviesContext.watchlist.length ? (
          <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3 w-5/6 m-auto sm:w-auto">
            {moviesContext.watchlist.map((ele, ind) => (
              <WatchCard props={ele} key={ind} work="watchlist" />
            ))}
          </div>
        ) : (
          <div className=" mt-14 w-fit m-auto text-zinc-400 font-bold text-5xl">
            NO Movies in your list,add some!
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchList;
