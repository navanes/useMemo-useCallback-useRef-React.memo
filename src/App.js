import './App.css';
import {useState, useCallback, useMemo} from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
    const [text, setText] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    const onPlay = useCallback(() => setIsPlaying(true), [])
    const onPause = useCallback(() => setIsPlaying(false), [])
    const videoData = useMemo(()=> {
        return ({
            title: "Funny fat bunny",
            url: "https://www.w3schools.com/html/mov_bbb.mp4"
        })
    }, [])
  return (
    <>
        <input type='text' name='name' placeholder='name' onChange={e => setText(e.target.value)} />
        <h1>{text}</h1>
        <p>Video is {isPlaying ? 'playing' : 'paused'}</p>
        <VideoPlayer
            src= {videoData}
            onPlay={onPlay}
            onPause={onPause}
        />
    </>
  );
}

export default App;
