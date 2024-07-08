import { useState, useEffect } from "react";
import React from "react";
import AddItems from "./AddItems";
import axios from "axios";
const Add = () => {
  const [searcValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searcValue}&apikey=48dc823e`)
      .then((respons) => {
        if (respons.data.Search) setData(respons.data.Search);
        // console.log(respons.data.Search);
      })
      .catch((error) => console.log(error));
  }, [searcValue]);
  return (
    <div className="container px-10 pt-8 w-full sm:w-4/6 lg:w-1/2">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for a movies"
          className="bg-sky-900 text-white outline-none px-1 rounded-md w-full  h-9 shadow-sm"
          value={searcValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div>
        {searcValue
          ? data.map((ele, ind) => <AddItems {...ele} key={ind} />)
          : null}
      </div>
    </div>
  );
};

export default Add;
