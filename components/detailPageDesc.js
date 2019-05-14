import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";
import setImageUrl from "../utils/setImageUrl";
import WEIGHT from "../contants/weight";
import { LAYOUTS } from "../contants/layouts";
import setVideoUrl from "../utils/setVideoUrl";

const Container = styled.View`
  padding: 15px;
`;

const MovieTitle = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.bold};
`;

const TagLine = styled.Text`
  color: ${COLORS.fontColor};
  font-size: ${SIZES.small};
  margin-bottom: 15px;
`;

const HomePage = styled.Text`
  color: ${COLORS.fontColor};
  margin-bottom: 5px;
`;

const Companies = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const CompanyLogo = styled.Image``;

const Company = styled.Text`
  color: ${COLORS.fontColor};
  margin-right: 5px;
`;

const CompanyContainer = styled.View``;

const Text = styled.Text`
  color: ${COLORS.fontColor};
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Runtime = styled.Text`
  color: ${COLORS.fontColor};
`;
const Status = styled.Text`
  color: ${COLORS.fontColor};
`;
const VideoTitle = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.middle};
`;
const VideoButton = styled.Button`
  color: ${COLORS.fontColor};
`;

const OverView = styled.Text`
  color: ${COLORS.fontColor};
  margin-bottom: 35px;
  margin-top: 15px;
`;

const CenterContainer = styled.View`
  width: ${LAYOUTS.width};
  align-items: center;
`;

const HomepageUrlButton = styled.TouchableOpacity``;

const DetailPageDesc = ({
  genres,
  homepage,
  original_title,
  production_companies,
  runtime,
  status,
  tagline,
  videoKey,
  videoTitle,
  pressVideoButton,
  overview
}) => (
  <Container>
    <MovieTitle>{original_title}</MovieTitle>
    <TagLine>{tagline}</TagLine>
    <HomepageUrlButton onPress={() => pressVideoButton(homepage)}>
      <HomePage>{homepage}</HomePage>
    </HomepageUrlButton>
    <Text>Companies</Text>
    <Companies>
      {production_companies.map(company => {
        return (
          <CompanyContainer key={company.id}>
            <CompanyLogo
              source={{
                uri: setImageUrl(company.logo_path)
              }}
            />
            <Company>{company.name}</Company>
          </CompanyContainer>
        );
      })}
    </Companies>
    <RowContainer>
      <Text>Runtime:</Text>
      <Runtime>{runtime}</Runtime>
    </RowContainer>
    <RowContainer>
      <Text>Now:</Text>
      <Status>{status}</Status>
    </RowContainer>
    <OverView>{overview}</OverView>
    <CenterContainer>
      <VideoTitle>{videoTitle}</VideoTitle>
    </CenterContainer>
    <VideoButton
      onPress={() => pressVideoButton(setVideoUrl(videoKey))}
      title={"Go to see a video"}
    />
  </Container>
);

export default DetailPageDesc;
