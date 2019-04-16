import React from "react";
import styled from "styled-components";
import setImageUrl from "../utils/setImageUrl";

const MoviePosterImage = styled.Image`
  width: 135px;
  height: 190px;
`;

const MoviePoster = ({ moviePosterUri }) => (
  <MoviePosterImage
    // resizeMode="contain"
    source={{
      uri: setImageUrl(moviePosterUri)
    }}
  />
);

export default MoviePoster;
