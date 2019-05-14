import React from "react";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";
import HorizontalMovies from "../../components/horizontalMovies";
import VerticalMovies from "../../components/verticalMovies";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.bgColor};
`;

const Division = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Tv = ({ loading, error, popular, onTheAir, airingToday, isMovie }) => {
  if (loading) {
    return <LoadingComponent error={error} />;
  }
  return (
    <Container>
      <HorizontalMovies
        isMovie={isMovie}
        movies={onTheAir}
        title={"On The Air"}
      />
      <Division />
      <HorizontalMovies movies={airingToday} title={"Airing Today"} />
      <Division />
      {/* <HorizontalMovies movies={popular} title={"Popular TV"} /> */}
      <VerticalMovies movies={popular} title="Popular Tv" />
    </Container>
  );
};

export default Tv;
