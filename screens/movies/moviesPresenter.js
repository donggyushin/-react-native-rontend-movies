import React from "react";
import { StatusBar } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import LoadingComponent from "../../components/loadingComponent";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.bgColor};
  color: ${COLORS.fontColor};
`;

const TempText = styled.Text`
  font-size: ${SIZES.big};
  color: ${COLORS.fontColor};
`;

const GoToDetailButton = styled.Button``;

const MoviesPresenter = ({ _goToDetails, loading }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <TempText>Movies</TempText>
      <GoToDetailButton onPress={_goToDetails} title={"Go To Details"} />
    </Container>
  );
};

export default MoviesPresenter;
