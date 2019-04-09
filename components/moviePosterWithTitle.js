import React from "react";
import styled from "styled-components";
import MoviePoster from "./moviePoster";
import WEIGHT from "../contants/weight";

const Container = styled.View`
  padding-left: 20px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: ${WEIGHT.middle};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const VoteAveraging = styled.Text`
  color: white;
`;

const MoviePosterWithTitle = ({ poster, title, voteAverage }) => (
  <Container>
    <MoviePoster moviePosterUri={poster} />
    <Title>{title.length > 18 ? `${title.substr(0, 15)}...` : title}</Title>
    <VoteAveraging>✨{voteAverage} / 10</VoteAveraging>
  </Container>
);
export default MoviePosterWithTitle;
