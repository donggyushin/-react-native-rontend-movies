import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import MoviePoster from "./moviePoster";
import { SIZES } from "../contants/sizes";
import WEIGHT from "../contants/weight";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const Column = styled.View`
  width: 60%;
  padding-left: 5px;
`;

const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-size: ${SIZES.small};
  font-weight: ${WEIGHT.middle};
  margin-bottom: 5px;
`;

const VoteAverage = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.middle};
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  color: ${COLORS.fontColor};
`;

const MovieItemForVerticalMovies = ({
  poster,
  title,
  voteAverage,
  overview
}) => (
  <Container>
    <MoviePoster moviePosterUri={poster} />
    <Column>
      <Title>{title}</Title>
      <VoteAverage>✨{voteAverage} / 10</VoteAverage>
      {overview ? (
        <Overview>
          {overview.length > 200 ? `${overview.substr(0, 197)}...` : overview}
        </Overview>
      ) : null}
    </Column>
  </Container>
);
export default MovieItemForVerticalMovies;
