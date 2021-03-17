import './App.css';

function App() {
  const playSound = (e) => {
    // audio.play()
    const currentSound = e.target.childNodes[0];
    currentSound.play();
    // console.log(e);
    console.log(e.target.id);
    // console.log(e.target.childNodes[0]);
    // console.log("playing audio");
    
    // console.log(this.audio.src)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="pad-bank">
          <div id="heater-1" className="drum-pad" onClick={playSound}>
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div id="heater-2" className="drum-pad" onClick={playSound}>
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div id="heater-3" className="drum-pad" onClick={playSound}>
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div id="heater-4" className="drum-pad" onClick={playSound}>
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div id="clap" className="drum-pad" onClick={playSound}>
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div id="open-hh" className="drum-pad" onClick={playSound}>
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div id="kick-and-hat" className="drum-pad" onClick={playSound}>
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div id="kick" className="drum-pad" onClick={playSound}>
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div id="closed-hh" className="drum-pad" onClick={playSound}>
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
        <div className="control-container">
          <div id="display" className="display"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
