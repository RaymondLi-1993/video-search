import React from "react";
import "./videoCard.styles.css";

function VideoCard({videos, onVideoSelect}){
  return <div onClick={()=>{onVideoSelect(videos)}} className = "video-item item">
    <img 
    alt={videos.snippet.title} 
    className="ui image"
    src ={videos.snippet.thumbnails.medium.url}
     />
    <div className = "content">
        <div className = "header">{videos.snippet.title}</div>
    </div>
  </div>
}

export default VideoCard;