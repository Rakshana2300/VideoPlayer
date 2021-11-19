import React from 'react'
import './VideoItem.css'

function VideoItem(props) {
    return (
        <div className="video-item item" onClick={()=>props.videoSelected(props.video)}>
            <img className="ui image" alt = {props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <h4 className="header">{props.video.snippet.title}</h4>
            </div>      
        </div>
    )
}

export default VideoItem
