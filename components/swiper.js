import React from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import { LAYOUTS } from "../contants/layouts";

import SlideItem from "./slideItem";

const Container = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const Slider = ({ movies }) => (
  <Swiper autoplay={true} autoplayTimeout={3} showsPagination={false}>
    {movies
      .filter(movie => movie.backdrop_path !== null)
      .map(movie => (
        <Container key={movie.id}>
          <SlideItem
            moviePosterUri={movie.poster_path}
            backgroundImageUri={movie.backdrop_path}
            title={movie.title}
            overview={movie.overview}
            voteAverage={movie.vote_average}
          />
        </Container>
      ))}
  </Swiper>
);

export default Slider;
