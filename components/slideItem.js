import React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../contants/layouts";
import setImageUrl from "../utils/setImageUrl";

const Container = styled.View`
  width: ${LAYOUTS.width};
  height: ${LAYOUTS.height / 3};
  flex: 1;
`;

const BgImageContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const BgImage = styled.Image`
  flex: 1;
  opacity: 0.5;
`;

const SlideItem = ({ backgroundImageUri }) => (
  <Container>
    <BgImageContainer>
      <BgImage source={{ uri: setImageUrl(backgroundImageUri) }} />
    </BgImageContainer>
  </Container>
);

export default SlideItem;
