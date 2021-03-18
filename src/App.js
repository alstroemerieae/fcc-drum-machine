import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [drumPads, setDrumPads] = useState([]);
  const [drumPadName, setdrumPadName] = useState("Press a button");

  // Get all the pad elements
  useEffect(() => {
    let padElements = document.getElementById('pad-bank');
    setDrumPads(padElements.childNodes);
  },[])

  // Event listeners
  document.addEventListener('keydown', function(event){
    const pressedButton = event.key;
    playSound(pressedButton.toUpperCase());
  });

  document.addEventListener('click', function(event){
    const clickedButton = event.target.textContent;
    playSound(clickedButton);
  });

  // This function will play the sounds of the clicked/pressed buttons
  const playSound = (button) => {
    // Loop over the drum pad elements
    for(const pad of drumPads) {
      // If the drum pad element matches the passed in button, play the audio tag on the drum pad element
      if(pad.textContent === button) {
        setdrumPadName(pad.id);
        const currentSound = pad.childNodes[0];
        currentSound.play();
      }
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display" className="pad-display">
          <h1>{drumPadName}</h1>
        </div>
        <div id="pad-bank" className="pad-bank">
          <div id="heater-1" className="drum-pad">
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div id="heater-2" className="drum-pad">
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div id="heater-3" className="drum-pad">
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div id="heater-4" className="drum-pad">
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div id="clap" className="drum-pad">
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div id="open-hh" className="drum-pad">
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div id="kick-and-hat" className="drum-pad">
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div id="kick" className="drum-pad">
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div id="closed-hh" className="drum-pad">
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
