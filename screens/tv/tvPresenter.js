import React from "react";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.bgColor};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${SIZES.big};
  color: ${COLORS.fontColor};
`;

const Tv = ({ loading, error, popular, onTheAir, recommendations }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(popular);
  return (
    <Container>
      <Title>TV</Title>
    </Container>
  );
};

export default Tv;
