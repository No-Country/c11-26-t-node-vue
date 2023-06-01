import React, { useRef, useState, useEffect } from 'react';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';

const AudioPlayer = ({ audioFile }) => { // Modificar el nombre de la prop a audioFile
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [audioFile]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="repruductor">
      {audioFile && ( // Modificar la condición para verificar audioFile en lugar de selectedAudioId
        <div className="pausa">
          <audio ref={audioRef} src={audioFile.url}></audio> // Acceder a la URL del archivo de audio
          <button className="btnPausa" onClick={handlePlayPause}>
            {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;





