import React,  {useEffect, useState}  from 'react';
import LiveTranscript from '../main/LiveTranscript'
import Stats from "../stats/Stats"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Navbar = () => {
    const [startTime, setStartTime] = useState();
    const [timeElapsed, setTimeElapsed] = useState(0);
    const { transcript, interimTranscript, resetTranscript } = useSpeechRecognition(/*{commands}*/);
    

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    function stopRecording() {
        const stopTime = new Date();
        SpeechRecognition.stopListening();
        console.log(startTime, stopTime);
        setTimeElapsed((stopTime - startTime)/1000);
    }
    function startRecording() {
        setStartTime(new Date());
        console.log("Start recording", startTime);
        SpeechRecognition.startListening({continuous: true});
    }
    return (
        <div>
            <LiveTranscript transcript={transcript}/>
            <Stats transcript ={transcript}/>        
             <nav className="navbar fixed-bottom ">
                 <button id="stopButton" onClick={stopRecording}>Stop</button>
                 <button id="startButton" onClick={startRecording}>Start</button>
                 <button id="newButton" onClick={function myfunc() {console.log(transcript)}}>NEW</button>
                 <button id="resetButton" onClick={resetTranscript}>Reset</button>
             </nav>
        </div>
    )
}

export default Navbar