import React from "react";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.bgColor};
`;

const Title = styled.Text`
  font-size: ${SIZES.big};
  color: ${COLORS.fontColor};
`;

const Detail = ({ movie, tv, error, loading, isMovie }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Container>
      <Title>Detail</Title>
    </Container>
  );
};

export default Detail;
