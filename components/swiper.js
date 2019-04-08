import React from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import { LAYOUTS } from "../contants/layouts";
import { COLORS } from "../contants/colors";
import SlideItem from "./slideItem";

const Container = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const Span = styled.Text`
  color: ${COLORS.fontColor};
`;

const Slider = ({ movies }) => (
  <Swiper autoplay={true} autoplayTimeout={3} showsPagination={false}>
    {movies
      .filter(movie => movie.backdrop_path !== null)
      .map(movie => (
        <Container key={movie.id}>
          <SlideItem backgroundImageUri={movie.backdrop_path} />
        </Container>
      ))}
  </Swiper>
);

export default Slider;
