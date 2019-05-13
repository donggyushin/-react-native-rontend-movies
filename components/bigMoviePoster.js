import React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../contants/layouts";
import setImageUrl from "../utils/setImageUrl";

const Container = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const MoviePoster = styled.Image`
  flex: 1;
`;

const BigMoviePoster = ({ moviePoster }) => {
  return (
    <Container>
      <MoviePoster source={{ uri: setImageUrl(moviePoster) }} />
    </Container>
  );
};

export default BigMoviePoster;
