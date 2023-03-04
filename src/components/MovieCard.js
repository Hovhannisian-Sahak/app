import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  return (
    <div className="bg-gray-700 cursor-pointer hover:scale-105 transition duration-500 h-full min-h-112.5 m-2.5">
      <Link to={`/movie/${data.imdbID}`}>
        <div>
          <div className="h-75">
            <img className="w-96 h-96" src={data.Poster} alt={data.Title} />
          </div>
          <div className="p-5">
            <div>
              <h4 className="text-xl font-normal mb-2.5">{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
