import React, {useState} from 'react';
import './App.css';
import DrumButton from './components/DrumButton';
 
function App() {

  const drumButtons = [
    {word:"Q",label: "Heater-1", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {word:"W",label: "Heater-2", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {word:"E",label: "Heater-3", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {word:"A",label: "Heater-4", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {word:"S",label: "clap", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {word:"D",label: "Open-HH", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {word:"Z",label: "Kick-n'-Hat", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {word:"X",label: "Kick", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {word:"C",label: "Closed-HH", soundFileName: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}

  ]

  const [display, setDisplay] = useState("");

  const [backgroundColor, setBackgroundColor] = useState('#610000');

  const changecolor = () => {
   
    setBackgroundColor('rgb(255, 157, 0)'); 
    
    setTimeout(() => {
      setBackgroundColor('#610000');
    }, 100);// 
  };

  const screename = (e) =>{
    if(power === "0"){

    }
    setDisplay(e)
  }

  const [power, setPower] = useState("0")


  const onoff = () => {
   
    if(power === "0"){
      setPower("1")
    }
    else{
    setPower("0")
    setDisplay("")
  }
  }

  const [volume, setVolume] = useState(50);

  const changevolume = (e) => {  
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    setDisplay(`volume: ${newVolume}`);
  }

  // useEffect(() => {
  //   const handleKeyPress = (e) => {
  //     if (power === "1") {
  //       const keyPressed = e.key.toUpperCase();
  //       const button = drumButtons.find((element) => element.word === keyPressed);
  //       console.log(button)
  //       if (button) {
  //         console.log(DrumButton) // Simula un clic en el botón y pasa el volumen actual
  //        ; // Llama al evento onClick del botón
  //       }
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [power, drumButtons]);

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
        <div id="drum-machine">
          <div id="keys">
              {drumButtons.map((element, index) => (
               <DrumButton  backgroundColor={changecolor} id={element.label} volume={volume} powere={power} screename={screename} key={index} word={element.word} soundFileName={element.soundFileName} label={element.label}></DrumButton> 
              )
              ) }

              {/* <div id='1row'>
                <button className='drum-pad'>Q</button>
                <button className='drum-pad'>W</button>
                <button className='drum-pad'>E</button>
              </div>
              <div id='2row'>
                <button className='drum-pad'>A</button>
                <button className='drum-pad'>S</button>
                <button className='drum-pad'>D</button>
              </div>
              <div id='3row'>
                <button className='drum-pad'>Z</button>
                <button className='drum-pad'>X</button>
                <button className='drum-pad'>C</button>
              </div> */}
          </div>
          <div id="controls">
              <div  id="power-switch">
                <button   onClick={onoff} className={power === "0" ? 'poweron' : 'poweroff'} >{power === "0" ? 'On' : 'Off'}</button>  
              </div>  
              <div id="display">
                {display}
              </div>  
              <div id="volume-switch">
                <input
                
                className='input'
                disabled={power === "0"}
                type='range'
                min={0}
                max={100}
                value={volume}
                onChange={changevolume}
                ></input>
              </div>  
              {/* <div id="type-switch">
                type  
              </div>   */}
          </div>
        </div>
    </div>
  );
}

export default App;

