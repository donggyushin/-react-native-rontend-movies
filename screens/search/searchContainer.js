import React from "react";
import SearchPresenter from "./searchPresenter";
import { MOVIE_API, TV_API } from "../../api";

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    error: null,
    movies: null,
    tvs: null,
    searchTerm: ""
  };

  render() {
    const { handleInput, searchMoviesAndTVs } = this;
    const { searchTerm, loading, error, movies, tvs } = this.state;
    return (
      <SearchPresenter
        searchMoviesAndTVs={searchMoviesAndTVs}
        handleInput={handleInput}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        movies={movies}
        tvs={tvs}
      />
    );
  }

  searchMoviesAndTVs = async () => {
    this.setState({
      loading: true
    });
    let movies, tvs, error;
    const { searchTerm } = this.state;
    try {
      movies = await MOVIE_API.search(searchTerm);
      tvs = await TV_API.search(searchTerm);
      movies = movies.data.results;
      tvs = tvs.data.results;
    } catch {
      error = "Can't find movies and tvs";
    } finally {
      this.setState({
        movies,
        tvs,
        error,
        loading: false
      });
    }
  };

  handleInput = searchTerm => {
    this.setState({
      searchTerm
    });
  };
}
