import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';
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
        Prematho Gundeni guche ni kallu, Aa andame asuya padelanti ni navvu, Viluva kataleni bangaram ee nuvvu, Na Rani ♡ <br></br>
       I Love You Kuchi Rani ♡😘<br></br>
       - Khanna ♡
       <div>  <img src={imgfile} style={{ "width":"400px", "height":"300px" }} alt="nyra"/></div>
     
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
