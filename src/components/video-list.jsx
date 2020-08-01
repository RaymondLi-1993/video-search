import React from "react";
import VideoCard from "./videoCard";


let List = ({videos, onVideoSelect}) =>{
  return <div className = "ui relaxed divded list">
     {videos.map((elem)=>{
  return  <VideoCard 
      key = {elem.id.videoId}
      onVideoSelect = {onVideoSelect}
      videos = {elem}
      />
     })}
  </div>
}

export default List;