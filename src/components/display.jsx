import React from "react";



function Display({selected}){
  if(!selected){
    return <div>
        <h1>Loading...</h1>
    </div>
  }
    return (
    <div>
        <div className= "ui embed">
            <iframe src={`https://www.youtube.com/embed/${selected.id.videoId}`}></iframe>
        </div>
       <div className = "ui segment">
         <h4 className = "ui header" >{selected.snippet.title} </h4>
         <p>{selected.snippet.description}</p>
      </div>
    </div>
    )
  }


export default Display;