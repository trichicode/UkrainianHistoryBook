import { useState,useRef, useEffect } from 'react';
import './App.scss';

import VerticalSwiper from "./components/home/VerticalSwiper";
import { BookContext } from './context/bookContext';

const App = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(true);

  return (
    <BookContext.Provider value={{ isFocus, isPrevAvailable, isNextAvailable, setIsFocus, setIsPrevAvailable, setIsNextAvailable }}>
      <div className="App">
        <VerticalSwiper />
      {/* <BackgroundAudio /> */}
      </div>
    </BookContext.Provider>
  );
}

const BackgroundAudio = () => {
  const audioPlayer = useRef(null);

  const handlePlay = () => {
    audioPlayer.current.play();
    audioPlayer.current.muted = false;
    audioPlayer.current.volume = 0.1;
  };

  useEffect(() => {
    try {
      audioPlayer.current
        .play()
        .then(() => { 
          console.log('play success');
          // setTimeout(() => {
          //   audioPlayer.current.volume = 0.1;
          // }, 1000);
        })
        .catch((error) => console.log("play promisse fails: ", error));
    } catch (error) {
      console.log("try-catch fails");
    }
  })

  return (
    <video
      ref={audioPlayer}
      // controls
      muted
      style={{position: 'absolute', zIndex: -1}}
      src="../assets/sound/main.mp3"
    />
  )
}

export default App;
