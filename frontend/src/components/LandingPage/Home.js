import React,{ useState, useEffect } from 'react';
import './Home.css';
import VideoCard from './VideoCard';
import axios from 'axios';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';

function Home() {

    const [Videos, setVideos] = useState([]);

    return (
        <div className='home'>
            <Typography variant="h5">Recommended</Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}>
                {Videos.map((video) => (
                    <VideoCard 
                        videoId={video._id}
                        image={`http://localhost:5000/${video.thumbnail}`}
                        title={video.title}
                        channel={video.writer.name}
                        views={video.views}
                        timestamp={moment(video.createdAt).format("MMM DD YYYY")}
                        channelImage={video.writer.avatarImage}
                        minutes={Math.floor(video.duration / 60)}
                        seconds={Math.floor(video.duration - (Math.floor(video.duration / 60)) * 60)}
                    />
                ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home