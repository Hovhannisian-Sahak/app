import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchAsyncdetails,
  getSelectMovieOrShow,
  removeSelectedMovieorShow,
} from "../features/movies/movieSlice";
import { AiFillStar } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GoCalendar } from "react-icons/go";
export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncdetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="flex justify-evenly py-10 px-0 font-normal text-gray-400">
      {Object.keys(data).length === 0 ? (
        <div>...loading</div>
      ) : (
        <>
          <div className="w-1/2">
            <div className="text-4xl text-gray-400">{data.Title}</div>
            <div className="pl-1.5 mt-5 text-gray-700 flex">
              <span className="text-blue-500">
                IMDB Rating{" "}
                <AiFillStar className="inline-block text-orange-700" />:
                {data.imdbRating}
              </span>
              <span className=" mx-5 text-blue-500">
                IMDB Votes{" "}
                <BsHandThumbsUpFill className="inline-block text-gray-300" />:
                {data.imdbVotes}
              </span>
              <span className="text-blue-500">
                Runtime{" "}
                <GoDeviceCameraVideo className="inline-block text-gray-300" />:
                {data.Runtime}
              </span>
              <span className=" ml-5 text-blue-500">
                Year
                <GoCalendar className="inline-block text-gray-300" />:
                {data.Year}
              </span>
            </div>
            <div className="mt-5 leading-5">{data.Plot}</div>
            <div>
              <div>
                <span className="py-2.5 px-0 text-gray-400 font-semibold w-25 inline-block">
                  Director
                </span>
                :<span className="text-blue-500"> {data.Director}</span>
              </div>
              <div>
                <span className="py-2.5 px-0 text-gray-400 font-semibold w-25 inline-block">
                  Stars
                </span>
                :<span className="text-blue-500">{data.Actors}</span>
              </div>
              <div>
                <span className="py-2.5 px-0 text-gray-400 font-semibold w-25 inline-block">
                  Genres
                </span>
                :<span className="text-blue-500">{data.Genre}</span>
              </div>
              <div>
                <span className="py-2.5 px-0 text-gray-400 font-semibold w-25 inline-block">
                  Languages
                </span>
                :<span className="text-blue-500">{data.Language}</span>
              </div>
              <div>
                <span className="py-2.5 px-0 text-gray-400 font-semibold w-25 inline-block">
                  Awards
                </span>
                :<span className="text-blue-500">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}
