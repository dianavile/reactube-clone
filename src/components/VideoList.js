import React from 'react';
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

 const VideoList = ({ videos, onVideoSelect }) => {
   const renderedVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {renderedVideos}
    </Grid>
  );
}

export default VideoList;