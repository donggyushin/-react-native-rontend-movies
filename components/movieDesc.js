import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";
import WEIGHT from "../contants/weight";
import RedButton from "./redButton";

const Container = styled.View`
  align-items: flex-start;
`;
const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-size: ${SIZES.small};
  font-weight: ${WEIGHT.bold};
`;
const VoteAverage = styled.Text`
  color: ${COLORS.fontColor};
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: ${WEIGHT.middle};
`;
const Desc = styled.Text`
  color: ${COLORS.fontColor};
  margin-bottom: 7px;
`;

const MovieDesc = ({ title, overview, voteAverage, id, isMovie }) => (
  <Container>
    <Title>{title}</Title>
    <VoteAverage>✨ {voteAverage}/10</VoteAverage>
    <Desc>
      {overview.length > 100 ? `${overview.substr(0, 97)}...` : overview}
    </Desc>
    <RedButton
      id={id}
      movieTitle={title}
      title={"go to detail"}
      isMovie={isMovie}
    />
  </Container>
);

export default MovieDesc;
