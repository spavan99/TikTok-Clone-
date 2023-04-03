import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { display } from '@mui/system';
import { NoEncryption } from '@mui/icons-material';

function App() {
  let maximoHeight;
  if (window.innerHeight <= 800) {
    maximoHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosColletion = collection(db, 'videos');
    const videosSnapshot = await getDocs(videosColletion);
    const videoList = videosSnapshot.docs.map(doc => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maximoHeight + 'px' }}>
      <div className="app__videos">
        {video.map(item => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes={videoList.likes}
          messages={222}
          shares={333}
          name="SilvioPavan"
          description="Brecker o goleiro"
          music="musica epica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        /> */}
      </div>
    </div>
  );
}

export default App;
