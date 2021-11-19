import React from 'react'

function VideoDetail(props) {
    if(props.video){
        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title={props.video.snippet.title} src={`https://www.youtube.com/embed/${props.video.id.videoId}`}/>
                </div>
                <h4 className="ui header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    
}

export default VideoDetail
