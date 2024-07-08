import React from "react";
import { useMoviesContext } from "../Context/context";
import * as actions from "../Context/ActionType";
const btnCard = ({ work, movie }) => {
  const moviesContext = useMoviesContext();

  return (
    <div>
      {work == "watched" ? (
        <div className="flex flex-col gap-2">
          <button
            className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600 font-bold text-[10px] sm:text-sm opacity-90 disabled:bg-green-300  disabled:opacity-50"
            onClick={() =>
              moviesContext.MoviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            ADD TO WATCHLIST
          </button>
          <button
            className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600 font-bold text-[10px] sm:text-sm opacity-90 disabled:bg-green-300  disabled:opacity-50"
            onClick={() =>
              moviesContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie,
              })
            }
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <button
            className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600 font-bold text-[10px] sm:text-sm opacity-90 disabled:bg-green-300  disabled:opacity-50"
            onClick={() =>
              moviesContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            ADD TO WATCHED
          </button>
          <button
            className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600 font-bold text-[10px] sm:text-sm opacity-90 disabled:bg-green-300  disabled:opacity-50"
            onClick={() =>
              moviesContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie,
              })
            }
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default btnCard;
