import React from "react";
import styled from "styled-components";
import MoviePosterWithTitle from "./moviePosterWithTitle";
import WEIGHT from "../contants/weight";

const Container = styled.View``;

const Title = styled.Text`
  color: white;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: ${WEIGHT.middle};
`;
const HorizontalContainer = styled.ScrollView``;

const HorizontalMovies = ({ movies, title }) => (
  <Container>
    <Title>{title}</Title>
    <HorizontalContainer horizontal={true}>
      {movies
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MoviePosterWithTitle
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            tv={movie}
          />
        ))}
    </HorizontalContainer>
  </Container>
);
export default HorizontalMovies;
