import React from "react";
import styled from "styled-components";
import WEIGHT from "../../contants/weight";
import { COLORS } from "../../contants/colors";
import { LAYOUTS } from "../../contants/layouts";

const Container = styled.View`
  padding: 7px;
`;

const ContainerForCenter = styled.View`
  width: ${LAYOUTS.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NormalView = styled.View``;

const FlexDirectionRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ThickText = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.bold};
`;
const ThinText = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.thin};
`;
const NormalText = styled.Text`
  color: ${COLORS.fontColor};
`;

const MoreButton = styled.Button``;

const VideoButton = styled.Button``;

const MarginLine = styled.View`
  height: 10px;
`;

const SeasonOverview = styled.Text`
  color: ${COLORS.fontColor};
`;

const TvDetailDesc = ({
  episode_run_time,
  genres,
  homepage,
  name,
  overview,
  production_companies,
  seasons,
  status,
  videoUrl,
  videoTitle,
  vote_average
}) => (
  <Container>
    <ThickText>{name}</ThickText>
    <MarginLine />
    <NormalText>{homepage}</NormalText>
    <MarginLine />
    <NormalText>runtime: {episode_run_time}</NormalText>
    <MarginLine />
    <FlexDirectionRow>
      {genres.map(genre => (
        <NormalText key={genre.id}>{genre.name}</NormalText>
      ))}
    </FlexDirectionRow>
    <MarginLine />
    <FlexDirectionRow>
      {production_companies.map(company => (
        <NormalText key={company.id}>{company.name}</NormalText>
      ))}
    </FlexDirectionRow>
    <MarginLine />
    <MarginLine />
    {seasons.map(season => (
      <NormalView key={season.id}>
        <FlexDirectionRow>
          <NormalText>{season.name}</NormalText>
          <MoreButton
            onPress={() => console.log("more button clicked")}
            title="more"
          />
        </FlexDirectionRow>
        <SeasonOverview>{season.overview}</SeasonOverview>
        <MoreButton
          onPress={() => {
            season.visiable = true;
            console.log("close button clicked", season.visiable);
          }}
          title="close"
        />
      </NormalView>
    ))}
    <MarginLine />
    <NormalText>now: {status}</NormalText>
    <NormalText>average: {vote_average}</NormalText>
    <MarginLine />
    <NormalText>{overview}</NormalText>
    <MarginLine />
    <MarginLine />
    <MarginLine />
    <ContainerForCenter>
      <ThickText>{videoTitle}</ThickText>
    </ContainerForCenter>
    <MarginLine />
    <VideoButton
      onPress={() => console.log("pressed video button")}
      title={"Go to see a video"}
    />
    <MarginLine />
    <MarginLine />
    <MarginLine />
    <MarginLine />
    <MarginLine />
  </Container>
);

export default TvDetailDesc;
