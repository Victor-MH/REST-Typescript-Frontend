import React from 'react';
import { Video } from './Video';

interface Props {
    video: Video;
}

const VideoItem = ({video}: Props) => {
    return (
        <div>
           <h2>{video.title}</h2> 
           <h3>{video.author}</h3>
        </div>
    )
}

export default VideoItem
