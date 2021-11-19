import React from 'react'
import VideoItem from './VideoItem'

function VideoList(props) {
    const videoList = props.videos.map(video=> {
        return(
            <VideoItem key={video.id.videoId} video = {video} videoSelected = {props.videoSelected}/>
        ) 
        
    })
    return (
        <div className="ui relaxed divided list">
            {videoList}
        </div>
    )
}

export default VideoList
