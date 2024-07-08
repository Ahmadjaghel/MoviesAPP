import React from "react";
import BtnItems from "./btnItems";
import { useMoviesContext } from "../Context/context";
const AddItems = (props) => {
  const moviesContext = useMoviesContext();
  const storedMovie = moviesContext.watchlist.find(
    (ele) => ele.imdbID == props.imdbID
  );
  const storedMovieWatched = moviesContext.watched.find(
    (ele) => ele.imdbID == props.imdbID
  );
  const disWatchlist = storedMovie ? true : storedMovieWatched ? true : false;
  return (
    <div className=" mt-5 flex gap-3  flex-row w-full  mx-auto shadow-md p-2">
      <div className=" ">
        {props.Poster ? (
          <img
            className=" w-10 sm:w-28 h-full min-w-[60px]"
            src={props.Poster}
            alt={props.Title}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <h3 className=" font-semibold sm:mt-2">{props.Title}</h3>
        <p className=" text-zinc-600">{props.Year}</p>
        <div className=" sm:mt-14 flex gap-3">
          <BtnItems work="watchlist" movie={props} storedMovie={disWatchlist} />
          <BtnItems
            work="watched"
            movie={props}
            storedMovie={storedMovieWatched}
          />
        </div>
      </div>
    </div>
  );
};

export default AddItems;
