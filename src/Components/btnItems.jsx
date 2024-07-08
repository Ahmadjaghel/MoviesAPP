import React from "react";
import { useMoviesContext } from "../Context/context";
import {
  ADD_MOVIE_TO_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
} from "../Context/ActionType";
const btnItems = ({ work, movie, storedMovie }) => {
  const moviesContext = useMoviesContext();
  return (
    <>
      <button
        className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600 font-bold text-[10px] sm:text-sm opacity-90 disabled:bg-green-300  disabled:opacity-50"
        onClick={() =>
          moviesContext.MoviesDispatch({
            type:
              work == "watched" ? ADD_MOVIE_TO_WATCHED : ADD_MOVIE_TO_WATCHLIST,
            payload: movie,
          })
        }
        disabled={storedMovie}
      >
        {work == "watched" ? "ADD TO WATCHED" : "ADD TO WATCHLIST"}
      </button>
    </>
  );
};

export default btnItems;
