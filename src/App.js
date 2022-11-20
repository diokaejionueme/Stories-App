import React from 'react'
import './App.css';
import VideoCard from './components/VideoCard';
import { useEffect, useState} from 'react'
import { db } from './firebase';
import {query, onSnapshot, collection} from 'firebase/firestore'


const q = query(collection(db, 'videos'))

function App() {
  const [videos, setVidoes] = useState([]);
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setVidoes(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos])

  return (
    <div className="app">
        <div className="app__top">
          <img src="logo192.png" alt="App Logo" className="app__logo"/>
          <h1>Shorts</h1>
        </div>

        <div className="app__videos">
          {videos.map(({url, channel, avatarSrc, song, likes, shares}) =>(

            <VideoCard 
            url={url}
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares}
          />
          ))}
        </div>
    </div>
  );
}

export default App;
