import {useState} from 'react';
import ReactPlayer from 'react-player'
// import './App.css';

function VideoPlayer() {
  const [videoFilePath, setVideoFilePath] = useState(null)
  return (

  <div className=''>
    <ReactPlayer
      controls 
      // light='https://placehold.it/640x360.jpg'
      url={videoFilePath ? videoFilePath : 'C:\\'}
    />
    <input type="file" accept="video/mp4,video/x-m4v,video/*,image/png,image/jpeg,image/jpg" onChange={(event)=> {
      console.log(event)
      console.log(event.target.value.replace("C:\\fakepath\\", ""))
      setVideoFilePath(URL.createObjectURL(event.target.files[0]))
    }}/>
  </div>
  );
}

export default VideoPlayer;

//URL's for vid example
//https://www.youtube.com/watch?v=M5QY2_8704o - chillstep coding music
//https://www.youtube.com/watch?v=kt4Z2AA5Kj0 - fireplace`