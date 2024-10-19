// redux/moviesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://670b021cac6860a6c2cb0551.mockapi.io/api/chillmovies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const insertMovie = createAsyncThunk(
  "movies/insertMovie",
  async (movie) => {
    const response = await axios.post(BASE_URL, movie);
    return response.data;
  }
);

export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async (movie) => {
    const response = await axios.put(`${BASE_URL}/${movie.id}`, movie);
    return response.data;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(insertMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })

      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        state.movies[index] = action.payload;
      })

      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
      });
  },
});

export default moviesSlice.reducer;
