import axios from "axios";
import { MOVIE_DB_BASE_URL, API_KEY } from "./secret/secret";

const MovieDB = axios.create({
  baseURL: MOVIE_DB_BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US"
  }
});

export const MOVIE = {
  getPopular: () => MovieDB.get("movie/popular"),
  nowPlaying: () => MovieDB.get("movie/now_playing"),
  upComing: () => MovieDB.get("movie/upcoming"),
  detail: id => MovieDB.get(`movie/${id}`)
};
