import React, { useState, useEffect } from "react";
import Input from "./components/input";
import List from "./components/video-list";
import Display from "./components/display";
import useVideos from "../src/customHook/useVideos";

let App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onFormSubmit] = useVideos(`golden buzzer Americas got talent`);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  let onVideoSelect = video => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <Input onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <Display selected={selectedVideo} />
          </div>
          <div className="five wide column">
            <List onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
