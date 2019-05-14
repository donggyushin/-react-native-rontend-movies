import React from "react";
import { COLORS } from "../../contants/colors";
import LoadingComponent from "../../components/loadingComponent";
import styled from "styled-components";
import { LAYOUTS } from "../../contants/layouts";
import Swiper from "../../components/swiper";
import { StatusBar } from "react-native";
import HorizontalMovies from "../../components/horizontalMovies";
import VerticalMovies from "../../components/verticalMovies";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.bgColor};
  color: ${COLORS.fontColor};
`;

const MovieSliderContainer = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
`;

const InvisibleLine = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MoviesPresenter = ({
  loading,
  popular,
  nowPlaying,
  upComing,
  isMovie
}) => {
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <MovieSliderContainer>
        <Swiper movies={nowPlaying} isMovie={isMovie} />
      </MovieSliderContainer>
      <InvisibleLine />
      <HorizontalMovies
        isMovie={isMovie}
        title={"Upcoming Movies"}
        movies={upComing}
      />
      <InvisibleLine />
      <InvisibleLine />
      <VerticalMovies
        isMovie={isMovie}
        title={"Popular Movies"}
        movies={popular}
      />
    </Container>
  );
};

export default MoviesPresenter;
