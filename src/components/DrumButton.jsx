import React, { useRef, useState, useEffect } from 'react';
import "../styles/DrumButton.css";

const DrumButton = (props) => {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    if (audioLoaded) {
      const audioElement = audioRef.current;
      audioElement.volume = props.volume / 100; 
    }
  }, [audioLoaded, props.volume]);


  const playSound = () => {
    if (props.powere === "1" && audioLoaded) {
      const audioElement = audioRef.current;
      if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        props.screename(props.label);
        props.backgroundColor();
      }
    }
  };

  const handleAudioLoaded = () => {
    setAudioLoaded(true);
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === props.word && props.powere === "1") {
      playSound();
    }
  };

  return (
    <button className="drum-pad" id={props.id} onClick={playSound} onKeyDown={handleKeyPress} tabIndex="0">
      {props.word}
      <audio
        className="clip"
        id={props.word}
        ref={audioRef}
        src={props.soundFileName}
        onLoadedData={handleAudioLoaded}
      />
    </button>
  );
}

export default DrumButton;