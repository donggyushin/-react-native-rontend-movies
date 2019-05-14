import React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../contants/layouts";
import setImageUrl from "../utils/setImageUrl";

const MoviePoster = styled.Image`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const BigMoviePoster = ({ moviePoster }) => (
  <MoviePoster
    source={{
      uri: setImageUrl(moviePoster)
    }}
  />
);

export default BigMoviePoster;
