import axios from "axios";
import { MOVIE_DB_BASE_URL, API_KEY } from "./secret/secret";

const MovieDB = axios.create({
  baseURL: MOVIE_DB_BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US"
  }
});

export const MOVIE_API = {
  getPopular: () => MovieDB.get("movie/popular"),
  nowPlaying: () => MovieDB.get("movie/now_playing"),
  upComing: () => MovieDB.get("movie/upcoming"),
  detail: id =>
    MovieDB.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  recommendations: id => MovieDB.get(`movie/${id}/recommendations`),
  search: query =>
    MovieDB.get("search/movie", {
      params: {
        query: encodeURIComponent(query)
      }
    })
};

export const TV_API = {
  getPopular: () => MovieDB.get("tv/popular"),
  onTheAir: () => MovieDB.get("tv/on_the_air"),
  detail: id =>
    MovieDB.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  recommendations: id => MovieDB.get(`tv/${id}/recommendations`),
  search: query =>
    MovieDB.get("search/tv", {
      params: {
        query: encodeURIComponent(query)
      }
    })
};
