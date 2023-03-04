import React, { useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
export default function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Teen Wolf";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
}
