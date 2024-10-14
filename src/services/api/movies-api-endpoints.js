import axios from "axios";
const BASE_URL = "https://670b021cac6860a6c2cb0551.mockapi.io/api";

const ChillMoviesEndpoint = {
  GET_ALL: `${BASE_URL}/chillmovies`,
  INSERT: `${BASE_URL}/chillmovies`,
  UPDATE: `${BASE_URL}/chillmovies/:id`,
  DELETE: `${BASE_URL}/chillmovies`,
};

export const getMovies = async () => {
  try {
    const response = await axios.get(ChillMoviesEndpoint.GET_ALL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const insertMovie = async (data) => {
  try {
    const response = await axios.post(ChillMoviesEndpoint.INSERT, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteMovie = async (data) => {
  try {
    const response = await axios.delete(
      `${ChillMoviesEndpoint.DELETE}/${data}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
