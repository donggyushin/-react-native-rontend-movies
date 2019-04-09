import React from "react";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";
import HorizontalMovies from "../../components/horizontalMovies";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.bgColor};
`;

const Division = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Tv = ({ loading, error, popular, onTheAir, airingToday }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Container>
      <HorizontalMovies movies={onTheAir} title={"On The Air"} />
      <Division />
      <HorizontalMovies movies={airingToday} title={"Airing Today"} />
    </Container>
  );
};

export default Tv;
