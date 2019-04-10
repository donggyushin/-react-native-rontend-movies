import React from "react";
import styled from "styled-components";
import MovieItemForVerticalMovies from "./movieItemForVerticalMovies";

const Container = styled.View``;

const VerticalMovies = ({ movies }) => (
  <Container>
    {movies
      .filter(movie => movie.poster_path !== null)
      .map(movie => (
        <MovieItemForVerticalMovies
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          voteAverage={movie.vote_average}
        />
      ))}
  </Container>
);

export default VerticalMovies;
