import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Video } from './Video';
import {getVideos} from './VideoService';
import VideoItem from './VideoItem';


const VideosList = () => {

    const [videos, setVideos] = useState<Video[]>([])

    const loadVideos = async() => {
        setVideos(await getVideos());
    }

    useEffect( () => {
        // Ejecuta esto
        loadVideos();
    }, [])//Cuando estas variables cambien

    return (
        <div>
            <h1>Videos List</h1>
            {
                videos.map( video => {
                    return <VideoItem video={video} />
                })
            }
        </div>
    )
}

export default VideosList
