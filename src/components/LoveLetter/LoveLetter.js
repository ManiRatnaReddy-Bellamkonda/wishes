import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp4';
import imgfile from './nyra.jpeg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (

   
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter} >
    
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Thank you for being a part of my first birthday! <br></br><br></br>
       - Nyra ♡
       <div>  <img src={imgfile} style={{ "width":"300px", "height":"150px" }} alt="nyra"/></div>
     
      </div> 
      
<div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  
    </div>
    <h6>Tap to open the envelope!</h6> <br></br>

        
 
       </div>
  );
};

export default LoveLetter;
