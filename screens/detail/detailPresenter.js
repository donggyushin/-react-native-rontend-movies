import React from "react";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";
import BigMoviePoster from "../../components/bigMoviePoster";
import DetailPageDesc from "../../components/detailPageDesc";
import TvDetailDesc from "../../components/tv/tvDetailDesc";

const Container = styled.ScrollView`
  flex: 1;
  /* align-items: center;
  justify-content: flex-start; */
  background-color: ${COLORS.bgColor};
`;

const SmallContainer = styled.View``;

const Test = styled.Text`
  display: ${props => (props.visiable ? "flex" : "none")};
  color: white;
`;

const Detail = ({
  movie,
  tv,
  error,
  loading,
  isMovie,
  pressVideoButton,
  changeSeasonsVisiable,
  seasons
}) => {
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Container>
      {movie ? (
        <SmallContainer>
          <BigMoviePoster moviePoster={movie.backdrop_path} />
          <DetailPageDesc
            genres={movie.genres}
            homepage={movie.homepage}
            original_title={movie.original_title}
            production_companies={movie.production_companies}
            runtime={movie.runtime}
            status={movie.status}
            tagline={movie.tagline}
            videoKey={movie.videos.results[0].key}
            videoTitle={movie.videos.results[0].name}
            pressVideoButton={pressVideoButton}
            overview={movie.overview}
          />
        </SmallContainer>
      ) : null}
      {tv ? (
        <SmallContainer>
          <BigMoviePoster moviePoster={tv.backdrop_path} />
          <TvDetailDesc
            episode_run_time={tv.episode_run_time[0]}
            genres={tv.genres}
            homepage={tv.homepage}
            name={tv.name}
            overview={tv.overview}
            production_companies={tv.production_companies}
            seasons={seasons}
            status={tv.status}
            videoUrl={tv.videos.results[0].key}
            videoTitle={tv.videos.results[0].name}
            vote_average={tv.vote_average}
            changeSeasonsVisiable={changeSeasonsVisiable}
          />
        </SmallContainer>
      ) : null}
    </Container>
  );
};

export default Detail;
