import React from "react";
import Skeleton from "./Skeleton";
import Slider from "react-slick";
import { Settings } from "../common/settings";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  loading,
} from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  let shows = useSelector(getAllShows);
  let loader = useSelector(loading);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );
  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );
  let movieLoader;
  let showLoader;
  if (loader) {
    movieLoader = <Skeleton times={6} className="h-10 w-full" />;
  } else {
    movieLoader = <Slider {...Settings}>{renderMovies}</Slider>;
  }
  if (loader) {
    showLoader = <Skeleton times={6} className="h-10 w-full" />;
  } else {
    showLoader = <Slider {...Settings}>{renderShows}</Slider>;
  }

  return (
    <div>
      <div className="my-5 mx-0">
        <h2 className="mb-2.5 text-gray-400">Movies</h2>
        <div>{movieLoader}</div>
      </div>
      <div className="my-5 mx-0">
        <h2 className="mb-2.5 text-gray-400">Shows</h2>
        <div>{showLoader}</div>
      </div>
    </div>
  );
}
