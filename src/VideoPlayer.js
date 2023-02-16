import React, {useRef, memo} from 'react';

function VideoPlayer({src, onPlay, onPause}) {
    const videoRef = useRef()
    const countRef= useRef(0)
    countRef.current++;
    return (
        <div>
            <h3>Calls: {countRef.current}</h3>
            <h2>{src.title}</h2>
            <video src={src.url} ref={videoRef} />
            <button onClick={
                () => {
                    videoRef.current.play();
                    onPlay();
                }
            } >Play</button>
            <button onClick={() => {
                videoRef.current.pause();
                onPause();
            } } >Pause</button>
        </div>
    );
}

export default memo(VideoPlayer) /* ,(prevProps, nextProps) => {
    if(prevProps.src.title !== nextProps.src.title) return false
    if(prevProps.src.url !== nextProps.src.url) return false
    if(prevProps.onPlay !== nextProps.onPlay) return false
    if(prevProps.onPause !== nextProps.onPause) return false
    return true
});*/