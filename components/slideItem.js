import React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../contants/layouts";
import setImageUrl from "../utils/setImageUrl";
import MoviePoster from "./moviePoster";
import MovieDesc from "./movieDesc";

const Container = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  position: relative;
`;

const BgImageContainer = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
  position: absolute;
  top: 0;
  left: 0;
`;

const BgImage = styled.Image`
  flex: 1;
  opacity: 0.4;
`;

const MoviePosterContainer = styled.View``;

const MovieDescContainer = styled.View`
  width: 150px;
`;

const SlideItem = ({
  backgroundImageUri,
  moviePosterUri,
  title,
  overview,
  voteAverage,
  id,
  isMovie
}) => (
  <Container>
    <BgImageContainer>
      <BgImage source={{ uri: setImageUrl(backgroundImageUri) }} />
    </BgImageContainer>
    <MoviePosterContainer>
      <MoviePoster moviePosterUri={moviePosterUri} />
    </MoviePosterContainer>
    <MovieDescContainer>
      <MovieDesc
        id={id}
        title={title}
        overview={overview}
        voteAverage={voteAverage}
        isMovie={isMovie}
      />
    </MovieDescContainer>
  </Container>
);

export default SlideItem;
