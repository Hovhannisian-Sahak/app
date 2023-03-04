import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { GoSearch } from "react-icons/go";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="flex bg-gray-700 py-0 px-40 items-center justify-between h-18">
      <div className="text-white font-black text-xl">
        <Link to="/">Movie App</Link>
      </div>
      <div className="w-1/2 flex justify-center">
        <form className="flex justify-center w-4/6" onSubmit={handleSearch}>
          <input
            className="text-xm w-full h-10 py-1.25 pl-1 outline-none"
            type="text"
            value={term}
            placeholder="Search movies or shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="py-0 px-2 cursor-pointer text-sm" type="submit">
            <GoSearch />
          </button>
        </form>
      </div>

      <div className="h-9.5 w-9.5">
        <img className="h-9 w-9" src={user} alt="user" />
      </div>
    </div>
  );
}
