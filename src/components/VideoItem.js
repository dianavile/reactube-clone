import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({video, onVideoSelect }) => { 
    return (
        <Grid item md={8} style={{ padding: "5px" }}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
                <img style={{ marginRight: "10%" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">
                    <b style={{ marginRight: "10px" }}>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
        );
    }

export default VideoItem;