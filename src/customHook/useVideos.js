import {useState, useEffect} from "react";
import api from "../components/apis/api";
const KEY = `AIzaSyCtC-vLF_i9MQTQZRGaXfLIlliWKGa3ycY`;

let useVideos = (defaultSearch) => {
  const [videos, setVideos] =  useState([]);

  useEffect(()=>{
    onFormSubmit(defaultSearch);
  },[defaultSearch])

  let onFormSubmit = async (search) =>{
    let response = await api.get("/search", {
       params: {
       q: search,
       part: "snippet",
       maxResults: 5,
       key: KEY
      }
    });

      setVideos(response.data.items)
}
return [videos, onFormSubmit];
}

export default useVideos;