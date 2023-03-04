import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    // await pause(1000);
    return res.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const res = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
    await pause(1000);
    return res.data;
  }
);

export const fetchAsyncdetails = createAsyncThunk(
  "movies/fetchAsyncdetails",
  async (id) => {
    const res = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    await pause(1000);
    return res.data;
  }
);
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    error: null,
    isLoading: false,
    movies: {},
    shows: {},
    details: {},
  },

  reducers: {
    removeSelectedMovieorShow: (state) => {
      state.details = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAsyncMovies.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.shows = payload;
    });
    builder.addCase(fetchAsyncShows.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncShows.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    builder.addCase(fetchAsyncdetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchAsyncdetails.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncdetails.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});
export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.details;
export const loading = (state) => state.movies.isLoading;

export default movieSlice.reducer;
