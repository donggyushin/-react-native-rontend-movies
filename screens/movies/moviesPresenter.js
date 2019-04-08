import React from "react";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import LoadingComponent from "../../components/loadingComponent";
import styled from "styled-components";
import { LAYOUTS } from "../../contants/layouts";
import Swiper from "../../components/swiper";
import { StatusBar } from "react-native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.bgColor};
  color: ${COLORS.fontColor};
`;

const MovieSliderContainer = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const MoviesPresenter = ({ loading, popular, nowPlaying, upComing }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <MovieSliderContainer>
        <Swiper movies={nowPlaying} />
      </MovieSliderContainer>
    </Container>
  );
};

export default MoviesPresenter;
