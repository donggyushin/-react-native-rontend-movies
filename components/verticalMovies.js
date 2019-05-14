import React from "react";
import styled from "styled-components";
import MovieItemForVerticalMovies from "./movieItemForVerticalMovies";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";
import WEIGHT from "../contants/weight";

const Container = styled.View``;

const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-size: ${SIZES.small};
  margin-left: 20px;
`;

const VerticalMovies = ({ movies, title, isMovie }) => (
  <Container>
    {title ? <Title>{title}</Title> : null}

    {movies
      .filter(movie => movie.poster_path !== null)
      .map(movie => (
        <MovieItemForVerticalMovies
          tv={movie}
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          voteAverage={movie.vote_average}
          isMovie={isMovie}
        />
      ))}
  </Container>
);

export default VerticalMovies;
