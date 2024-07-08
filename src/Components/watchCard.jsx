import React from "react";
import BtnCard from "./btnCard";
const watchCard = ({ props, work }) => {
  return (
    <div className=" mt-5 flex flex-col gap-1 shadow-md p-2 justify-between items-center">
      <div className=" w-full h-56">
        {props.Poster ? (
          <img className="h-full w-full" src={props.Poster} alt={props.Title} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-3 w-full">
        <h3 className=" font-semibold ">{props.Title}</h3>
        <p className=" text-zinc-600">{props.Year}</p>
        <div>
          <BtnCard work={work} movie={props} />
        </div>
      </div>
    </div>
  );
};

export default watchCard;
